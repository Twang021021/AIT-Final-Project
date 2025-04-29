import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from './firebase';
import { Link } from 'react-router-dom';

function AllReminders() {
  const [reminders, setReminders] = useState([]);
  //adding a search function for another form
  const [search, setSearch] = useState('');

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

  //searching for both description and title key words
  const filteredReminders = reminders.filter(reminder =>
    reminder.title.toLowerCase().includes(search.toLowerCase()) ||
    reminder.description.toLowerCase().includes(search.toLowerCase())
  );


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
