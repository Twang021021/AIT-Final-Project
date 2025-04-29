import { useLocation, Link } from 'react-router-dom';

function SuccessPage() {
  const location = useLocation();
  const { title, description, date } = location.state || {};

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Reminder Submitted!!</h1>
      {title && (
        <div>
          <p><strong>Title:</strong> {title}</p>
          <p><strong>Description:</strong> {description}</p>
          <p><strong>Due Date:</strong> {date}</p>
        </div>
      )}
      <br />
      <Link to="/">Create another reminder</Link> | <Link to="/all">View all reminders</Link>
    </div>
  );
}

export default SuccessPage;
