import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./style.css"
import Typography, { Tags } from "../../atoms/Typography"
const TopLink = (props) => {

  const { title, link } = props;

  const getUpperCase=(title)=>{

    return title.toUpperCase()

  }

  return (
    <NavLink to={"/" + link} activeClassName="active" class="header-link">
      <Typography class="menu-item" tag={Tags.SPAN}>
        {getUpperCase(title)}
      </Typography>
    </NavLink>
  );

}

TopLink.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,


};

TopLink.defaultProps = {

};

export default TopLink;