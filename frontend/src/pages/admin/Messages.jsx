import React, { useEffect, useState } from "react";
import { Trash2, Mail, User } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import axiosInstance from "../../lib/axios";

const Admin = () => {
  const [messages, setMessages] = useState([]);

  const handleDelete = async (id) => {
    try {
      const res = await axiosInstance.delete(`/message/delete/${id}`);
      if (res.data.success) {
        toast.success(res.data.message);
        setMessages((prev) => prev.filter((msg) => msg._id !== id)); // instant UI update
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error("Failed to delete message");
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axiosInstance.get(`/message/get`);
        if (res.data.success) setMessages(res.data.data);
      } catch (error) {
        console.log("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, []);

  return (
    <section className="min-h-screen bg-linear-to-b from-purple-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-10 px-6 md:px-12 transition-colors duration-300">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10"
      >
        Messages Dashboard
      </motion.h1>

      {/* Empty State */}
      {messages.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center text-center text-gray-500 dark:text-gray-400 mt-20"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/5356/5356190.png"
            alt="No messages"
            className="w-64 h-64 mb-6 opacity-80"
          />
          <p className="text-lg font-medium">
            No messages yet — your inbox is peaceful 😄
          </p>
        </motion.div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message._id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                      <User className="w-5 h-5 text-purple-500" />
                      {message.name}
                    </h2>
                    <span className="text-sm text-gray-400">
                      {new Date(message.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDelete(message._id)}
                    className="p-2 cursor-pointer rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500 hover:text-red-600 transition"
                    title="Delete message"
                  >
                    <Trash2 size={20} />
                  </motion.button>
                </div>

                {/* Content */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-500" />
                  {message.email}
                </p>

                <p className="text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line border-t border-gray-200 dark:border-gray-700 pt-3">
                  {message.message}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
};

export default Admin;
