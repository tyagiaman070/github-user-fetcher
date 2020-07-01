import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="danger" light expand="md">
      <NavbarBrand tag={Link} to="/" className="text-white">
        Aman Tyagi github user fetcher app
      </NavbarBrand>
      <NavbarText className="text-white">
        {context.user?.email ? context.user.email : ""}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {context.user ? (
            <NavLink
              onClick={() => {
                context.setUser(null);
              }}
              className="text-white"
            >
              Logout
            </NavLink>
          ) : (
            <>
              <NavLink tag={Link} to="/signup" className="text-white">
                Signup
              </NavLink>

              <NavLink tag={Link} to="/signin" className="text-white">
                Signin
              </NavLink>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
