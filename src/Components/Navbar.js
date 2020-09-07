import React from "react";

const Navbar = () => {
  return (
    // navbar container
    <nav>
      <h1>FicticiousMarket</h1>
      {/*navbar links container div*/}
      <div className="nav-links">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </nav>
  );
};

export default Navbar;
