import Sidebar from '../../components/SidebarButton.jsx';
import Header from '../../components/Header.jsx';
import { useTheme } from '../../contexts/ThemeContexts';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  const { isDarkMode } = useTheme();
  const transactions = [
    {
      id: '#6548',
      customer: 'Joseph Wheeler',
      status: 'Pending',
      total: 'P0.00',
    },
    {
      id: '#6549',
      customer: 'Joseph Wheeler',
      status: 'Completed',
      total: 'P0.00',
    },
    // Add more entries here
  ];

  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div
        className={`flex-1 flex flex-col ${
          isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
        }`}
      >
        <Header />
        <main className={`flex-1 flex flex-col overflow-y-auto p-4`}>
          {/* Flex container for navigation and filter */}
          <div className='flex justify-between items-center mb-4'>
            {/* Left-aligned links */}
            <div>
              <Link
                to='/'
                className='bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2'
              >
                Overview
              </Link>
              <Link
                to='/activity-log'
                className='bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full'
              >
                Activity Log
              </Link>
            </div>

            {/* Right-aligned dropdown for filtering */}
            <div>
              <select
                className={`py-2 px-4 rounded-full font-bold ${
                  isDarkMode
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-200 text-black'
                }`}
              >
                <option value=''>Filter by</option>
                <option value='pending'>Pending</option>
                <option value='completed'>Completed</option>
                {/* Add more filter options as needed */}
              </select>
            </div>
          </div>

          <section className='flex-1 overflow-y-auto'>
            <section className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-4'>
              <div
                className={`p-4 shadow rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <h3>Total Transactions</h3>
                <p className='text-2xl font-bold'>232</p>
              </div>
              <div
                className={`p-4 shadow rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <h3>Total Revenue</h3>
                <p className='text-2xl font-bold'>₱120K</p>
              </div>
              {/* Add more stat cards as needed */}
            </section>

            <div
              className={`mt-6 p-4 rounded shadow ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <h3
                className={`font-semibold text-lg ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
              >
                Recent Transactions
              </h3>
              <table className='w-full mt-2'>
                <thead>
                  <tr
                    className={`text-left border-b ${
                      isDarkMode ? 'border-gray-700' : 'border-gray-300'
                    }`}
                  >
                    <th
                      className={`${isDarkMode ? 'text-white' : 'text-black'}`}
                    >
                      ID
                    </th>
                    <th
                      className={`${isDarkMode ? 'text-white' : 'text-black'}`}
                    >
                      Customer
                    </th>
                    <th
                      className={`${isDarkMode ? 'text-white' : 'text-black'}`}
                    >
                      Status
                    </th>
                    <th
                      className={`${isDarkMode ? 'text-white' : 'text-black'}`}
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((t) => (
                    <tr
                      key={t.id}
                      className={`border-b ${
                        isDarkMode ? 'border-gray-700' : 'border-gray-300'
                      }`}
                    >
                      <td
                        className={`${
                          isDarkMode ? 'text-white' : 'text-black'
                        }`}
                      >
                        {t.id}
                      </td>
                      <td
                        className={`${
                          isDarkMode ? 'text-white' : 'text-black'
                        }`}
                      >
                        {t.customer}
                      </td>
                      <td
                        className={
                          t.status === 'Pending'
                            ? isDarkMode
                              ? 'text-yellow-300'
                              : 'text-yellow-500'
                            : isDarkMode
                            ? 'text-green-400'
                            : 'text-green-500'
                        }
                      >
                        {t.status}
                      </td>
                      <td
                        className={`${
                          isDarkMode ? 'text-white' : 'text-black'
                        }`}
                      >
                        {t.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminHome;
