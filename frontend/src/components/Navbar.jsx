import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">TaskNova</h1>
      <div className="space-x-4">
        <Link to="/">Dashboard</Link>
        <Link to="/create">New</Link>
        <button onClick={logout} className="bg-red-600 px-3 py-1 rounded">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
