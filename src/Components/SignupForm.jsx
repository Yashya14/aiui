import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to your API
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-purple-800">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">Sign Up</h2>
        
        <div className="mb-4">
          <label className="block text-purple-600 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:border-purple-600"
            placeholder="Enter your name"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-purple-600 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:border-purple-600"
            placeholder="Enter your email"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-purple-600 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:border-purple-600"
            placeholder="Enter your password"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
