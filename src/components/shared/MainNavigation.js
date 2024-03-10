import { NavLink } from "react-router-dom";

function MainNavigation() {

  const activeNav = ({ isActive }) => isActive ? 'active' : undefined;

  return (
    <header id="navbar">
      <nav className="navbar navbar-expand-xl navbar-light bg-light fixed-top border-bottom">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-brand ml-sm-5">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/chatarra-rock.appspot.com/o/images%2Flogo-chatarra.png?alt=media&token=26c1dfd3-4a8f-4b7a-b399-ee9fa3138a17"
            alt="logo chatarra rock"
            className="d-inline-block align-top logo-nav"
          />
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li id="inicio" className="nav-item mx-3">
              <NavLink to="/" className={`nav-link inicio hide-toggle-navbar ${activeNav}`} end  >
                Inicio
              </NavLink>
            </li>
            <li id="discografia" className="nav-item mx-3">
              <NavLink
                to="/discografia"
                className={`nav-link discografia hide-toggle-navbar ${activeNav}`}
              >
                Discografía
              </NavLink>
            </li>
            <li id="videos" className="nav-item mx-3">
              <NavLink to="/videos" className={`nav-link videos hide-toggle-navbar ${activeNav}`}>
                Videos
              </NavLink>
            </li>
            <li id="biografia" className="nav-item mx-3">
              <NavLink to="/biografia" className={`nav-link bio hide-toggle-navbar ${activeNav}`}>
                Biografía
              </NavLink>
            </li>
            <li id="gira" className="nav-item mx-3">
              <NavLink to="/eventos" className={`nav-link gira hide-toggle-navbar ${activeNav}`}>
                Eventos
              </NavLink>
            </li>
            <li id="contacto" className="nav-item mx-3">
              <NavLink to="/contacto" className={`nav-link contacto hide-toggle-navbar ${activeNav}`}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
        <a
          href="https://chatarra.fanlink.tv/socialmedia"
          target="_blank"
          className="btn btn-lg ml-3 p-0"
          rel="noreferrer"
        >
          <i className="far fa-music fa-lg m-0 p-0 text-success"></i>
          <p className="text-muted m-0 p-0 text-success">
            <small>Play</small>
          </p>
        </a>
      </nav>
    </header>
  );
}

export default MainNavigation;
