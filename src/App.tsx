import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./login_page/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Auth Layout */}
        <Route path="/" element={<AuthLayout />}>
          
          {/* Default route → Login */}
          <Route index element={<Login />} />

        </Route>

        {/* Redirect any unknown route to login */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;