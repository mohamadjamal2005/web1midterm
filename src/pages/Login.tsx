import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // later you will validate real auth here
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      
      <h2 className="text-xl font-bold text-center mb-4">
        Login
      </h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded"
      />

      <button className="w-full bg-blue-600 text-white p-2 rounded">
        Login
      </button>

      <p className="text-center text-sm">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600">
          Register
        </Link>
      </p>

    </form>
  );
};

export default Login;