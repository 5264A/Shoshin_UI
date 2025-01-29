import React, { useState } from 'react';
import { LayoutDashboard, Users, Calendar, UserCircle, Building2, HeadphonesIcon, Settings, X } from 'lucide-react';

const Sidebar = ({isOpen,close}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Users, label: 'Recruitment' },
    { icon: Calendar, label: 'Schedule' },
    { icon: UserCircle, label: 'Employee' },
    { icon: Building2, label: 'Department' },
    { icon: HeadphonesIcon, label: 'Support' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div
      className={`h-screen max-md:fixed border-r bg-white z-50 border-gray-200 p-4 transition-all ${
        isOpen ? '' : 'duration-500 max-md:-translate-x-[200px]'
      }`}
    >
      {/* Branding Section */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">V</span>
        </div>
        <span className="text-xl font-semibold max-md:block md:hidden lg:block">
          Vasilum
        </span>
        <X
          className="border md:hidden rounded-full p-1"
          onClick={() => close()}
        />
      </div>

      {/* Menu Section */}
      <div className="space-y-2 w-fit">
        <p className="text-gray-400 text-xs max-md:block md:hidden lg:block mb-4">
          MAIN MENU
        </p>
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center gap-3 w-fit p-3 rounded-lg cursor-pointer ${
              activeIndex === index
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon size={20} className="" />
            <div className="max-md:block md:hidden lg:block">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Sidebar;
