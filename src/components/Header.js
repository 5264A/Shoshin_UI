import React from 'react';
import { Search, Bell, ShoppingCart, Menu } from 'lucide-react';

const Header = ({ isOpen, open }) => {
  return (
    <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      {/* Search Input */}
      <div className="flex gap-4 w-full items-center  ">
        {!isOpen && <Menu className="md:hidden" onClick={() => open()} />}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Action Icons and Profile */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <Bell className="text-gray-600 cursor-pointer" size={20} />

        {/* Shopping Cart Icon */}
        <ShoppingCart className="text-gray-600 cursor-pointer" size={20} />

        {/* Profile Section */}
        <div className="flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium hidden md:block">
            Admeira John
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header;
