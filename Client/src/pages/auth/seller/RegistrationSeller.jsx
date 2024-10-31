import { useState } from "react";
import { Button } from "@/components/ui/button";

// UI here is not 100% complete as it is not an exact copy of the figma. 
// Exec Lead na daw bahala magadjust sa UI. Placeholder UI here just to be able to 

/*
    - UI still needs to be corrected by Exec Lead.
    - A few validations have been added but not to all. 
    - No functionality yet.
*/

const RegisterSeller = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [tab, setTab] = useState("shopInformation");
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState(""); // Added email state
    const [shopName, setShopName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("+63");
    const [otp, setOtp] = useState("");
    const [isAgreed, setIsAgreed] = useState(false);
    const [errors, setErrors] = useState({});

    const handleStartRegistration = () => setIsRegistered(true);

    const handleNext = () => {
        const validationErrors = validateShopInformation();
        if (Object.keys(validationErrors).length === 0) {
            setShowModal(true); // Proceed only if no validation errors
        } else {
            setErrors(validationErrors); // Set errors if any
        }
    };

    const validateShopInformation = () => {
        const validationErrors = {};
        if (!shopName) validationErrors.shopName = "Shop name is required";
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) validationErrors.email = "Enter a valid email address";
        if (!phoneNumber || !/^(\+63|0)\d{10}$/.test(phoneNumber)) validationErrors.phoneNumber = "Enter a valid phone number";
        if (!otp || otp.length !== 6) validationErrors.otp = "OTP must be 6 digits";
        return validationErrors;
    };

    const handleModalDone = () => {
        setShowModal(false); // Close modal without further validation for simplicity
    };

    const handleCheckboxChange = () => setIsAgreed(!isAgreed);

    if (isRegistered) {
        return (
            <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white">
                <div className="w-full max-w-lg p-4 bg-gray-900 flex items-center justify-between">
                    <h1 className="text-lg font-semibold">LOGO Seller Registration</h1>
                </div>
                <div className="w-full max-w-lg bg-gray-100 p-6 rounded-md text-black">
                    <div className="flex justify-around mb-6">
                        <button onClick={() => setTab("shopInformation")} className={`py-2 px-4 rounded-full ${tab === "shopInformation" ? "bg-black text-white" : "bg-gray-200"}`}>
                            Shop Information
                        </button>
                        <button onClick={() => setTab("businessInformation")} className={`py-2 px-4 rounded-full ${tab === "businessInformation" ? "bg-black text-white" : "bg-gray-200"}`}>
                            Business Information
                        </button>
                    </div>

                    {tab === "shopInformation" && (
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-2">Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block mb-2">Shop Name</label>
                                <input
                                    type="text"
                                    value={shopName}
                                    onChange={(e) => setShopName(e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                />
                                {errors.shopName && <p className="text-red-500 text-sm">{errors.shopName}</p>}
                            </div>
                            <div>
                                <label className="block mb-2">Pickup Address</label>
                                <button className="w-full p-2 border rounded-md text-left" onClick={() => setShowModal(true)}>+Add</button>
                            </div>
                            <div>
                                <label className="block mb-2">Phone Number</label>
                                <input
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                />
                                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                />
                                <button className="bg-gray-700 px-4 py-2 rounded-md text-white">Send</button>
                                <button className="bg-gray-200 px-4 py-2 rounded-md">Resend</button>
                            </div>
                            {errors.otp && <p className="text-red-500 text-sm">{errors.otp}</p>}
                            <button className="bg-black text-white w-full py-2 rounded-md mt-4" onClick={handleNext}>Next</button>
                        </div>
                    )}

                    {tab === "businessInformation" && (
                        <div className="space-y-4">
                            <p className="text-sm text-gray-700">
                                Please note that the information provided in this registration form will be used to generate invoices and process transactions...
                            </p>
                            <div>
                                <label className="block mb-2">Seller Type</label>
                                <div className="flex items-center gap-4">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="sellerType" className="form-radio" />
                                        Sole Proprietorship
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="sellerType" className="form-radio" />
                                        Partnership/Corporation
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block mb-2">Registered Name</label>
                                <input type="text" className="w-full p-2 border rounded-md" placeholder="Full Name" />
                            </div>
                            <div>
                                <label className="block mb-2">Registered Address</label>
                                <button className="w-full p-2 border rounded-md text-left">Province/City/Barangay</button>
                            </div>
                            <div>
                                <label className="block mb-2">Business Name / Trade Name</label>
                                <input type="text" className="w-full p-2 border rounded-md" />
                            </div>
                            <div>
                                <label className="block mb-2">Industry Category</label>
                                <select className="w-full p-2 border rounded-md">
                                    <option>Select</option>
                                    <option>Retail</option>
                                    <option>Electronics</option>
                                    <option>Fashion</option>
                                    <option>Home Goods</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="agree" checked={isAgreed} onChange={handleCheckboxChange} />
                                <label htmlFor="agree" className="text-sm text-gray-700">
                                    I agree to these <a href="#" className="text-blue-500">Terms and Conditions</a> and <a href="#" className="text-blue-500">Data Privacy Policy</a>
                                </label>
                            </div>
                            <button className="bg-black text-white w-full py-2 rounded-md mt-4" disabled={!isAgreed}>Next</button>
                        </div>
                    )}
                </div>

                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg w-full max-w-md text-black">
                            <h2 className="text-lg font-semibold mb-4">Add a New Address</h2>
                            <div>
                                <label className="block mb-2">Full Name</label>
                                <input type="text" className="w-full p-2 border rounded-md" />
                            </div>
                            <div className="mt-4">
                                <label className="block mb-2">Address</label>
                                <button className="w-full p-2 border rounded-md text-left">Province/City/Barangay</button>
                                <div className="border mt-2 rounded-md overflow-hidden">
                                    <table className="w-full text-left">
                                        <thead className="bg-gray-200">
                                            <tr>
                                                <th className="p-2">Province</th>
                                                <th className="p-2">City</th>
                                                <th className="p-2">Barangay</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="p-2">Abra</td>
                                                <td className="p-2">-</td>
                                                <td className="p-2">-</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2">Agusan Del Norte</td>
                                                <td className="p-2">-</td>
                                                <td className="p-2">-</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2">Agusan Del Sur</td>
                                                <td className="p-2">-</td>
                                                <td className="p-2">-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="flex justify-between mt-6">
                                <button className="px-4 py-2 bg-gray-200 rounded-md" onClick={() => setShowModal(false)}>Cancel</button>
                                <button className="px-4 py-2 bg-black text-white rounded-md" onClick={handleModalDone}>Done</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="bg-gray-200 w-1/2 h-[500px] rounded-3xl border border-black p-10 flex flex-col items-center justify-center space-y-5">
                <h1 className="font-bold text-4xl">Welcome to Tara Auct!</h1>
                <p>To get started, sign up as a seller by completing the necessary details.</p>
                <Button className="px-14" onClick={handleStartRegistration}>Start Registration</Button>
            </div>
        </div>
    );
};

export default RegisterSeller;
