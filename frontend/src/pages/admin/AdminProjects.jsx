import React, { useEffect } from "react";
import { Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projectStore } from "../../store/projectStore";
import dateConverter from "../../lib/dateConverter";
import AdminProjectsSkeleton from '../../components/AdminProjectsSkeleton'

const AdminProjects = () => {
  const {
    fetchProjects,
    isFetchingProjects,
    projects,
    deleteProject,
  } = projectStore();

  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this project?")) {
        await deleteProject(id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isFetchingProjects) {
    return (
      <AdminProjectsSkeleton/>
    );
  }

  return (
    <div className="px-4 py-10">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 text-center">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-5 flex flex-col"
          >
            <div className="flex justify-end gap-3 mb-3">
              <button
                onClick={() =>
                  navigate(`/admin/projects/update/${project._id}`)
                }
                className="p-2 rounded-lg bg-purple-100 hover:bg-purple-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
              >
                <Edit className="text-purple-600" />
              </button>

              <button
                onClick={() => handleDelete(project._id)}
                className="p-2 rounded-lg bg-red-100 hover:bg-red-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
              >
                <Trash2 className="text-red-600" />
              </button>
            </div>

            <div className="w-full h-40 mb-4 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <img
                src={project.coverImage}
                alt={project.projectName}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 wrap-break-word">
              {project.projectName}
            </p>

            <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm leading-relaxed wrap-break-word line-clamp-4">
              {project.description}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              Published: {dateConverter(project.createdAt)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProjects;
