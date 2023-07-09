import NavBar from "./navbar";
import Intro from "./intro";

const Heading = () => {
  return (
    <div className="header">
      <NavBar />
      <Intro />

      {/**Holds the waves */}
      <div className="header-bg">
        <div className="header-illustration-container" />
      </div>
    </div>
  );
};

export default Heading;
