import React from 'react';
import { Button, Col, Row, Statistic } from 'antd';

const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={1128999999993} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={11289999999993} precision={2} />
      <Button style={{ marginTop: 16 }} type="primary">
        Recharge
      </Button>
    </Col>
    <Col span={12}>
      <Statistic title="Active Users" value={1128939999999999999999} loading />
    </Col>
  </Row>
);

export default App;
