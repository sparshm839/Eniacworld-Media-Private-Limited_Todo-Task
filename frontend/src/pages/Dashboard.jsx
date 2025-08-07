import { useEffect, useState } from 'react';
import API from '../utils/api';
import TaskCard from '../components/TaskCard';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    API.get('/tasks').then(res => setTasks(res.data));
    API.get('/tasks/summary').then(res => setSummary(res.data));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Tasks</h1>
      <Link to="/create" className="bg-green-600 py-2 px-4 rounded text-white mb-4 inline-block">+ New Task</Link>
      {summary && (
        <div className="bg-white text-black p-4 rounded mb-6">
          <p>Total: {summary.total} | Completed: {summary.completed} | Pending: {summary.pending} | Avg Rating: {summary.avgRating?.toFixed(2) || 0}</p>
        </div>
      )}
      <div className="space-y-4">
        {tasks.map(task => <TaskCard key={task._id} task={task} />)}
      </div>
    </div>
  );
}

export default Dashboard;
