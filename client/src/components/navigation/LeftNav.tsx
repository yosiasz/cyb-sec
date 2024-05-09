import { Link } from "react-router-dom";

function LeftNav() {
  return (
    <>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link active" to="/functions">
            Functions
          </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/categories">
            Categories
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/subcategories">
            Subcategories
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/implementations">
            Implementations
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/reports">
            Reports
          </Link>
        </li>        
      </ul>
    </>
  );
}

export default LeftNav;
