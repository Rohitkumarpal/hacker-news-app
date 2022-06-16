import React from "react";
import brandLogo from '../../../assets/gif/y18.gif'
import PropTypes from "prop-types";
import TopLink from "../../molecules/TopLink";
import './style.css'
import Typography, { Tags } from "../../atoms/Typography"

const Header = (props) =>{
  const { navItems } = props;
return (
  <React.Fragment>
  <div id="app-header">
    <header class="header">
      <div class="inline">
      <span class="header-title">
        <img class="header-logo" src={brandLogo} />
        <Typography class="menu-item" tag={Tags.SPAN}>
        HackerNews
      </Typography>
      </span>
        {navItems.map((item) => (
          <div key={item} >
            <TopLink link={item} title={item}  />
            <span>|</span>
          </div>
        ))}
      



      </div>
    </header>
  </div>
</React.Fragment>
);
}
Header.propTypes = {
  navItems: PropTypes.array.isRequired,

};

Header.defaultProps = {

};

export default Header;

