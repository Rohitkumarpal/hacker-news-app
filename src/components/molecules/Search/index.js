import Input from "../../atoms/Input";
import PropTypes from "prop-types";
import classNames from "classnames";


const Search = ({ type,placeholder, id, onChange, className, ...props }) => {
  const myClass = classNames("search", {
    [className]: className,
  });

  return (
    <div className={myClass}>
      <Input type={type} placeholder={placeholder} id={id} onChange={onChange} {...props} />
    </div>
  );
};
Search.propTypes = {
  id: PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};
export default Search;