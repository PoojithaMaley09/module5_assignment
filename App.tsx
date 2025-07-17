import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex flex-col items-center justify-center">
        <nav className="mb-6">
          <Link to="/" className="text-blue-700 underline mr-4">Home</Link>
          <Link to="/login" className="text-blue-700 underline mr-4">Login</Link>
          <Link to="/register" className="text-blue-700 underline mr-4">Register</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h1 className="text-5xl font-bold">Welcome to LMS Auth</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
