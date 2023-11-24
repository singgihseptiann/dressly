import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Banner = () => {
  return (
    <Container>
      <Row className="bg-dark">
        <Col>
          <h1 className="text-white">Banner</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
