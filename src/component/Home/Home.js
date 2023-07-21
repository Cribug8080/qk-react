import { Card, Col, Row } from 'antd';
import React from 'react';

import HomeCarousel from '../Carousel';

const Home = () => (
  <Row gutter={16}>
    <Col span={24}>
      <HomeCarousel />
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row>
);
export default Home;