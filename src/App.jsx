import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/home/Home";
import ForgotPassword from "./components/auth/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
