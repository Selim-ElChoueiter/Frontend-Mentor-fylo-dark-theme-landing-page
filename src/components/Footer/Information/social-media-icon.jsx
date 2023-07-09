import PropTypes from "prop-types";

const SocialMediaIcon = ({ icon }) => {
  return <div className="social-media-icon-container">{icon}</div>;
};

SocialMediaIcon.propTypes = {
  icon: PropTypes.node,
};

SocialMediaIcon.defaultProps = {
  icon: <></>,
};

export default SocialMediaIcon;
