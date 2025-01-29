import React from 'react';

const ScheduleCard = () => {
  const schedules = [
    {
      title: 'Review candidate applications',
      time: 'Today, 11:30 AM',
    },
    {
      title: 'Interview with candidates',
      time: 'Today, 2:00 PM',
    },
    {
      title: 'Short meeting with product designer from IT Department',
      time: 'Today, 4:00 PM',
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Upcoming Schedule</h3>
        <span className="text-sm text-gray-400">Today, 13 Sep 2023</span>
      </div>
      <div className="space-y-4">
        {schedules.map((schedule, index) => (
          <div key={index} className="flex items-start gap-3 border-b border-gray-100 last:border-0 pb-3 last:pb-0">
            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
            <div>
              <p className="text-sm">{schedule.title}</p>
              <span className="text-xs text-gray-400">{schedule.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;
