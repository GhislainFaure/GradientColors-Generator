import PropTypes from "prop-types";
import "./style.scss";

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button" type="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
