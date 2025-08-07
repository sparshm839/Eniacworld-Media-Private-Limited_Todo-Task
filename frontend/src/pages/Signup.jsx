import { useState } from 'react';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post('/auth/signup', form);
    localStorage.setItem('token', res.data.token);
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-96 text-black">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {['username', 'email', 'password'].map((field) => (
          <input
            key={field}
            type={field === 'password' ? 'password' : 'text'}
            placeholder={field}
            className="w-full mb-4 p-2 border rounded"
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            required
          />
        ))}
        <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">Register</button>
      </form>
    </div>
  );
}

export default Signup;
