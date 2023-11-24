import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../reusable/card/Card";
import Balenciaga from "../../assets/image/brand/Balenciaga.png";
import Berluti from "../../assets/image/brand/Berluti.png";
import Burberry from "../../assets/image/brand/Burberry.png";
import Gucci from "../../assets/image/brand/Gucci.png";
import Jimmy from "../../assets/image/brand/Jimmy.png";
import LV from "../../assets/image/brand/lv.png";

const Brand = () => {
  const Logo = [
    { imageUrl: Balenciaga },
    { imageUrl: Berluti },
    { imageUrl: Burberry },
    { imageUrl: Gucci },
    { imageUrl: Jimmy },
    { imageUrl: LV },
  ];
  return (
    <Container className="mt-5">
      <Row>
        {Logo.map((logobrand, index) => (
          <Col key={index} xs={12} md={4} lg={2}>
            <Card imageUrl={logobrand.imageUrl} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Brand;
