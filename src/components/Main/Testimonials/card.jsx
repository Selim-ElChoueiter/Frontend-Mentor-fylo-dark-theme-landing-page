import PropTypes from "prop-types";

const TestimonialCard = ({ image, name, job, text }) => {
  return (
    <div className="testimonial-card">
      <p className="user-testimonial">{text}</p>
      <div className="user-information">
        <span className="profile-image">
          <img src={image} alt={name} />
        </span>
        <div className="user-details">
          <h5 className="user-name">{name}</h5>
          <p className="user-job">{job}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
  text: PropTypes.string,
};

TestimonialCard.defaultProps = {
  image: "",
  name: "",
  job: "",
  text: "",
};

export default TestimonialCard;
