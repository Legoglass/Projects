import Logo from "../assets/logo.png";

import { Outlet, Link } from "react-router-dom";

export function NavBar({ query, setQuery, handleChangeRoute }) {
  return (
    <div className="nav-bar">
      <img className="logo" src={Logo} alt="Logo" />
      <input
        className="search-input"
        type="text"
        placeholder="Cauta"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <div className="links-container">
        <Link to="/recipe" className="button-87">
          Recipes meals
        </Link>
        <Link to="/meals" className="button-87" onClick={handleChangeRoute}>
          Meals
        </Link>
        <Link to="/meals" className="button-87">
          Home
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
