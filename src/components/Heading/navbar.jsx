import Logo from "../../assets/images/logo.svg";

const NavBar = () => {
  return (
    <div className="nav-container">
      {/**Logo */}
      <img src={Logo} alt="logo" className="logo" />

      {/**Actual Nav Items */}
      <ul className="nav-items raleway">
        <li>Features</li>
        <li>Team</li>
        <li>Sign In</li>
      </ul>
    </div>
  );
};

export default NavBar;
