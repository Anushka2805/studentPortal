import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const GraduationCapIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const DashboardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const LogOutIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const SunIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export default function Navbar() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("studentUser"));
    setUser(userData);
    
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("studentUser");
    setUser(null);
    navigate("/login");
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-[#FFF2E0] dark:bg-[#898AC4] border-b border-[#C0C9EE] dark:border-[#A2AADB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/"
            className="flex items-center gap-3 text-xl font-semibold text-[#898AC4] dark:text-[#FFF2E0] hover:text-[#A2AADB] transition-colors duration-200"
          >
            <GraduationCapIcon />
            <span>Student Portal</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" text="Home" />
            <NavLink to="/users" text="Users" />
            <NavLink to="/dashboard" text="Dashboard" />
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md font-medium transition-all duration-200 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-[#A2AADB]/20"
            >
              Logout
            </button>
          </div>

          <div className="flex items-center gap-4">
            {user && (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-[#898AC4] dark:text-[#FFF2E0]">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#898AC4] to-[#A2AADB] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="font-medium">{user.name}</span>
                </div>
              </div>
            )}

            <button
              onClick={toggleDarkMode}
              className="p-2 text-[#898AC4] dark:text-[#FFF2E0] hover:text-[#A2AADB] hover:bg-[#C0C9EE]/20 dark:hover:bg-[#A2AADB]/20 rounded-full transition-all duration-200"
              title="Toggle Dark Mode"
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>

        <div className="md:hidden pb-4">
          <div className="flex flex-wrap gap-2 pt-2">
            <MobileNavLink to="/" text="Home" />
            <MobileNavLink to="/users" text="Users" />
            <MobileNavLink to="/dashboard" text="Dashboard" />
            <button
              onClick={handleLogout}
              className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 text-red-500 hover:text-red-600 bg-red-50 dark:bg-[#A2AADB]/10 hover:bg-red-100 dark:hover:bg-[#A2AADB]/20"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, text }) {
  return (
    <Link 
      to={to}
      className="px-4 py-2 rounded-md font-medium transition-all duration-200 text-[#898AC4] dark:text-[#FFF2E0] hover:text-[#A2AADB] hover:bg-[#C0C9EE]/20 dark:hover:bg-[#A2AADB]/20"
    >
      {text}
    </Link>
  );
}

function MobileNavLink({ to, text }) {
  return (
    <Link 
      to={to}
      className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 text-[#898AC4] dark:text-[#FFF2E0] hover:text-[#A2AADB] bg-[#C0C9EE]/30 dark:bg-[#A2AADB]/20 hover:bg-[#C0C9EE]/50 dark:hover:bg-[#A2AADB]/30"
    >
      {text}
    </Link>
  );
}