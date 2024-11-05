import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContexts'; // Import useTheme
import api from '@/api/api';
import { toast } from '@/hooks/use-toast';

const EditAdminModal = ({ admins, setAdmins, admin, onClose }) => {
  const { isDarkMode } = useTheme(); // Access dark mode state

  if (!admin) return null; // Prevent rendering if admin is null

  const [username, setUsername] = useState(admin.username);
  const [email, setEmail] = useState(admin.email);

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onEmailChanged = (e) => setEmail(e.target.value);

  const onAdminEdit = async (e) => {
    e.preventDefault();
    try {
      const updateAdmin = { id: admin._id, username, email };
      const response = await api.patch(`/users/`, updateAdmin);
      const updatedAdmin = { ...updateAdmin, _id: admin._id };
      const updatedAdmins = admins.map((admin) =>
        admin._id === admin._id ? updatedAdmin : admin
      );
      setAdmins(updatedAdmins);
      toast({
        variant: 'success',
        title: 'Admin Updated',
        description: response.data.message,
      });
    } catch (error) {
      toast({
        variant: 'failed',
        title: 'Failed Admin Update',
        description: error.message,
      });
    } finally {
      onClose();
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div
        className={`p-4 rounded-lg shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}
      >
        <h2
          className={`text-lg font-semibold ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}
        >
          Edit Admin
        </h2>
        <form>
          <label
            className={`block mb-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Username:
            <input
              type='text'
              value={username}
              className={`mt-1 p-2 rounded border ${
                isDarkMode
                  ? 'bg-gray-700 text-white border-gray-600'
                  : 'bg-white text-black border-gray-300'
              }`}
              onChange={onUsernameChanged}
            />
          </label>
          <label
            className={`block mb-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Email:
            <input
              type='email'
              value={email}
              className={`mt-1 p-2 rounded border ${
                isDarkMode
                  ? 'bg-gray-700 text-white border-gray-600'
                  : 'bg-white text-black border-gray-300'
              }`}
              onChange={onEmailChanged}
            />
          </label>
          {/* Add more fields as necessary */}
          <div className='flex justify-end'>
            <button
              type='button'
              onClick={onClose}
              className={`mr-2 p-2 rounded ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              Close
            </button>
            <button
              type='submit'
              className={`p-2 rounded ${
                isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'
              }`}
              onClick={onAdminEdit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAdminModal;
