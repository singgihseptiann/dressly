import { Card as BootstrapCard } from "react-bootstrap";
const Card = ({
  imageUrl,
  title,
  svgUrl,
  additionalText,
  price,
  classname = "border-0",
}) => {
  return (
    <BootstrapCard className={classname}>
      <BootstrapCard.Body>
        {imageUrl && <BootstrapCard.Img variant="top" src={imageUrl} fluid />}
        {title && (
          <BootstrapCard.Title className="mt-2">{title}</BootstrapCard.Title>
        )}
        <div className="d-flex">
          {svgUrl && (
            <div
              dangerouslySetInnerHTML={{ __html: svgUrl }}
              style={{ width: "50px", height: "50px", marginRight: "-11px" }} // Adjust the margin-right as needed
            />
          )}
          {additionalText && (
            <BootstrapCard.Text style={{ marginTop: "1px" }}>
              {additionalText}
            </BootstrapCard.Text>
          )}
        </div>
        {price && (
          <BootstrapCard.Text style={{ marginTop: "-20px" }}>
            ${price}
          </BootstrapCard.Text>
        )}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
