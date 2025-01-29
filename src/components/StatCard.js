import React from 'react';

const StatCard = ({ title, value, subtitle, trend, trendColor = 'text-red-500' }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="text-gray-600 text-sm mb-2">{title}</h3>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-semibold">{value}</span>
        {trend && <span className={`text-sm ${trendColor}`}>{trend}</span>}
      </div>
      <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
    </div>
  );
};

export default StatCard;
