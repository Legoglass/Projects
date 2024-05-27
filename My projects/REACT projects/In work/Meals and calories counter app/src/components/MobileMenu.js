import { Outlet, Link } from "react-router-dom";
import CloseMenu from "../assets/close-menu.png";
import SearchButton from "../assets/search.png";

export function MobileMenu({
  query,
  setQuery,
  handleChangeRoute,
  handleMobileMenu,
}) {
  return (
    <div className="mobile-container">
      <img
        src={CloseMenu}
        alt="close-button"
        className="close-btn"
        onClick={() => {
          handleMobileMenu();
        }}
        style={{ cursor: "pointer" }}
      />
      <div className="second-m-container">
        <div className="search-container d-flex align-items-center">
          <input
            className="search-input-mobile"
            type="text"
            placeholder="Cauta"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <img
            className="search-btn"
            src={SearchButton}
            alt="search button"
            onClick={() => {
              handleMobileMenu();
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="links-container-mobile ">
          <Link
            to="/recipe"
            className="button-87-mobile"
            onClick={() => {
              handleMobileMenu();
            }}
          >
            Recipes meals
          </Link>
          <Link
            to="/meals"
            className="button-87-mobile"
            onClick={() => {
              handleMobileMenu();
            }}
          >
            Meals
          </Link>
          <Link
            to="/login"
            className="button-87-mobile"
            onClick={() => {
              handleMobileMenu();
            }}
          >
            Home
          </Link>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
