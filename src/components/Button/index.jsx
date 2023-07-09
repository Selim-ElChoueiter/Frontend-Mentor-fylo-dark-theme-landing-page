import PropTypes from "prop-types";

const Button = ({ label, className, onClick }) => {
  return (
    <button className={`raleway btn ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultprops = {
  label: "",
  className: "",
  onClick: () => {},
};

export default Button;
