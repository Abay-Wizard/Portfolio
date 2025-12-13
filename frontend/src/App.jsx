import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Books from "./pages/Books";
import Blogs from "./pages/Blogs";
import Messages from "./pages/admin/Messages";
import AdminBlogs from "./pages/admin/AdminBlogs";
import AdminBooks from "./pages/admin/AdminBooks";
import PostBlogs from "./pages/admin/PostBlogs";
import PostBooks from "./pages/admin/PostBooks";
import UpdateBlog from "./pages/admin/UpdateBlog";
import UpdateBook from "./pages/admin/UpdateBook";

function App() {
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div {...pageTransition}>
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div {...pageTransition}>
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div {...pageTransition}>
                  <Contact />
                </motion.div>
              }
            />
            <Route
              path="/admin"
              element={
                <motion.div {...pageTransition}>
                  <Admin />
                </motion.div>
              }
            />

            <Route
              path="/blogs"
              element={
                <motion.div {...pageTransition}>
                  <Blogs />
                </motion.div>
              }
            />
            <Route
              path="/books"
              element={
                <motion.div {...pageTransition}>
                  <Books />
                </motion.div>
              }
            />
            <Route
              path="/admin/messages"
              element={
                <motion.div {...pageTransition}>
                  <Messages />
                </motion.div>
              }
            />
            <Route
              path="/admin/login"
              element={
                <motion.div {...pageTransition}>
                  <Login />
                </motion.div>
              }
            />
            <Route
              path="/admin/blogs"
              element={
                <motion.div {...pageTransition}>
                  <AdminBlogs />
                </motion.div>
              }
            />
            <Route
              path="/admin/books"
              element={
                <motion.div {...pageTransition}>
                  <AdminBooks />
                </motion.div>
              }
            />
            <Route
              path="/admin/blogs/create"
              element={
                <motion.div {...pageTransition}>
                  <PostBlogs />
                </motion.div>
              }
            />
            <Route
              path="/admin/books/create"
              element={
                <motion.div {...pageTransition}>
                  <PostBooks />
                </motion.div>
              }
            />
            <Route
              path="/admin/books/update/:id"
              element={
                <motion.div {...pageTransition}>
                  <UpdateBook />
                </motion.div>
              }
            />
            <Route
              path="/admin/blogs/update/:id"
              element={
                <motion.div {...pageTransition}>
                  <UpdateBlog />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
