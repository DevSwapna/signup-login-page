import "./HomeNavbar.css";

function HomeNavbar() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <img
            src="src/assets/logo.png"
            alt="logo"
            className="navbar-logo"
            width={50}
          />
          <span className="swapna">Swapna</span>
          <span className="sahoo">Sahoo</span>
          <div className="links">
            <a href="#" className="home">
              Home
            </a>
            <a href="#" className="github">
              GitHub
            </a>
            <a href="#" className="projects">
              Projects
            </a>
            <a href="#" className="signup">
              SIGNUP
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default HomeNavbar;
