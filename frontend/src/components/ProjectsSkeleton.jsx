import React from "react";

const AdminProjectsSkeleton = () => {
  return (
    <div className="px-4 py-10 animate-pulse">
      <h1 className="h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-8"></h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 flex flex-col"
          >
            <div className="flex justify-end gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
              <div className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
            </div>

            <div className="w-full h-40 rounded-xl bg-gray-200 dark:bg-gray-700 mb-4"></div>

            <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>

            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>

            <div className="h-3 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProjectsSkeleton;
