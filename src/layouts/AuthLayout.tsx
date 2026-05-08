import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        
        {/* Logo / Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm">
            Please login or register to continue
          </p>
        </div>

        {/* Page content (Login/Register) */}
        <Outlet />

      </div>
    </div>
  );
};

export default AuthLayout;