const Login = () => {
  return (
    <form className="space-y-4">
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
    </form>
  );
};

export default Login;