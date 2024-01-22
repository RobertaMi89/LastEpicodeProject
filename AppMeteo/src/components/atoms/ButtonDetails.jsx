import Button from "react-bootstrap/Button";

export const ButtonDetails = ({ cityData }) => {
  return (
    <>
      <Button variant="primary" onClick={handleButtonClick}>
        Dettagli
      </Button>
    </>
  );
};
export default ButtonDetails;
