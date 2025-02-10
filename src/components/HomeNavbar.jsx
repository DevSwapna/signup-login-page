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
          <span className="navbar-swapna">Swapna</span>
          <span className="navbar-sahoo">Sahoo</span>
          <div className="navbar-links">
            <a href="#" className="navbar-home">
              Home
            </a>
            <a href="#" className="navbar-github">
              GitHub
            </a>
            <a href="#" className="navbar-projects">
              Projects
            </a>
            <a href="#" className="navbar-signup">
              SIGNUP
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default HomeNavbar;
