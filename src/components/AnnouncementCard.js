import React from 'react';

const AnnouncementCard = () => {
  const announcements = [
    {
      title: 'Outing schedule for every department',
      date: 'Today, 13 Sep 2023',
    },
    {
      title: 'Meeting HR Department',
      date: 'Tomorrow, 14 Sep',
    },
    {
      title: 'IT Department needs two more talents for the UX/UI Designer position',
      date: 'Thursday, 15 Sep',
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Announcement</h3>
        <button className="text-sm text-blue-600">See All Announcements</button>
      </div>
      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <div key={index} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
            <p className="text-sm">{announcement.title}</p>
            <span className="text-xs text-gray-400">{announcement.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementCard;
