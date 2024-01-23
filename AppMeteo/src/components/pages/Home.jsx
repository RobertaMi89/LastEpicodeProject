import { Container } from "react-bootstrap";
import CustomFooter from "../organisms/CustomFooter";
import CustomNavBar from "../organisms/CustomNavBar";

export const Home = () => {
  return (
    <>
      <Container fluid className="background">
        <CustomNavBar />
        <CustomFooter />
      </Container>
    </>
  );
};
export default Home;
