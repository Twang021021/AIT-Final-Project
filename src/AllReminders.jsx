import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from './firebase';
import { Link } from 'react-router-dom';

function AllReminders() {
  const [reminders, setReminders] = useState([]);

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

  return (
    <div style={{ padding: '2rem' }}>
      <h1>All Reminders</h1>
      {reminders.length === 0 ? (
        <p>No reminders found.</p>
      ) : (
        <ul>
          {reminders.map(reminder => (
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
