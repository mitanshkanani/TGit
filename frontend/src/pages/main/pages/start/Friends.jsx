import React, { useState } from 'react'

const Friends = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [friendsList, setFriendsList] = useState([]);

  const handleSearch = async (query) => {
    // TODO: Replace with actual API call
    const mockResults = [
      { id: 1, username: 'john_doe', name: 'John Doe' },
      { id: 2, username: 'jane_smith', name: 'Jane Smith' }
    ];
    setSearchResults(mockResults);
  };

  const sendFriendRequest = async (userId) => {
    // TODO: Replace with actual API call
    alert('Friend request sent!');
    // After sending request, update UI
    setSearchResults(searchResults.filter(user => user.id !== userId));
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-6">Friends</h1>
        
        {/* Search Section */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search users by username..."
              className="w-full px-4 py-2 rounded-full border-2 border-black/10 focus:border-black"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleSearch(e.target.value);
              }}
            />
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-4 space-y-2">
              {searchResults.map(user => (
                <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-600">@{user.username}</p>
                  </div>
                  <button
                    onClick={() => sendFriendRequest(user.id)}
                    className="px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                  >
                    Add Friend
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Friends List */}
        {friendsList.length > 0 ? (
          <div className="space-y-2">
            {friendsList.map(friend => (
              <div key={friend.id} className="flex items-center p-3 border rounded-lg">
                <p className="font-medium">{friend.name}</p>
                <p className="text-sm text-gray-600 ml-2">@{friend.username}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Your friends list is currently empty.</p>
        )}
      </div>
    </div>
  );
}

export default Friends
