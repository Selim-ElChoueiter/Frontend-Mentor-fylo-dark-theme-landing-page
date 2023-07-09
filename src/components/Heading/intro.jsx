import IntroImage from "../../assets/images/illustration-intro.png";

import Button from "../Button";

const Intro = () => {
  return (
    <div className="intro-container">
      <img src={IntroImage} alt="intro-image" />
      <h5 className="raleway">
        All your files in one secure location, accessible anywhere.
      </h5>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <Button label="Get Started" />
    </div>
  );
};

export default Intro;
