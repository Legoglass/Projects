import Logo from "../assets/logo.png";
import Menu from "../assets/menu.png";

import { Outlet, Link } from "react-router-dom";

export function NavBar({
  query,
  setQuery,
  handleChangeRoute,
  handleMobileMenu,
  handeleLogOut,
  isLoggedIn,
}) {
  return (
    <div className="nav-bar">
      <img className="logo" src={Logo} alt="Logo" />

      <input
        className="search-input d-none d-lg-flex"
        type="text"
        placeholder="Cauta"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <div className="links-container d-none d-lg-flex">
        <Link to="/recipe" className="button-87">
          Recipes meals
        </Link>
        <Link to="/meals" className="button-87" onClick={handleChangeRoute}>
          Meals
        </Link>
        {isLoggedIn && (
          <Link to="/login" className="button-87" onClick={handeleLogOut}>
            Log Out
          </Link>
        )}
        <Outlet />
      </div>
      <img
        src={Menu}
        alt="menu-button"
        className="mobile-btn d-lg-none"
        onClick={() => {
          handleMobileMenu();
        }}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
