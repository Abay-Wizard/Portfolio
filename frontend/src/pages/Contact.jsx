import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const url = "https://portfolio-dm5d.onrender.com";
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
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
        setData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Something went wrong!", error);
      toast.error("Failed to send message.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-2xl rounded-3xl max-w-5xl w-full p-10 md:p-14 flex flex-col md:flex-row items-center gap-12 border border-purple-300/20"
      >
        {/* Left Info Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Let’s Connect
          </h1>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Whether you have a question, want to collaborate, or just want to
            say hello — I’d love to hear from you. I usually respond within a
            day or two.
          </p>

          <div className="space-y-3">
            <a
              href="mailto:a.tessema@alustudent.com"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-500 transition"
            >
              <Mail size={20} /> a.tessema@alustudent.com
            </a>
            <a
              href="https://github.com/Abay-Wizard"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-500 transition"
            >
              <Github size={20} /> github.com/Abay-Wizard
            </a>
            <a
              href="https://www.linkedin.com/in/abay-tessema-8453b328b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-500 transition"
            >
              <Linkedin size={20} /> linkedin.com/in/abay-tessema
            </a>
          </div>
        </div>

        {/* Right Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full flex flex-col gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleEvent}
            placeholder="Your Name"
            className="p-3 border rounded-xl shadow-sm bg-white/90 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleEvent}
            placeholder="Your Email"
            className="p-3 border rounded-xl shadow-sm bg-white/90 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <textarea
            name="message"
            value={data.message}
            onChange={handleEvent}
            rows={6}
            placeholder="Type your message here..."
            className="p-3 border rounded-xl shadow-sm bg-white/90 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
            required
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="flex items-center cursor-pointer justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            Send Message <Send size={18} />
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
