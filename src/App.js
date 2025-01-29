import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatCard from './components/StatCard'
import AnnouncementCard from './components/AnnouncementCard'
import ScheduleCard from './components/ScheduleCard'
import RecentActivity from './components/RecentActivity'

function App() {
  const [isOpen, setisOpen] = useState(false);
  function onClick() {
    setisOpen(!isOpen);
  }
  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isOpen} close={onClick} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isOpen={isOpen} open={onClick} />

        <main className="flex-1 overflow-y-auto p-6 xl:p-10">
          <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
          {/* wrapper*/}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex min-w-[60%] flex-col gap-4 lg:p-4">
              {/* Left-aligned StatCards in a matrix */}
              <div className="flex max-md:flex-col gap-4">
                <div className="bg-orange-100 md:w-1/3 tracking-wide rounded-lg p-4 flex flex-col gap-1">
                  <h1 className="text-lg font-medium">Available Position</h1>
                  <p className="text-4xl font-semibold">24</p>
                  <p className="text-orange-600">4 Urgently needed</p>
                </div>
                <div className="bg-blue-100 md:w-1/3 tracking-wide rounded-lg p-4 flex flex-col gap-1">
                  <h1 className="text-lg font-medium">Job Open</h1>
                  <p className="text-4xl font-semibold">10</p>
                  <p className="text-blue-600">4 Active hiring</p>
                </div>
                <div className="bg-pink-100 md:w-1/3 tracking-wide rounded-lg p-4 flex flex-col gap-1">
                  <h1 className="text-lg font-medium">Job Open</h1>
                  <p className="text-4xl font-semibold">10</p>
                  <p className="text-pink-600">4 Active hiring</p>
                </div>
              </div>
              <div className="flex max-md:flex-col gap-4">
                <div className="md:w-1/2 rounded-lg p-4 border">
                  <p>Total Employee</p>
                  <div className="flex gap-4 justify-between items-center p-3">
                    <div className="flex flex-col gap-1">
                      <p className="text-4xl md:text-6xl mb-4">216</p>
                      <p className="text-xs">120 men</p>
                      <p className="text-xs">96 Women</p>
                    </div>
                    <img src="./image.png" alt="" className="w-1/4 md:w-1/3" />
                  </div>
                </div>
                <div className="md:w-1/2 rounded-lg p-4 border">
                  <p>Total Request</p>
                  <div className="flex gap-2 justify-between items-center p-3">
                    <div className="flex flex-col gap-1">
                      <p className="text-4xl md:text-6xl mb-4">16</p>
                      <p className="text-xs">6 men</p>
                      <p className="text-xs">10 Women</p>
                    </div>
                    <img src="./image.png" alt="" className="w-1/4 md:w-1/3" />
                  </div>
                </div>
              </div>
              <div className="">
                <AnnouncementCard />
              </div>
            </div>
            {/* Right-aligned RecentActivity */}
            <div className="flex flex-col">
              <RecentActivity />
              <ScheduleCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
export default App
