import React, { useState } from "react";

const subjects = [
  "Applied Mathematics",
  "Applied Physics", 
  "Data Structures",
  "CAD Modelling",
  "Cyber Security Awareness",
  "Applied Mechanics"
];

const cards = [
  { 
    title: "GPA", 
    value: "3.85", 
    bg: "bg-[#A2AADB] dark:bg-gray-800", 
    text: "text-white dark:text-gray-200",
    hoverBg: "hover:bg-[#898AC4] dark:hover:bg-gray-700",
    icon: "🎯"
  },
  { 
    title: "Attendance", 
    value: "90%", 
    bg: "bg-[#A2AADB] dark:bg-gray-800", 
    text: "text-white dark:text-gray-200",
    hoverBg: "hover:bg-[#898AC4] dark:hover:bg-gray-700",
    icon: "📅"
  },
  { 
    title: "Subjects", 
    value: "6", 
    bg: "bg-[#A2AADB] dark:bg-gray-800", 
    text: "text-white dark:text-gray-200",
    hoverBg: "hover:bg-[#898AC4] dark:hover:bg-gray-700",
    icon: "📚",
    hasDropdown: true
  },
];

export default function Dashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="p-8 bg-gradient-to-br from-[#FFF2E0] to-[#C0C9EE] dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#898AC4] dark:text-white text-center">
          📊 Student Dashboard
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`
                p-8 rounded-2xl shadow-lg 
                transition-all duration-500 ease-out
                transform hover:scale-110 hover:-translate-y-2
                hover:shadow-2xl hover:shadow-[#898AC4]/20
                cursor-pointer group relative
                ${card.bg} ${card.hoverBg}
                border border-white/20
              `}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className={`text-xl font-semibold ${card.text} group-hover:text-white transition-colors duration-300`}>
                  {card.title}
                </h2>
                <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">
                  {card.icon}
                </span>
              </div>
              
              {card.hasDropdown ? (
                <div className="flex items-center justify-between">
                  <p className={`text-4xl font-bold ${card.text} group-hover:text-white transition-colors duration-300`}>
                    {card.value}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsDropdownOpen(!isDropdownOpen);
                    }}
                    className={`
                      ml-4 p-2 rounded-full transition-all duration-300
                      ${card.text} group-hover:text-white
                      hover:bg-white/20 flex items-center justify-center
                    `}
                  >
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              ) : (
                <p className={`text-4xl font-bold ${card.text} group-hover:text-white transition-colors duration-300`}>
                  {card.value}
                </p>
              )}
              
              {card.hasDropdown && isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-[#C0C9EE] dark:border-gray-600 z-10 overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-[#898AC4] dark:text-gray-300 mb-3 uppercase tracking-wide">
                      Current Subjects
                    </h3>
                    <div className="space-y-2">
                      {subjects.map((subject, subIdx) => (
                        <div
                          key={subIdx}
                          className="flex items-center p-3 rounded-lg bg-[#FFF2E0] dark:bg-gray-700 hover:bg-[#C0C9EE] dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
                        >
                          <div className="w-2 h-2 bg-[#898AC4] dark:bg-gray-400 rounded-full mr-3"></div>
                          <span className="text-[#898AC4] dark:text-gray-200 font-medium text-sm">
                            {subject}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-4 h-1 bg-white/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white/60 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-[#898AC4] dark:text-gray-300 font-medium">Dashboard Updated</span>
          </div>
        </div>
      </div>
    </div>
  );
}