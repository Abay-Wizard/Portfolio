import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const Admin = () => {
  const url = "https://portfolio-dm5d.onrender.com";
  const [messages, setMessages] = useState([]);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${url}/api/message/delete/${id}`);
      if (res.data.success) {
        toast.success(res.data.message);
        setMessages((prev) => prev.filter((msg) => msg._id !== id)); // update UI instantly
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error("Failed to delete message");
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${url}/api/message/get`);
        if (res.data.success) {
          setMessages(res.data.data);
        }
      } catch (error) {
        console.log("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, [url]);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Messages Dashboard
      </h1>

      {messages.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No messages yet. Check back later!
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {messages.map((message) => (
            <div
              key={message._id}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 capitalize">
                    {message.name}
                  </h2>
                  <span className="text-sm text-gray-400">
                    {new Date(message.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <button
                  onClick={() => handleDelete(message._id)}
                  className="p-2 cursor-pointer rounded-full hover:bg-red-100 text-red-500 hover:text-red-600 transition"
                  title="Delete message"
                >
                  <Trash2 size={20} />
                </button>
              </div>

              <p className="text-gray-600 text-sm mb-2">
                <span className="font-medium text-gray-700">Email:</span>{" "}
                {message.email}
              </p>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {message.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
