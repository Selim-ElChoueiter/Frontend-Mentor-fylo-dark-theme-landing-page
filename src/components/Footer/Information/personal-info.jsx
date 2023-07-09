import Location from "../../../assets/images/icon-location.svg";
import Phone from "../../../assets/images/icon-phone.svg";
import Email from "../../../assets/images/icon-email.svg";

const PersonalInformation = () => {
  return (
    <div className="personal-info-container">
      <div className="icon-text">
        <img src={Location} alt="location" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="icon-stack">
        <div className="icon-text">
          <img src={Phone} alt="phone" />
          <p>+1-543-123-4567</p>
        </div>
        <div className="icon-text">
          <img src={Email} alt="email" />
          <p>example@fylo.com</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
