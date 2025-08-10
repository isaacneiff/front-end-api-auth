import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./routes/privateRoute";
import Register from "./pages/register";
import Sidebar from "./components/sidebar"; 
import { useState } from "react";
import Home from "./pages/home";
import Footer from "./components/footer";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <BrowserRouter>
      {/* Sidebar controlada por estado */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
