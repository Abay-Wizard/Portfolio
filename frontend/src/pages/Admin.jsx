import React from "react";
import { Link } from "react-router-dom";
import { Upload, Eye, BookPlus, Library, MessagesSquare } from "lucide-react";

const Admin = () => {
  const tabs = [
    { label: "Post Blogs", icon: <Upload className="w-7 h-7 text-blue-500" />, to: "/admin/blogs/create" },
    { label: "See Blogs", icon: <Eye className="w-7 h-7 text-green-500" />, to: "/admin/blogs" },
    { label: "Add Books", icon: <BookPlus className="w-7 h-7 text-purple-500" />, to: "/admin/books/create" },
    { label: "Go to Books", icon: <Library className="w-7 h-7 text-orange-500" />, to: "/admin/books" },
    { label: "Check Incoming Messages", icon: <MessagesSquare className="w-7 h-7 text-red-500" />, to: "/admin/messages" },
    { label: "Post Projects", icon: <Upload className="w-7 h-7 text-yellow-500" />, to: "/admin/projects/create" },
    { label: "Visit Your Projects", icon: <Library className="w-7 h-7 text-teal-500" />, to: "/admin/projects" },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 py-16 px-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-800">
        Navigate admin sections using the tabs below
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {tabs.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="bg-white shadow-md border border-gray-100 rounded-xl p-6 flex flex-col items-center gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="p-4 bg-gray-100 rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <h2 className="text-lg font-medium text-gray-700 text-center">{item.label}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Admin;
