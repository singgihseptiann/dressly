import { Container, Row, Col, Image } from "react-bootstrap";
import Tombol from "../reusable/button/Button";
import HeroImage from "../../assets/image/hero/img-hero.png";
const Hero = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={12} lg={6}>
          <div className="mt-5">
            <h1>Discover the Latest Fashion Trends</h1>
            <p>
              From stylish dresses to trendy tops and must-have accessories, we
              have everything you need to stay on top of the latest fashion
              trends. Our expertly curated collection features the hottest
              styles from top designers, so you can always find the perfect look
              for any occasion. Shop now and discover your new favorite fashion
              pieces.
            </p>
            <Tombol variant="btn-danger">Shop Now</Tombol>
          </div>
        </Col>
        <Col
          xs={12}
          md={12}
          lg={6}
          className="flex-column-reverse order-first order-lg-last"
        >
          <Image src={HeroImage} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
