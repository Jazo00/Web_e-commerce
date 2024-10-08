function Profile() {
    return ( 
     
        <div className="bg-white text-black w-3/4 ">
            <div>
                <div className="bg-gray-300 p-5 font-semibold">
                    <h1 className="text-2xl">Account details</h1>
                </div>
                <div className="flex items-center justify-between px-10">
            
                    <div className="w-2/3">
                        <div className="m-5 flex justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2">Name:</label>
                            <input type="text" disabled className="appearance-none border border-gray-300 text-gray-900 text-md w-64 py-2 px-4 rounded-md" placeholder="John Doe" />
                        </div>
                        <div className="m-5 flex justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2">Email:</label>
                            <input type="email" disabled className="appearance-none border border-gray-300 text-gray-900 text-md w-64 py-2 px-4 rounded-md" placeholder="Johndoe@gmail.com" />
                        </div>
                        <div className="m-5 flex justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2">Birthday:</label>
                            <input type="date" disabled className="appearance-none border border-gray-300 text-gray-900 text-md w-64 py-2 px-4 rounded-md" placeholder="Mobile Number" />
                        </div>
                        <div className="m-5 flex justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2">Contact Number:</label>
                            <input
                                type="tel" 
                                disabled
                                className="appearance-none border border-gray-300 text-gray-900 text-md w-64 py-2 px-4 rounded-md"
                                placeholder="(123) 456-7890"
                            />
                        </div>
                        <div className="m-5 flex justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2">Password:</label>
                            <input type="password" disabled className="appearance-none border border-gray-300 text-gray-900 text-md w-64 py-2 px-4 rounded-md" placeholder="Password"  />
                        </div>
                    </div>
                    <div>
                        <div className="w-64 h-64 rounded-full bg-gray-300"></div>
                    </div>
                </div>

                {/*Billing/Shiiping Addresses */}
                <div className="bg-gray-300 p-5 font-semibold">
                    <h1 className="text-2xl">Billing/Shipping Addresses </h1>
                </div>
                <div className="flex items-start justify-between px-10">
            
                    <div className="w-1/2">
                        <div className="m-5 flex flex-col justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2"> 
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input type="text"  className="appearance-none border border-gray-300 text-gray-900 text-md w-full py-2 px-4 rounded-md" placeholder="John Doe" />
                        </div>
                        <div className="m-5 flex flex-col justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2"> 
                                Contact Number <span className="text-red-500">*</span>
                            </label>

                            <input type="tel"  className="appearance-none border border-gray-300 text-gray-900 text-mdw-full  py-2 px-4 rounded-md" placeholder="+63" />
                        </div>
                        <div className="m-5 flex flex-col justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2"> 
                               Select City <span className="text-red-500">*</span>
                            </label>
                            <select className="appearance-none border border-gray-300 text-gray-900 text-md w-full py-2 px-4 rounded-md">
                                <option value="">Select a City...</option>
                                <option value="province1">City 1</option>
                                <option value="province2">City 2</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                   
                        <div className="m-5 flex flex-col justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2"> 
                                Label <span className="text-red-500">*</span>
                            </label>
                            <input type="text"  className="appearance-none border border-gray-300 text-gray-900 text-md w-full py-2 px-4 rounded-md" placeholder="ex. Home / Work" />
                        </div>
                    </div>

                    
                    <div className="w-1/2">
                    <div className="m-5 flex flex-col justify-between">
                        <label className="block text-gray-700 text-xl font-medium mb-2">
                            Select Province <span className="text-red-500">*</span>
                        </label>
                        <select className="appearance-none border border-gray-300 text-gray-900 text-md w-full py-2 px-4 rounded-md">
                            <option value="">Select a province...</option>
                            <option value="province1">Province 1</option>
                            <option value="province2">Province 2</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="m-5 flex flex-col justify-between">
                        <label className="block text-gray-700 text-xl font-medium mb-2">
                            Select Barangay <span className="text-red-500">*</span>
                        </label>
                        <select className="appearance-none border border-gray-300 text-gray-900 text-md w-full py-2 px-4 rounded-md">
                            <option value="">Select a barangay...</option>
                            <option value="barangay1">Barangay 1</option>
                            <option value="barangay2">Barangay 2</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                    <div className="m-5 flex flex-col justify-between">
                        <label className="block text-gray-700 text-xl font-medium mb-2">
                            Postal Code <span className="text-red-500">*</span>
                        </label>
                        <input type="text" className="appearance-none border border-gray-300 text-gray-900 text-md w-full py-2 px-4 rounded-md" placeholder="" />
                    </div>
                </div>

                 
                </div>

            </div>
        </div>
      
     );
}

export default Profile;