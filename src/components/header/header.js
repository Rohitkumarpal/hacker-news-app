import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from '../../assets/gif/y18.gif'
const Header = () => {
  return (
    <React.Fragment>
      <div id="app-header">
        <header class="header">
          <div class="flex">
            <span class="header-title">
              <img class="header-logo" src={logo} />
              HackerNews
            </span>

            <NavLink to="/top" activeClassName="active" class="header-link">
              Top
            </NavLink>
            <span>|</span>
            <NavLink to="/new" activeClassName="active" class="header-link">
              New
            </NavLink>
            <span>|</span>
            <NavLink to="/best" activeClassName="active" class="header-link">
              Favorites
            </NavLink>
            <span>|</span>
            <NavLink to="/ask" activeClassName="active" class="header-link">
              Ask
            </NavLink>
            <span>|</span>
            <NavLink to="/show" activeClassName="active" class="header-link">
              Show
            </NavLink>


          </div>
        </header>
      </div>
    </React.Fragment>
  );
};

export default Header;
