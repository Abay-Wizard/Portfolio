import React from "react";
import { motion } from "framer-motion";

const SkeletonCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 flex flex-col gap-4"
    >
      <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-md" />

      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-md" />
        <div className="h-4 w-11/12 bg-gray-200 dark:bg-gray-700 rounded-md" />
        <div className="h-4 w-9/12 bg-gray-200 dark:bg-gray-700 rounded-md" />
      </div>

      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="h-28 bg-gray-200 dark:bg-gray-700 rounded-xl" />
        <div className="h-28 bg-gray-200 dark:bg-gray-700 rounded-xl" />
      </div>
      <div className="h-3 w-1/3 bg-gray-200 dark:bg-gray-700 rounded-md mt-2" />
    </motion.div>
  );
};

const BlogsSkeleton = () => {
  return (
    <div className="px-4 py-10">
      <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-8" />

      <div className="grid items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogsSkeleton;
