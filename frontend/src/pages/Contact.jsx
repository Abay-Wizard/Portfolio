import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {
  const url = 'https://portfolio-dm5d.onrender.com';
  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleEvent = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/api/message/send`, data);
      if (res.data.success) {
        toast.success(res.data.message);
        setData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Something went wrong!', error);
      toast.error('Failed to send message.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl max-w-3xl w-full p-8 md:p-12 flex flex-col md:flex-row items-center">
        
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Send Me a Message</h1>
          <p className="text-gray-600 mb-4">
            Have a question or want to work together? Fill out the form and I'll get back to you as soon as possible.
          </p>
          <p className="text-gray-500 text-sm">
            I respect your privacy. Your message will be handled securely.
          </p>
        </div>

        {/* Right Section - Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleEvent}
            placeholder="Your Name"
            className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleEvent}
            placeholder="Your Email"
            className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <textarea
            name="message"
            value={data.message}
            onChange={handleEvent}
            rows={6}
            placeholder="Type your message here"
            className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
            required
          />
          <button
            type="submit"
            className="bg-purple-500 text-white font-semibold py-3 rounded-lg hover:bg-purple-600 transition cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
