// src/pages/auth/seller/seller_shop_registration.jsx
import React, { useState } from 'react';

function SellerShopRegistration() {
  const [step, setStep] = useState(1); // Step 1: Shop Information, Step 2: Business Information

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setStep(1);
  };

  return (
    <div className="flex flex-col items-center p-5 bg-gray-100 min-h-screen">
      <div className="w-full max-w-md">
        {/* Top Bar */}
        <div className="flex justify-between items-center bg-black text-white p-3 rounded-t-lg">
          <div className="font-bold">LOGO</div>
          <h1 className="flex-1 text-center text-lg font-bold">Seller Registration</h1>
          <div className="text-lg">👤 Cyrus</div>
        </div>

        {/* Registration Container */}
        <div className="bg-gray-200 p-5 rounded-b-lg">
          {/* Step Indicator */}
          <div className="flex justify-center mb-3">
            <div className={`w-3 h-3 rounded-full ${step === 1 ? 'bg-black' : 'bg-gray-400'} mx-1`}></div>
            <div className={`w-3 h-3 rounded-full ${step === 2 ? 'bg-black' : 'bg-gray-400'} mx-1`}></div>
          </div>
          <div className="flex justify-between text-gray-600 text-sm mb-5">
            <span>Shop Information</span>
            <span>Business Information</span>
          </div>

          {/* Conditional Rendering for Form Steps */}
          {step === 1 && (
            <form className="space-y-4">
              <div>
                <label className="block font-semibold">Email Address</label>
                <input type="email" placeholder="example@example.com" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block font-semibold">Shop Name</label>
                <input type="text" placeholder="Enter shop name" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block font-semibold">Pickup Address</label>
                <input type="text" placeholder="+Add" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block font-semibold">Phone Number</label>
                <input type="text" placeholder="+63" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block font-semibold">OTP</label>
                <div className="flex gap-2">
                  <input type="text" placeholder="Enter OTP" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="bg-black text-white py-2 px-4 rounded">Send</button>
                  <button type="button" className="bg-gray-300 py-2 px-4 rounded">Resend</button>
                </div>
              </div>
              <button type="button" onClick={handleNext} className="w-full bg-black text-white py-2 rounded">Next</button>
            </form>
          )}

          {step === 2 && (
            <form className="space-y-4">
              {/* Information Box */}
              <div className="p-4 border border-gray-300 bg-white rounded">
                <div className="flex items-start gap-2">
                  <span className="text-blue-500">ℹ️</span>
                  <p className="text-sm text-gray-700">
                    Please note that the information provided in this registration form will be
                    used to generate invoices and process transactions. Ensure all details are
                    accurate and up-to-date to facilitate smooth billing and shipping. Your
                    information will be securely stored and used only for processing orders and
                    providing customer support.
                  </p>
                </div>
              </div>

              {/* Seller Type */}
              <div>
                <label className="block font-semibold">Seller Type</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="sellerType" value="sole_proprietorship" className="mr-2" />
                    Sole Proprietorship
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="sellerType" value="partnership_corporation" className="mr-2" />
                    Partnership/Corporation
                  </label>
                </div>
              </div>

              {/* Business Information Fields */}
              <div>
                <label className="block font-semibold">Registered Name</label>
                <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block font-semibold">Registered Address</label>
                <input type="text" placeholder="Province/City/Barangay" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block font-semibold">Business Name / Trade Name</label>
                <input type="text" placeholder="Enter business or trade name" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block font-semibold">Industry Category</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="retail">Retail</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="home_goods">Home Goods</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" className="w-4 h-4" />
                <label htmlFor="terms" className="text-sm">
                  I agree to these <a href="#terms" className="text-blue-500 underline">Terms and Conditions</a> and <a href="#privacy" className="text-blue-500 underline">Data Privacy Policy</a>
                </label>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button type="button" onClick={handlePrevious} className="bg-gray-300 text-black py-2 px-4 rounded">Back</button>
                <button type="submit" className="bg-black text-white py-2 px-4 rounded">Submit</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default SellerShopRegistration;
