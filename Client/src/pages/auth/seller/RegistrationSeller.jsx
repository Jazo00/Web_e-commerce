import { useState } from "react";
import { Button } from "@/components/ui/button";

const RegisterSeller = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [tab, setTab] = useState("shopInformation");
    const [showModal, setShowModal] = useState(false);

    const handleStartRegistration = () => {
        setIsRegistered(true);
    };

    const handleNext = () => {
        setShowModal(true); // Open the modal when clicking "Next"
    };

    const handleCloseModal = () => {
        setShowModal(false); // Close the modal
    };

    if (isRegistered) {
        return (
            <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white">
                {/* Header */}
                <div className="w-full max-w-lg p-4 bg-gray-900 flex items-center justify-between">
                    <h1 className="text-lg font-semibold">LOGO Seller Registration</h1>
                </div>

                {/* Tab Navigation */}
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
                                <input type="email" value="cyrus@example.com" className="w-full p-2 border rounded-md" disabled />
                            </div>
                            <div>
                                <label className="block mb-2">Shop Name</label>
                                <input type="text" className="w-full p-2 border rounded-md" />
                            </div>
                            <div>
                                <label className="block mb-2">Pickup Address</label>
                                <button className="w-full p-2 border rounded-md text-left" onClick={() => setShowModal(true)}>+Add</button>
                            </div>
                            <div>
                                <label className="block mb-2">Phone Number</label>
                                <input type="text" value="+63" className="w-full p-2 border rounded-md" />
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="text" placeholder="OTP" className="w-full p-2 border rounded-md" />
                                <button className="bg-gray-700 px-4 py-2 rounded-md text-white">Send</button>
                                <button className="bg-gray-200 px-4 py-2 rounded-md">Resend</button>
                            </div>
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
                                <input type="checkbox" id="agree" />
                                <label htmlFor="agree" className="text-sm text-gray-700">
                                    I agree to these <a href="#" className="text-blue-500">Terms and Conditions</a> and <a href="#" className="text-blue-500">Data Privacy Policy</a>
                                </label>
                            </div>
                            <button className="bg-black text-white w-full py-2 rounded-md mt-4">Next</button>
                        </div>
                    )}
                </div>

                {/* Add New Address Modal */}
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
                                <button className="px-4 py-2 bg-gray-200 rounded-md" onClick={handleCloseModal}>Cancel</button>
                                <button className="px-4 py-2 bg-black text-white rounded-md" onClick={handleCloseModal}>Done</button>
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
