import Arrow from "../../../assets/images/icon-arrow.svg";

const AboutText = () => {
  console.log(Arrow);
  return (
    <div className="about-text-container">
      <h5 className="raleway">Stay productive, wherever you are</h5>
      <p>
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </p>
      <p>
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </p>
      <span className="link-button raleway">
        <p>See how Fylo works</p>
        <img src={Arrow} alt="arrow" />
      </span>
    </div>
  );
};

export default AboutText;
