import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import db from './firebase'; 

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      await addDoc(collection(db, 'reminders'), {
        title,
        description,
        date,
        createdAt: new Date(),
      });

      navigate('/success', {
        state: { title, description, date },
      });
    } catch (error) {
      console.error('Error adding reminder:', error);
      alert('Error saving reminder. Please try again.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Create Reminder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Reminder Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        /><br /><br />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        /><br /><br />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Submit Reminder</button>
      </form>
    </div>
  );
}

export default App;
