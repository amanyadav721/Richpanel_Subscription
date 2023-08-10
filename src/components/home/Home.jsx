import { Link } from "react-router-dom";
import Subscription from "./subscription/Subscirption";

function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="SignIn">SignIn</Link>
      </nav>
      <Subscription />
    </div>
  );
}
export default Home;
