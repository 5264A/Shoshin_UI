import React from 'react';

const RecentActivity = () => {
  return (
    <div className="bg-black rounded-xl p-5 text-white mb-5">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Recently Activity</h3>
      </div>
      <div className="py-4">
        <h4 className="text-base font-medium mb-2">You Posted a New Job</h4>
        <p className="text-sm text-gray-400 mb-5">
          Kindly check the requirements and terms of work and make sure everything is right.
        </p>
        <div className="flex justify-between items-center mt-5">
          <span className="text-sm text-gray-400">Today you make 12 Activity</span>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300">
            See All Activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;