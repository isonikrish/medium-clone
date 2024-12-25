
import { FaUserCircle, FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AppBar() {
  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

      <div className="flex items-center space-x-2">
        <span className="text-2xl font-semibold text-gray-800">Medium</span>
      </div>



      <div className="flex items-center justify-center gap-2">
      <Link to={'/write'}>
      
      <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg focus:outline-none">
        <FaPen className="mr-2" />
        Write
      </button>
      </Link>
      <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg focus:outline-none">
        Logout
      </button>
      </div>
    </div>
  );
}

export default AppBar;
