import React from 'react'
import HeaderApp from './HeaderApp'
import { Layout, Col, Row } from 'antd';
import ContainerApp from './ContainerApp';

const MainPage = () => {
    return (
        <Layout>
            <HeaderApp />
            <Row>
                <Col span={4} style={{ backgroundColor: 'lightgray' }}>sidebar</Col>
                <Col span={20}>
                    <ContainerApp />
                </Col>
            </Row>
        </Layout>
    )
}

export default MainPage