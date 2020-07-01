import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-danger text-white text-uppercase fixed-bottom p-2"
    >
      Aman Tyagi github user fetcher app with Firebase
    </Container>
  );
};

export default Footer;
