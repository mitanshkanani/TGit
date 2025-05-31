import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  // Updated notifications state to handle friend requests
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'friend_request', message: 'John Doe sent you a friend request', isNew: true, seen: false },
    { id: 2, type: 'friend_accepted', message: 'Jane Smith accepted your friend request', isNew: true, seen: false },
    { id: 3, type: 'application', message: 'John Doe applied to your project "Project X"', isNew: true, seen: false }
  ]);

  const markAsSeen = () => {
    setNotifications(notifications.map(notif => ({
      ...notif,
      isNew: false,
      seen: true
    })));
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
    if (!isNotificationOpen) {
      markAsSeen();
    }
  };

  const handleNotificationAction = (notificationId, action) => {
    if (action === 'accept') {
      // TODO: Replace with actual API call to accept friend request
      alert('Friend request accepted!');
    }
    setNotifications(notifications.filter(n => n.id !== notificationId));
  };

  return (
    <nav className="bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black tracking-tight hover:text-gray-600">
              DevHub
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center px-8">
            <div className="max-w-lg w-full relative">
              <input
                type="text"
                placeholder="Search repositories..."
                className="w-full px-4 py-2 rounded-full border-2 border-black/10 focus:border-black transition-all duration-200 placeholder:text-gray-400"
              />
              <svg
                className="w-5 h-5 absolute right-3 top-2.5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="/main/"
              className="text-black hover:text-gray-600 font-medium"
            >
              Home
            </a>
            <a
              href="/main/project"
              className="text-black hover:text-gray-600 font-medium"
            >
              Projects
            </a>
            
            {/* Add Notification Button */}
            <div className="relative">
              <button
                onClick={handleNotificationClick}
                className="relative p-2 text-black hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                {notifications.some(n => !n.seen) && (
                  <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
                )}
              </button>
              
              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-black/10 py-1 z-50">
                  <div className="px-4 py-2 border-b border-black/10 flex justify-between items-center">
                    <h3 className="text-sm font-semibold">Notifications</h3>
                    {notifications.length > 0 && (
                      <button
                        onClick={clearNotifications}
                        className="text-xs text-gray-500 hover:text-black"
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                  {notifications.length > 0 ? (
                    notifications.map(notification => (
                      <div
                        key={notification.id}
                        className={`px-4 py-3 hover:bg-gray-50 ${notification.isNew ? 'bg-blue-50' : ''}`}
                      >
                        <p className="text-sm text-black">{notification.message}</p>
                        {notification.type === 'friend_request' && (
                          <div className="mt-2 space-x-2">
                            <button
                              onClick={() => handleNotificationAction(notification.id, 'accept')}
                              className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() => handleNotificationAction(notification.id, 'decline')}
                              className="text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full"
                            >
                              Decline
                            </button>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-3">
                      <p className="text-sm text-gray-500">No notifications</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-black/10 py-1">
                  <a
                    href="/main/profile"
                    className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white"
                  >
                    Profile
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
