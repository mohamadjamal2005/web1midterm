import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form className="space-y-4">
      
      <h2 className="text-xl font-bold text-center mb-4">
        Create Account
      </h2>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-2 border rounded"
      />

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

      <button className="w-full bg-green-600 text-white p-2 rounded">
        Register
      </button>

      {/* Go back to login */}
      <p className="text-center text-sm mt-2">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600">
          Login
        </Link>
      </p>

    </form>
  );
};

export default Register;