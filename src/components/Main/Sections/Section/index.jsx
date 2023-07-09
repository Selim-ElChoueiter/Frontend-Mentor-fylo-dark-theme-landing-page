import PropTypes from "prop-types";

const Section = ({ image, title, text }) => {
  return (
    <div className="section">
      <img src={image} alt={title} />
      <h5 className="raleway">{title}</h5>
      <p>{text}</p>
    </div>
  );
};

Section.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

Section.defaultProps = {
  image: "",
  title: "",
  text: "",
};

export default Section;
