


import TopLink from "../../molecules/TopLink";
import "./style.css";
import Search from "../../molecules/Search";

const Footer = (props) => {
const {footerList}= props
  return (
    <div className="footer">
      <div className="footer-menu">
        {footerList.map((item, index) => (
        <TopLink title={item.name} link={item.path}>  </TopLink>
        ))}
      </div>
      <div className="footer-search">
        <Search type="TEXT" placeholder="Search" id="search" />
      </div>
    </div>
  );
};
export default Footer;