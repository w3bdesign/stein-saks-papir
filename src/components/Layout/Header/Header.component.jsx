import React from "react";

import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <h2 data-cy="navbar" className="mx-auto text-white">
        Stein Saks Papir
      </h2>
    </Navbar>
  );
}

export default Header;
