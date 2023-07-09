import StayProductive from "../../../assets/images/illustration-stay-productive.png";

import AboutText from "./about-text";

const About = () => {
  return (
    <div className="about-container">
      <img src={StayProductive} alt="stay-productive" />
      <AboutText />
    </div>
  );
};

export default About;
