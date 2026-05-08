import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AuthLayout />}>

          <Route index element={<Navigate to="/login" />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

        </Route>

        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;