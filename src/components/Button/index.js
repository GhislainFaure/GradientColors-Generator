import PropTypes from "prop-types";
import "./style.scss";

export default function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
