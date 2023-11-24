import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../reusable/card/Card";
import Eid from "../../assets/image/topselections/Eid.jpg";
import Aksesoris from "../../assets/image/topselections/Aksesoris.jpg";
import Shoes from "../../assets/image/topselections/Shoes.jpg";
const TopSelections = () => {
  const topselection = [
    { imageUrl: Eid },
    { imageUrl: Aksesoris },
    { imageUrl: Shoes },
  ];
  return (
    <Container className="mt-5">
      <Row>
        {topselection.map((top, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card imageUrl={top.imageUrl} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TopSelections;
