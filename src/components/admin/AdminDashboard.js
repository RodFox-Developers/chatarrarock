import { Link, NavLink, useOutlet } from "react-router-dom";

const AdminDashboard = (props) => {

  const activeNav = ({ isActive }) => isActive ? 'active' : undefined;

  return (
    <div className="row">
      <nav className="col-lg-2 bg-light sidebar pt-4">
        <div className="sidebar-sticky">
          <h4 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Admin Panel</span>
          </h4>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <NavLink to="" className={`nav-link text-dark ${activeNav}`} end>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="bio" className={`nav-link text-dark ${activeNav}`}>
                Biografía
              </NavLink>
            </li>
          </ul>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>User</span>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item ml-3">{props.authUser?.email}</li>
            <li className="nav-item">
              <Link role="button" className="nav-link" onClick={props.logOut}>
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 p-4">
        { useOutlet() }
      </main>
    </div>
  );
};

export default AdminDashboard;
