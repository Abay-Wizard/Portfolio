import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { blogStore } from "../store/blogStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const navigate = useNavigate();
  const { adminLogin } = blogStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await adminLogin({ email, password });
      if (res) navigate("/admin");
      else navigate("/admin/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      className="flex items-center justify-center min-h-screen p-6 md:p-12
      bg-linear-to-b from-gray-50 via-white to-gray-100
      dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      <div
        className="w-full max-w-md bg-white/80 dark:bg-gray-800/60
        backdrop-blur-xl border border-purple-500/20
        shadow-xl shadow-purple-500/10 rounded-3xl p-10 animate-fadeIn"
      >
        <h1
          className="text-3xl md:text-4xl font-bold text-center mb-3
          text-gray-900 dark:text-white tracking-wide"
        >
          Admin Login
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 text-sm mb-8 leading-relaxed">
          This section is restricted to authorized administrators only.
          If you are not an admin, please return to the homepage.
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-700/50
              text-gray-900 dark:text-white placeholder-gray-400
              border border-purple-500/30 focus:ring focus:ring-purple-500/40
              focus:border-purple-500 outline-none transition"
              required
            />
          </div>

          <div className="relative">
            <label className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              Password
            </label>

            <input
              type={isPasswordShown ? "text" : "password"}
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-700/50
              text-gray-900 dark:text-white placeholder-gray-400
              border border-purple-500/30 focus:ring focus:ring-purple-500/40
              focus:border-purple-500 outline-none transition pr-12"
              required
            />

            <button
              type="button"
              onClick={() => setIsPasswordShown((prev) => !prev)}
              className="absolute right-4 bottom-3 text-gray-600 dark:text-gray-300 hover:text-purple-600"
            >
              {isPasswordShown ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white
            bg-purple-600 hover:bg-purple-700
            shadow-lg shadow-purple-500/20
            transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <p className="text-[11px] text-gray-500 dark:text-gray-400 text-center mt-8">
          Keep your credentials safe. Admin access is sensitive.
        </p>
      </div>
    </section>
  );
};

export default Login;
