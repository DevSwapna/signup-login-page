import { Link } from "react-router-dom";
import "./Home.css";
import HomeNavbar from "./HomeNavbar";

function Home() {
  return (
    <>
      <HomeNavbar />
      <main>
        <div className="container">
          <h1 className="heading">GET STARTED AWAY</h1>
          <h3 className="home-text2">Learn With Us</h3>
          <h4 className="home-text3">By SwapnaSahoo</h4>
          <div className="lgoin-signup">
            <a href="#" className="login">
              LOGIN
            </a>
            <Link to="/signup" className="signup">
              SIGNUP
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
