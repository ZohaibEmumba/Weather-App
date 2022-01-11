import React from 'react'
import { Row, Col } from 'antd'
import {Wrapper} from './style'

const WeatherDisp = () => {
    return (
        <>
            <Wrapper>
            <Row>
                <Col span={24}>
                    <h1>Islmabad, PK</h1>
                    <h2>Thursday</h2>
                    <h3>Rain</h3>
                </Col>
            </Row>
            </Wrapper>
        </>
    )
}

export default WeatherDisp
