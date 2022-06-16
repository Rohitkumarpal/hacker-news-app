import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";

export const Variants = {
  HEADING1: "headingOne",
  HEADING2: "headingTwo",
  HEADING3: "headingThree",
  HEADING4: "headingFour",
  HEADING5: "headingFive",
  HEADING6:  "headingSix",

  LARGETAG: "largeTag",
  SMALLTAG: "smallTag",
}

export const Tags = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  P: "p",
  SPAN: "span",
}
const Typography = ({
    id,
    variant,
    tag,
    className,
    children,
    ...props
  }) => {
    const Component = tag;

    const myClass = classNames("text", {
      [variant]: variant,
      [className]: className,
    });
    return (
      <Component
        id={id}
        class={myClass}
        {...props}
      >
        {children}
      </Component>
    );
  };
  Typography.propTypes = {
    id: PropTypes.string,
    variant: PropTypes.oneOf(Object.keys(Variants)),
    tag: PropTypes.oneOf(Object.keys(Tags)),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  };
  Typography.defaultProps = {
    tag: Tags.SPAN
  };
  export default Typography;