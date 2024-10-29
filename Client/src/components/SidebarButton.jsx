import PropTypes from 'prop-types'; // Import PropTypes
import { Dashboard, Person, Settings, Message } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

// SidebarButton Component
const SidebarButton = ({ children, to }) => {
  const location = useLocation(); // Get the current location
  const isActive = location.pathname === to; // Check if the button is active

  return (
    <div
      className={`p-2 flex items-center gap-2 cursor-pointer 
        ${isActive ? 'bg-black text-white' : 'text-black hover:bg-white'}
        rounded transition-all duration-300`}
    >
      <Link to={to} className='flex items-center'>
        {children}
      </Link>
    </div>
  );
};

// Define prop types for SidebarButton
SidebarButton.propTypes = {
  children: PropTypes.node.isRequired, // 'children' prop must be a node (React element)
  to: PropTypes.string.isRequired, // 'to' prop must be a string
};

// Usage in Sidebar
const Sidebar = () => {
  return (
    <div className='w-64 bg-white text-black p-4 flex flex-col justify-between min-h-screen'>
      <div>
        <div className='bg-black text-white p-4 rounded text-center mb-4'>
          <h2 className='text-2xl font-bold'>LOGO</h2>
        </div>
        <nav className='mt-10'>
          <SidebarButton to='/admin-dashboard'>
            <Dashboard /> Dashboard
          </SidebarButton>
          <SidebarButton to='/admin-dashboard/user'>
            <Person /> User Account
          </SidebarButton>
          <SidebarButton to='/admin-dashboard/admin'>
            <Settings /> Admin Account
          </SidebarButton>
          <SidebarButton to='/admin-dashboard/message'>
            <Message /> Messages
          </SidebarButton>
          <SidebarButton to='/admin-dashboard/settings'>
            <Settings /> Settings
          </SidebarButton>
          {/* Add more sidebar buttons as needed */}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
