import { Row, Col } from "antd";
import { Heading, Container } from "./style";
import InputBox from "../../Components/common/InputBox";

const HomePage = () => {
  return (
       <>
       <Container>
          <Heading>WEATHER FORECAST (5 DAYS)</Heading>
        </Container>
        
        <InputBox />
        </>
  );
};

export default HomePage;
