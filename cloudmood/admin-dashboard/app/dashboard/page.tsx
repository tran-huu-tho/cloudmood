"use client";

import { useState } from "react";
import {
  Users,
  MapPin,
  FolderOpen,
  Star,
  Calendar,
  TrendingUp,
  Home,
  Settings,
  ChevronRight,
  Plane,
  Globe,
} from "lucide-react";

const stats = [
  { name: "Total Users", value: "2,543", change: "+12.5%", icon: Users, color: "from-blue-500 to-cyan-500" },
  { name: "Places", value: "1,234", change: "+8.2%", icon: MapPin, color: "from-purple-500 to-pink-500" },
  { name: "Categories", value: "42", change: "+3.1%", icon: FolderOpen, color: "from-orange-500 to-red-500" },
  { name: "Reviews", value: "8,567", change: "+18.4%", icon: Star, color: "from-green-500 to-emerald-500" },
];

const navItems = [
  { name: "Dashboard", icon: Home, href: "#" },
  { name: "Users", icon: Users, href: "#users" },
  { name: "Places", icon: MapPin, href: "#places" },
  { name: "Categories", icon: FolderOpen, href: "#categories" },
  { name: "Reviews", icon: Star, href: "#reviews" },
  { name: "Itineraries", icon: Calendar, href: "#itineraries" },
  { name: "Settings", icon: Settings, href: "#settings" },
];

const itineraryHistory = [
  { user: "John Doe", itinerary: "Hà Nội 3 Days", destination: "Hà Nội, Vietnam", time: "2 hours ago" },
  { user: "Jane Smith", itinerary: "Beach Escape", destination: "Phú Quốc, Vietnam", time: "3 hours ago" },
  { user: "Mike Johnson", itinerary: "Ancient Town Tour", destination: "Hội An, Vietnam", time: "5 hours ago" },
  { user: "Sarah Wilson", itinerary: "Mountain Adventure", destination: "Sapa, Vietnam", time: "1 day ago" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-80 glass-effect z-40 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <img src="/logo.png" alt="CloudMood" className="w-16 h-16 rounded-xl shadow-lg" />
            </div>
            <div className="animate-in">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                CloudMood
              </h1>
              <p className="text-sm text-gray-500">Travel Admin</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === item.name
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/50"
                  : "text-gray-600 hover:bg-white/50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
              {activeTab === item.name && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-80">
        {/* Header */}
        <header className="glass-effect sticky top-0 z-30 border-b border-white/20">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Welcome back, Admin 👋</h2>
                <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                  <Globe className="w-4 h-4" />
                  Manage your travel platform from here
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-semibold shadow-lg">
                  A
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.name}
                className="glass-effect rounded-2xl p-6 card-hover animate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-gray-600 text-sm font-medium">{stat.name}</h3>
                <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Map & Itinerary History */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map View */}
            <div className="lg:col-span-2 glass-effect rounded-2xl p-6 animate-in">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">Places Map</h3>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium hover:shadow-lg transition-all">
                  View Full Map
                </button>
              </div>
              <div className="h-96 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v11/static/105.8342,21.0285,10,0/800x600@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw')] bg-cover bg-center opacity-50"></div>
                <div className="text-center z-10">
                  <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">Interactive Map</p>
                  <p className="text-sm text-gray-500 mt-2">Showing all places in Vietnam</p>
                </div>
              </div>
            </div>

            {/* Itinerary History */}
            <div className="glass-effect rounded-2xl p-6 animate-in">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Itinerary History</h3>
              <div className="space-y-4">
                {itineraryHistory.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 p-3 rounded-xl hover:bg-white/50 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white flex-shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">
                        <span className="font-bold">{item.user}</span>
                      </p>
                      <p className="text-sm text-gray-600 truncate">{item.itinerary}</p>
                      <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.destination} • {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:shadow-lg transition-all">
                View All Itineraries
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
