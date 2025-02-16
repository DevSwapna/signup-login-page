import { Link } from "react-router-dom";
import "./Home.css";
import HomeNavbar from "./HomeNavbar";

function Home() {
  return (
    <div className="home-page">
      <HomeNavbar />
      <main>
        <div className="container">
          <h1 className="home-heading">GET STARTED WITH</h1>
          <h3 className="home-text2">Learn With Us</h3>
          <h4 className="home-text3">By SwapnaSahoo</h4>
          <div className="lgoin-signup">
            <Link to="/login" className="login">
              LOGIN
            </Link>
            <Link to="/signup" className="signup">
              SIGNUP
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
