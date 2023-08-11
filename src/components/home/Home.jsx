import { useNavigate } from "react-router-dom";
import Subscription from "./subscription/Subscirption";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Subscription navigate={navigate} />
    </div>
  );
}
export default Home;
