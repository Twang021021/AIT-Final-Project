import { useEffect, useState } from 'react';
//updated with deleteDoc and updateDoc
import { collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import db from './firebase';
import { Link } from 'react-router-dom';

function AllReminders() {
  const [reminders, setReminders] = useState([]);
  //adding a search function for another form
  const [search, setSearch] = useState('');

  //adding date filter option (kind of like what they use for purchasing plane tickets)
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'reminders'));
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setReminders(items);
      } catch (error) {
        console.error('Error fetching reminders:', error);
      }
    };

    fetchReminders();
  }, []);

  //searching for both description and title key words ; added search with dates
  const filteredReminders = reminders.filter(reminder => {
    const searchMatch =
      reminder.title.toLowerCase().includes(search.toLowerCase()) ||
      reminder.description.toLowerCase().includes(search.toLowerCase());

    const date = reminder.date;
    const dateMatch =
      (!startDate && !endDate) ||
      (startDate && !endDate && date >= startDate) ||
      (!startDate && endDate && date <= endDate) ||
      (startDate && endDate && date >= startDate && date <= endDate);

    return searchMatch && dateMatch;
  });

  //delete reminders
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'reminders', id));
      setReminders(reminders.filter(reminder => reminder.id !== id));
    } catch (error) {
      console.error('Error deleting reminder:', error);
    }
  };

  //snooze reminders for *1 day
  const handleSnooze = async (reminder) => {
    try {
      const reminderRef = doc(db, 'reminders', reminder.id);
      const newDate = new Date(reminder.date);
      newDate.setDate(newDate.getDate() + 1); // Add *1 day (1 is arbitrary for now)
      const newDateString = newDate.toISOString().split('T')[0];

      await updateDoc(reminderRef, { date: newDateString });

      // Update UI immediately
      setReminders(reminders.map(r => 
        r.id === reminder.id ? { ...r, date: newDateString } : r
      ));
    } catch (error) {
      console.error('Error snoozing reminder:', error);
    }
  };


  return (
    <div style={{ padding: '2rem' }}>
      <h1>All Reminders</h1>

      {/* search Bar */}
      <input
        type="text"
        placeholder="Search reminders by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />


      {/* date picker */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Filter by Date Range:</label><br />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{ marginRight: '0.5rem', padding: '0.5rem' }}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={{ padding: '0.5rem' }}
        />
      </div>


      {/* filtered results */}
      {filteredReminders.length === 0 ? (
        //no matches msg
        <p>No matching reminders found.</p>
      ) : (
        <ul>
          {filteredReminders.map(reminder => (
            <li key={reminder.id}>
              <strong>{reminder.title}</strong><br />
              {reminder.description}<br />
              Due: {reminder.date}
              <br />
              <Link to={`/edit/${reminder.id}`}>Edit</Link> |{" "}
              <button onClick={() => handleDelete(reminder.id)}>Delete</button> |{" "}
              <button onClick={() => handleSnooze(reminder)}>Snooze +1 Day</button>
              <hr />
            </li>
          ))}
        </ul>
      )}

      <Link to="/">Create another reminder</Link>
    </div>
  );
}

export default AllReminders;
