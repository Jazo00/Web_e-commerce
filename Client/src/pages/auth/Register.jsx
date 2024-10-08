import { useState } from 'react';
import loginBg from '../../assets/images/login-bg.png';

function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (  
        <div className='w-screen h-screen flex items-end justify-around relative px-16 pt-16'
            style={{
                backgroundImage: `url(${loginBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='text-white self-center space-y-10 mb-64 m-20 pr-96'>
            <h1 className='font-bold text-8xl'>LOGO</h1>
                <sub className='font-bold text-5xl '>&quot;Unlock the Best Deals - Trade, Buy, & Sell!&quot;</sub>
                <p className='text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
            </div>
            <div className='bg-white text-black rounded-t-3xl w-full max-w-lg h-full p-12'>  
                <sub>WELCOME BACK!</sub>
                <h1 className='text-3xl mb-10'>Create Account</h1>

                <form className=''>
                    {/* First Name Input with Floating Label */}
                    <div className="relative mb-6">
                        <input 
                            type="text" 
                            id="full_nsame" 
                            className="peer bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-4 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black placeholder-transparent" 
                            placeholder="Enter Full Name" 
                            required 
                        />
                        <label 
                            htmlFor="full_name" 
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-2.5 scale-75 top-0 z-10 origin-[0]
                             bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-3 left-2"
                        >
                            Full Name
                        </label>
                    </div>

                    <div className="relative mb-6">
                        <input 
                            type="email" 
                            id="email" 
                            className="peer bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-4 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black placeholder-transparent" 
                            placeholder="First Name" 
                            required 
                        />
                        <label 
                            htmlFor="email" 
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-2.5 scale-75 top-0 z-10 origin-[0]
                             bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-3 left-2"
                        >
                            Email
                        </label>
                    </div>

                    {/* Password Input with Floating Label and Toggle Visibility */}
                    <div className="relative mb-6">
                        <input 
                            type={passwordVisible ? "text" : "password"} 
                            id="password" 
                            className="peer bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-4 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black placeholder-transparent" 
                            placeholder="Password" 
                            required 
                        />
                        <label 
                            htmlFor="password" 
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-2.5 scale-75 top-0 z-10 origin-[0]
                            bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-3 left-2"                        >
                            Password
                        </label>
                        <button 
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 focus:outline-none"
                        >
                            {passwordVisible ? 'Hide' : 'Show'}
                        </button>
                        
                    </div>

                            {/* Password Input with Floating Label and Toggle Visibility */}
                            <div className="relative mb-6">
                        <input 
                            type={confirmPasswordVisible ? "text" : "password"} 
                            id="confirm_password" 
                            className="peer bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-4 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black placeholder-transparent" 
                            placeholder="Password" 
                            required 
                        />
                        <label 
                            htmlFor="confirm_password" 
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-2.5 scale-75 top-0 z-10 origin-[0]
                            bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-3 left-2"                        >
                            Confirm Password
                        </label>
                        <button 
                            type="button"
                            onClick={toggleConfirmPasswordVisibility}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 focus:outline-none"
                        >
                            {confirmPasswordVisible ? 'Hide' : 'Show'}
                        </button>
                        
                    </div>

                    <p className='mb-3'>By creating an account, you are agreeing to our <b>Privacy Policy </b>and <b>Electronics Communication Policy.</b> </p>
                    <button className='bg-black text-white rounded-xl text-lg p-2.5 w-full'>Sign Up</button>
                    <div className='flex items-center my-5'>
                        <div className='flex-grow border-t border-gray-300'></div>
                        <span className='mx-3 text-md'>or</span>
                        <div className='flex-grow border-t border-gray-300'></div>
                    </div>                    <button className='border-black border text-black rounded-xl text-ml p-2 w-full mb-3'>Continue with Facebook</button>                    
                    <button className='border-black border text-black rounded-xl text-ml p-2 w-full'>Continue with Google</button>

                    <div className='flex items-center justify-center mt-4'>
                        <sub className='mr-3 mb-1 text-LG'> Already have an Account?</sub>
                        <a href='/login' className='font-bold text-black hover:text-black'>LOG IN</a>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
