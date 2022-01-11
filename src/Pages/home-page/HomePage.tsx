import React from "react";
import { Row, Col } from "antd";
import { Heading, Container } from "./style";
import InputBox from "../../Components/common/InputBox";

const HomePage = () => {
  return (
    <Row>
      <Col span={24}>
        <Container>
          <Heading>WEATHER FORECAST (5 DAYS)</Heading>
        </Container>
      </Col>
      <Col push={10}>
        <InputBox />
      </Col>
    </Row>
  );
};

export default HomePage;
