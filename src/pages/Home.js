import React from "react";
import { Link } from "react-router-dom";

const eventHighlights = [
  "Six-week Summer Internship Program on (Generative AI & Prompt Engineering) starting from 3rd June to 12th July, 2025",
  "Harnessing AI in research",
  "Eight-Week Summer Internship on AI-powered Full-Stack Development",
  "Data-Driven MarTech Strategies for Next-Gen Digital Campaigns",
  "Internships at COE AMS, IGDTUW (June-July 2025) on IIOT, Industrial Robotics, VMC & Creo",
  "Short-Term Course: Exploring Digital Forensics with Python",
  "Faculty Development Program (12th–17th May 2025, CSE Dept.)",
  "ACM Magazine for 2024-2025"
];

const upcomingEvents = [
  "Orientation - 25 June",
  "Hackathon - 28 June",
  "Freshers Party - 2 July",
  "CodeFest - 5 July",
  "Society Auditions - 10 July"
];

const enrolledSocieties = ["Hypnotics (Dance)", "MSC (Tech)", "Neutron (Game Dev)"];

const pendingTasks = [
  { society: "Hypnotics", task: "Submit choreography video" },
  { society: "MSC", task: "Update portfolio for review" },
  { society: "Neutron", task: "Push game prototype to GitHub" }
];

export default function Home() {
  const user = JSON.parse(localStorage.getItem("studentUser"));

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF2E0] via-[#C0C9EE] to-[#A2AADB] dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="max-w-7xl mx-auto p-8">

        <div className="text-center mb-10">
          <div className="inline-block p-6 bg-white/20 dark:bg-gray-800/40 backdrop-blur-sm rounded-3xl shadow-2xl mb-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#898AC4] to-[#A2AADB] dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
              🎓 Welcome to Student Portal
            </h1>
            <p className="text-xl text-[#898AC4] dark:text-gray-300 font-medium">
              Manage your academic details, societies, and events — all in one place.
            </p>
          </div>

          {!user && (
            <div className="mt-4 space-y-2">
              <p className="text-lg text-red-600 dark:text-red-400 font-semibold">
                Please login or signup to explore the portal.
              </p>
              <div className="flex justify-center gap-4 mt-2">
                <Link
                  to="/login"
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-white dark:bg-gray-700 text-purple-700 dark:text-white px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                >
                  Signup
                </Link>
              </div>
            </div>
          )}
        </div>

        {user && (
          <>
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-[#898AC4] to-[#A2AADB] rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-[#898AC4] dark:text-white">📢 Latest Highlights</h2>
              </div>

              <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
                {eventHighlights.map((event, index) => (
                  <div key={index} className="min-w-[350px] max-w-sm group">
                    <div className="h-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/30 dark:border-gray-700/30">
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-gradient-to-r from-[#898AC4] to-[#A2AADB] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-[#898AC4] dark:text-gray-200 font-medium leading-relaxed group-hover:text-[#898AC4] dark:group-hover:text-white transition-colors duration-300">
                          {event}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-[#A2AADB] to-[#C0C9EE] rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-[#898AC4] dark:text-white">🗓️ Upcoming Events</h2>
              </div>

              <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="min-w-[220px] group">
                    <div className="bg-gradient-to-br from-[#C0C9EE] to-[#A2AADB] dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-1 border border-white/20 dark:border-gray-600/20">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-white/30 dark:bg-gray-800/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">📆</span>
                        </div>
                        <p className="text-white dark:text-gray-200 font-semibold text-lg leading-tight">
                          {event}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid lg:grid-cols-2 gap-12">
              <section>
                <div className="flex items-center mb-8">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#C0C9EE] to-[#FFF2E0] rounded-full mr-4"></div>
                  <h2 className="text-3xl font-bold text-[#898AC4] dark:text-white">🏫 Your Societies</h2>
                </div>

                <div className="space-y-4">
                  {enrolledSocieties.map((society, index) => (
                    <div key={index} className="group">
                      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/30 dark:border-gray-700/30">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-gradient-to-r from-[#898AC4] to-[#A2AADB] rounded-full mr-4"></div>
                          <span className="text-[#898AC4] dark:text-gray-200 font-semibold text-lg">
                            {society}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center mb-8">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#A2AADB] to-[#898AC4] rounded-full mr-4"></div>
                  <h2 className="text-3xl font-bold text-[#898AC4] dark:text-white">🔔 Pending Tasks</h2>
                </div>

                <div className="space-y-4">
                  {pendingTasks.map((task, index) => (
                    <div key={index} className="group">
                      <div className="bg-gradient-to-r from-[#FFF2E0] to-[#C0C9EE] dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/30 dark:border-gray-600/30">
                        <div className="flex items-start">
                          <div className="w-3 h-3 bg-[#898AC4] dark:bg-gray-400 rounded-full mt-2 mr-4"></div>
                          <div>
                            <span className="font-bold text-[#898AC4] dark:text-gray-200 text-lg">
                              {task.society}:
                            </span>
                            <p className="text-[#898AC4] dark:text-gray-300 mt-1 font-medium">
                              {task.task}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center space-x-3 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[#898AC4] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#A2AADB] rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-[#C0C9EE] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
                <span className="text-[#898AC4] dark:text-gray-300 font-semibold">
                  Portal Active & Updated
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
