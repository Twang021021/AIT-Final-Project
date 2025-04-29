import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import db from './firebase';

function EditReminder() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);

  //fetching data
  useEffect(() => {
    const fetchReminder = async () => {
      try {
        const docRef = doc(db, 'reminders', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title);
          setDescription(data.description);
        } else {
          alert('Reminder not found.');
          navigate('/all');
        }
      } catch (err) {
        console.error('Failed to fetch reminder:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReminder();
  }, [id, navigate]);


  //updater
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, 'reminders', id);
      await updateDoc(docRef, {
        title,
        description
      });
      navigate('/all');
    } catch (err) {
      console.error('Failed to update reminder:', err);
    }
  };

  if (loading) return <p>Loading...</p>;

  //styling
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Edit Reminder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditReminder;
