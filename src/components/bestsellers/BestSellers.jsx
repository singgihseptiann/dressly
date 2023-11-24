import { Col, Container, Row } from "react-bootstrap";
import Tombol from "../reusable/button/Button";
import Card from "../reusable/card/Card";
import Sneaker from "../../assets/image/bestsellers/Shoes.jpg";
import Hijab from "../../assets/image/bestsellers/Hijab.png";
import Bag from "../../assets/image/bestsellers/Bag.jpg";
import Gamis from "../../assets/image/bestsellers/Gamis.png";

const BestSellers = () => {
  const svgUrli = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M13.3704 1.58969C12.5219 1.10194 11.4781 1.10194 10.6295 1.58969C10.25 1.80785 9.96249 2.14942 9.69782 2.53294C9.43473 2.91416 9.13955 3.42097 8.77541 4.04616L8.13787 5.14076C7.90424 5.54188 7.83834 5.64755 7.76327 5.7306C7.64689 5.85937 7.50496 5.96248 7.34654 6.03338C7.24435 6.07911 7.12349 6.10912 6.66981 6.20737L5.43179 6.47546C4.72467 6.62857 4.15143 6.7527 3.70757 6.88511C3.26104 7.01832 2.84734 7.18618 2.52258 7.47972C1.79649 8.13601 1.47392 9.12875 1.67559 10.0865C1.76579 10.5149 2.00181 10.8938 2.28476 11.2641C2.56602 11.6321 2.95681 12.0694 3.43888 12.6089L4.2829 13.5535C4.59218 13.8997 4.67232 13.995 4.72811 14.0921C4.81461 14.2425 4.86882 14.4094 4.88729 14.582C4.89921 14.6933 4.8904 14.8175 4.84364 15.2793L4.71604 16.5396C4.64315 17.2594 4.58406 17.843 4.57283 18.306C4.56153 18.7719 4.59335 19.2172 4.77216 19.6168C5.17196 20.5101 6.01643 21.1237 6.98961 21.2278C7.42489 21.2744 7.85824 21.1671 8.2978 21.0124C8.73472 20.8586 9.27143 20.6221 9.93351 20.3303L11.0927 19.8195C11.5174 19.6323 11.6329 19.5856 11.7424 19.5625C11.9123 19.5267 12.0877 19.5267 12.2575 19.5625C12.3671 19.5856 12.4825 19.6323 12.9073 19.8195L14.0664 20.3303C14.7285 20.6221 15.2652 20.8586 15.7021 21.0124C16.1417 21.1671 16.5751 21.2744 17.0103 21.2278C17.9835 21.1237 18.828 20.5101 19.2278 19.6168C19.4066 19.2172 19.4384 18.7719 19.4271 18.306C19.4159 17.843 19.3568 17.2595 19.2839 16.5396L19.1563 15.2793C19.1095 14.8175 19.1007 14.6933 19.1127 14.582C19.1311 14.4094 19.1853 14.2425 19.2718 14.0921C19.3276 13.995 19.4078 13.8997 19.7171 13.5535L20.5611 12.6089C21.0432 12.0694 21.4339 11.6321 21.7152 11.2641C21.9981 10.8938 22.2342 10.5149 22.3244 10.0865C22.526 9.12875 22.2035 8.13601 21.4774 7.47972C21.1526 7.18618 20.7389 7.01832 20.2924 6.88511C19.8485 6.7527 19.2753 6.62858 18.5682 6.47546L17.3301 6.20737C16.8765 6.10912 16.7556 6.07911 16.6534 6.03338C16.495 5.96248 16.3531 5.85937 16.2367 5.7306C16.1616 5.64755 16.0957 5.54188 15.8621 5.14076L15.2246 4.04619C14.8604 3.42101 14.5652 2.91415 14.3021 2.53294C14.0375 2.14942 13.75 1.80785 13.3704 1.58969Z" fill="#FFC83D"/>
  </svg>`;

  const bestsellers = [
    {
      imageUrl: Sneaker,
      title: "Sneaker",
      svgUrl: svgUrli,
      additionalText: "4.5 (325)",
      price: 49.99,
    },
    {
      imageUrl: Hijab,
      title: "Hijab",
      svgUrl: svgUrli,
      additionalText: "4.5 (325)",
      price: 49.99,
    },
    {
      imageUrl: Bag,
      title: "Bag",
      svgUrl: svgUrli,
      additionalText: "4.5 (325)",
      price: 49.99,
    },
    {
      imageUrl: Gamis,
      title: "Gamis",
      svgUrl: svgUrli,
      additionalText: "4.5 (325)",
      price: 49.99,
    },
  ];
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={4} lg={12}>
          <div className="d-flex justify-content-between">
            <h1>Bestsellers</h1>
            <Tombol variant="btn-danger">See All</Tombol>
          </div>
        </Col>
        {bestsellers.map((best, index) => (
          <Col key={index} xs={12} md={4} lg={3} className="mb-2">
            <Card
              imageUrl={best.imageUrl}
              title={best.title}
              svgUrl={best.svgUrl}
              additionalText={best.additionalText}
              price={best.price}
              classname="border"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BestSellers;
