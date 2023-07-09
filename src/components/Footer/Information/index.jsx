import Logo from "../../../assets/images/logo.svg";

import PersonalInformation from "./personal-info";
import UsefulLinks from "./useful-links";
import SocialMedia from "./social-media";

const Information = () => {
  return (
    <div className="information-container">
      <div className="logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <div className="information-sub-container">
        <PersonalInformation />
        <UsefulLinks />
        <SocialMedia />
      </div>
    </div>
  );
};

export default Information;
