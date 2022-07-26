import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("blog");
    }, 3000);
  }, [navigate]);
  return (
    <div>
      <h1>
        Home
      </h1>
      You will be redirect to the blog page in 3 seconds...
    </div>
  );
};

export default Home;