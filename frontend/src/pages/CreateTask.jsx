import { useState } from 'react';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';

function CreateTask() {
  const [form, setForm] = useState({ title: '', description: '', dueDate: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/tasks', form);
    navigate('/');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white text-black p-6 rounded">
        <h2 className="text-xl font-bold mb-4">New Task</h2>
        {['title', 'description', 'dueDate'].map(field => (
          <input
            key={field}
            type={field === 'dueDate' ? 'date' : 'text'}
            placeholder={field}
            className="w-full mb-4 p-2 border rounded"
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            required
          />
        ))}
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  );
}

export default CreateTask;
