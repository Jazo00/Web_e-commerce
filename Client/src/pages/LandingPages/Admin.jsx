import SidebarButton from '../../components/SidebarButton'; // Ensure the correct import path
import Header from '../../components/Header'; // Ensure this path is correct
import { useTheme } from '../../contexts/ThemeContexts'; // Import useTheme

const Admin = () => {
  const { isDarkMode } = useTheme(); // Access dark mode state

  // Example admin account data for the table
  const adminAccounts = [
    { id: 1, name: 'Admin User 1', email: 'admin1@example.com', accountType: 'Super Admin' },
    { id: 2, name: 'Admin User 2', email: 'admin2@example.com', accountType: 'Admin' },
    { id: 3, name: 'Admin User 3', email: 'admin3@example.com', accountType: 'Moderator' },
  ];

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <SidebarButton /> {/* Sidebar on the left */}
      <div className={`flex-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <Header />
        <section className="p-6 flex-1">
          {/* Admin Account Manager Card */}
          <div className={`p-4 shadow rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="font-semibold text-xl mb-4">Admin Account Dashboard</h2>
            <table className="w-full mt-2">
              <thead>
                <tr className={`text-left border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  <th className={`py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Name</th>
                  <th className={`py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Email</th>
                  <th className={`py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Account Type</th>
                  <th className={`py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Action</th>
                </tr>
              </thead>
              <tbody>
                {adminAccounts.map((account) => (
                  <tr key={account.id} className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                    <td className={`py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{account.name}</td>
                    <td className={`py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{account.email}</td>
                    <td className={`py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{account.accountType}</td>
                    <td className="py-2">
                      <button className={`text-blue-500 hover:underline ${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
                        Edit
                      </button>
                      <button className={`text-red-500 hover:underline ml-2 ${isDarkMode ? 'hover:text-red-400' : 'hover:text-red-600'}`}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
