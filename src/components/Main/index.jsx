import Sections from "./Sections/sections";
import About from "./About/about";
import Testimonials from "./Testimonials";

const Main = () => {
  return (
    <div className="main-container">
      <Sections />
      <About />
      <Testimonials />
    </div>
  );
};

export default Main;
