import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setDarkMode(document.documentElement.classList.contains("dark"));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-900' 
        : 'bg-gradient-to-br from-orange-50 to-indigo-50'
    }`}>
      <div className="container mx-auto px-4 py-8">


        {loading && (
          <div className={`text-center py-12 rounded-2xl shadow-lg transition-all duration-300 ${
            darkMode 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white/70 backdrop-blur-sm border border-white/20'
          }`}>
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full transition-colors duration-300 ${
              darkMode ? 'bg-indigo-900/30' : 'bg-indigo-50'
            }`}>
              <div className={`w-6 h-6 border-2 border-t-transparent rounded-full animate-spin ${
                darkMode ? 'border-indigo-400' : 'border-indigo-500'
              }`}></div>
              <span className={`text-lg font-medium transition-colors duration-300 ${
                darkMode ? 'text-indigo-300' : 'text-indigo-600'
              }`}>
                Loading users...
              </span>
            </div>
          </div>
        )}

        {error && (
          <div className={`rounded-2xl shadow-lg p-6 transition-all duration-300 ${
            darkMode 
              ? 'bg-red-900/20 border border-red-800' 
              : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${
                darkMode ? 'bg-red-900/30' : 'bg-red-100'
              }`}>
                <span className={`text-xl ${
                  darkMode ? 'text-red-400' : 'text-red-600'
                }`}>⚠️</span>
              </div>
              <div>
                <h3 className={`font-semibold ${
                  darkMode ? 'text-red-300' : 'text-red-800'
                }`}>
                  Error Loading Users
                </h3>
                <p className={`${
                  darkMode ? 'text-red-400' : 'text-red-600'
                }`}>
                  {error}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className={`rounded-2xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode 
                  ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' 
                  : 'bg-white/70 backdrop-blur-sm border border-white/20 hover:bg-white/80'
              }`}
            >
              {/* User Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  darkMode ? 'bg-indigo-900/40' : 'bg-indigo-100'
                }`}>
                  <span className={`text-xl ${
                    darkMode ? 'text-indigo-300' : 'text-indigo-600'
                  }`}>👤</span>
                </div>
                <div>
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {user.name}
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    @{user.username}
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors duration-300 ${
                    darkMode ? 'bg-purple-900/30' : 'bg-purple-100'
                  }`}>
                    <span className={`text-sm ${
                      darkMode ? 'text-purple-300' : 'text-purple-600'
                    }`}>✉️</span>
                  </div>
                  <span className={`text-sm transition-colors duration-300 break-all ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {user.email}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors duration-300 ${
                    darkMode ? 'bg-green-900/30' : 'bg-green-100'
                  }`}>
                    <span className={`text-sm ${
                      darkMode ? 'text-green-300' : 'text-green-600'
                    }`}>📞</span>
                  </div>
                  <span className={`text-sm transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {user.phone}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors duration-300 ${
                    darkMode ? 'bg-blue-900/30' : 'bg-blue-100'
                  }`}>
                    <span className={`text-sm ${
                      darkMode ? 'text-blue-300' : 'text-blue-600'
                    }`}>🌐</span>
                  </div>
                  <span className={`text-sm transition-colors duration-300 break-all ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {user.website}
                  </span>
                </div>
              </div>

              {user.company && (
                <div className={`mt-4 pt-4 border-t transition-colors duration-300 ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <p className={`text-xs font-medium mb-1 transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    COMPANY
                  </p>
                  <p className={`text-sm font-semibold transition-colors duration-300 ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    {user.company.name}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}