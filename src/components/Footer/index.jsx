import EmailCard from "./Email";
import Information from "./Information";
import Attribution from "./Attribution";

const Footer = () => {
  return (
    <div className="footer-container">
      <EmailCard />
      <div className="footer-2">
        <Information />
        <Attribution />
      </div>
    </div>
  );
};

export default Footer;
