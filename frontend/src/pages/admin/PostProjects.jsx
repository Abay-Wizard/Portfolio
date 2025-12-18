import React, { useState } from "react";
import { Camera, X } from "lucide-react";
import toast from "react-hot-toast";
import { projectStore } from "../../store/projectStore";

const PostProjects = () => {
  const { createProject, isCreatingProject } = projectStore();
  const [data, setData] = useState({
    projectName: "",
    description: "",
    coverImage: null,
    githubLink: "",
    demoLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return toast.error("Please upload a valid file!");
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setData((prev) => ({ ...prev, coverImage: reader.result }));
    };
  };

  const handleImageRemove = () => setData((prev) => ({ ...prev, coverImage: null }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProject(data);
      setData({
        projectName: "",
        description: "",
        coverImage: null,
        githubLink: "",
        demoLink: "",
      })
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-12">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800/70 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
          Post a New Project
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="flex flex-col items-center justify-center">
            {data.coverImage ? (
              <div className="relative w-64 h-40 md:w-80 md:h-48">
                <img
                  src={data.coverImage}
                  alt="Project Cover"
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
                <button
                  type="button"
                  onClick={handleImageRemove}
                  className="absolute top-2 right-2 bg-red-500/80 text-white rounded-full p-1 hover:bg-red-600 transition"
                >
                  <X size={20} />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-64 h-40 md:w-80 md:h-48 border-2 border-dashed border-purple-400 rounded-xl cursor-pointer hover:bg-purple-50 dark:hover:bg-gray-700 transition">
                <Camera className="w-10 h-10 text-purple-500 mb-2" />
                <span className="text-gray-500 dark:text-gray-300 text-sm">
                  Click to upload project cover
                </span>
                <input type="file" className="hidden" onChange={handleImageUpload} />
              </label>
            )}
          </div>

          <input
            type="text"
            name="projectName"
            placeholder="Project Name"
            value={data.projectName}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none transition"
            required
          />
          <textarea
            name="description"
            placeholder="Project Description"
            value={data.description}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none transition resize-none"
            required
          />
          <input
            type="text"
            name="githubLink"
            placeholder="GitHub Repo Link"
            value={data.githubLink}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none transition"
            required
          />
          <input
            type="text"
            name="demoLink"
            placeholder="Demo Link"
            value={data.demoLink}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none transition"
            required
          />

          <button
            type="submit"
            disabled={isCreatingProject}
            className="w-full py-3 cursor-pointer rounded-xl font-semibold text-white bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isCreatingProject ? "Creating Project..." : "Create Project"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default PostProjects;
