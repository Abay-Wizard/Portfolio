import React from "react";

const ProjectsSkeleton = () => {
  return (
    <section className="px-6 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="h-10 w-64 mx-auto mb-14 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />

        <div className="grid grid-cols-1 px-6 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-md"
            >
              <div className="h-52 w-full bg-gray-200 dark:bg-gray-700 animate-pulse" />

              <div className="p-6 space-y-4">
                <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSkeleton;
