import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./components/home/Home";
import ForgotPassword from "./components/auth/ForgotPassword";
import axios from "axios";
import Success from "./components/home/subscription/Success";
import Cancel from "./components/home/subscription/cancel";

const Layout = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const signOut = async (e) => {
    e.preventDefault();

    try {
      const savedToken = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: savedToken,
      };
      const response = await axios.post(
        "http://localhost:3001/auth/signout",
        user,
        {
          headers: headers,
        }
      );
      console.log(response);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <nav style={{ background: "black", padding: "2rem" }}>
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none", padding: "1rem" }}
        >
          Home
        </Link>
        {user ? (
          <>
            <span style={{ color: "white", padding: "1rem" }}>
              Welcome, {user.name}!
            </span>
            <button
              onClick={signOut}
              style={{ color: "black", fontWeight: "bolder", padding: "1rem" }}
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link
            to="/signin"
            style={{ color: "white", textDecoration: "none", padding: "1rem" }}
          >
            SignIn
          </Link>
        )}
      </nav>
      <Outlet />
    </>
  );
};

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
