import { Link } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

import SearchIcon from '../assets/icons/search.png'; // Adjust the path as necessary
import CartIcon from '../assets/icons/shopping-cart.png';
import UserIcon from '../assets/icons/user.png';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/login'); // Navigate to the login page
    };
  
    return (
        <>
            <div className='flex justify-between items-center p-5'> 
                <h1 className='text-4xl mx-2 font-bold'>S H E I N</h1>

                {/* Search Bar Container */}
                <div className="relative w-full max-w-xl mx-10 flex flex-grow justify-center"> 
                    <button className='absolute inset-y-0 left-0 border-r border-black rounded-r-3xl px-4 focus:outline-none'> 
                        All Categories
                    </button>                   
                    <input
                        type="text"
                        className='border border-black rounded-3xl h-12 w-full pl-40 pr-8 focus:outline-none focus:border-none focus:ring-2 focus:ring-black'
                        placeholder='Search....'
                    />
                    <button className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none" type="button">
                        <img src={SearchIcon} alt="Search" className="w-6 h-6 cursor-pointer" />
                    </button>
                </div>

                <div className="flex items-center"> 
                    <button className="flex items-center pr-3 focus:outline-none" type="button">
                        <img src={CartIcon} alt="Cart" className="w-7 h-7 cursor-pointer" />
                    </button>
                    <Dropdown
                        inline
                        label={<img src={UserIcon} alt="User" className="w-7 h-7 cursor-pointer" />}
                        className="mx-2 outline-none focus:outline-none active:outline-none"
                        arrowIcon={false}
                    >
                        <div className="dropdown-menu absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Dropdown.Item>
                                <Link to="/account" className='w-full text-center text-black block  hover:bg-gray-100'>
                                    Profile
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/account/settings" className='w-full text-center text-black block  hover:bg-gray-100'>
                                    Settings
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/account/bidding-history" className='w-full text-center text-black block  hover:bg-gray-100'>
                                    Bidding History
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/account/my-products" className='w-full text-center text-black block  hover:bg-gray-100'>
                                    My Products
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/account/my-orders" className='w-full text-center text-black block  hover:bg-gray-100'>
                                    My Orders
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/account/my-wishlist" className='w-full text-center text-black block  hover:bg-gray-100'>
                                    My Wishlist
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/account/logout" className='w-full text-center text-black block hover:bg-gray-100'>
                                    Logout
                                </Link>
                            </Dropdown.Item>
                        </div>
                    </Dropdown>


                    <button 
                        className='bg-black text-white px-10 py-2 rounded-3xl mx-2'
                        onClick={handleLoginClick} // Call the function on click
                        >
                        Login
                    </button>
                </div>
            </div>

            <nav>
                <div className='flex justify-center items-center border-2 py-3 bg-black text-white'>
                    <Link className='p-1 px-10' to="/">Home</Link>
                    
                    {/* Shop Now Dropdown */}
                    <Dropdown inline label="Shop Now" className='mx-2 px-1'>
                        <Dropdown.Item>
                            <Link to="/shop-now" className='w-full text-black block hover:bg-gray-100 text-center'>Shop Now</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to="/sell-now" className='w-full text-black block hover:bg-gray-100 text-center'>Sell Now</Link>
                        </Dropdown.Item>
                    </Dropdown>
                    <div className='w-10' />

                    {/* Trade Deals Dropdown */}
                    <Dropdown inline label="Trade Deals" className='mx-2'>
                        <Dropdown.Item>
                            <Link to="/trade-deals" className='w-full text-black block  hover:bg-gray-100 text-center'>Trade Deals</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to="/bidding-zone" className='w-full text-black block  hover:bg-gray-100 text-center'>Bidding Zone</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to="/trade-events" className='w-full text-black block hover:bg-gray-100 text-center'>Trade Events</Link>
                        </Dropdown.Item>
                    </Dropdown>

                    <Link className='p-1 px-10' to="/about">About Us</Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
