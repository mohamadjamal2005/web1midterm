import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        <nav className="space-y-2">

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full text-left p-2 hover:bg-gray-100 rounded"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/dashboard/users")}
            className="w-full text-left p-2 hover:bg-gray-100 rounded"
          >
            Users
          </button>

          <button
            onClick={() => navigate("/dashboard/settings")}
            className="w-full text-left p-2 hover:bg-gray-100 rounded"
          >
            Settings
          </button>

          <button
            onClick={() => navigate("/dashboard/profile")}
            className="w-full text-left p-2 hover:bg-gray-100 rounded"
          >
            Profile
          </button>

          <button
            onClick={handleLogout}
            className="w-full text-left p-2 text-red-500 hover:bg-red-50 rounded"
          >
            Logout
          </button>

        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

    </div>
  );
};

export default MainLayout;