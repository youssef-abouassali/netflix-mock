import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<SingUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
