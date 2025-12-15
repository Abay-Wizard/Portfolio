import React from "react";
import { motion } from "framer-motion";

const SkeletonCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      <div className="w-full h-72 bg-gray-200 dark:bg-gray-700" />

      <div className="p-5 flex flex-col gap-3">
        <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-md" />
        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-md" />
        <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded-full mt-1" />
        <div className="h-3 w-1/3 bg-gray-200 dark:bg-gray-700 rounded-md mt-auto" />
      </div>
    </motion.div>
  );
};

const BooksSkeleton = () => {
  return (
    <section className="px-4 py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default BooksSkeleton;
