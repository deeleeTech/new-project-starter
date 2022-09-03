import { Col, Row } from 'antd';
import * as React from 'react';
import { InlineStylesModel } from '../../models/InlineStylesModel';

export default function PageHeader() {

  const styles: InlineStylesModel = {
    container: {
      alignItems: 'center',
      maxWidth: 1920,
      flex: 1
    },
    appName: {
      display: 'flex',
      cursor: 'pointer',
      color: '#84859a',
      alignItems: 'flex-end',
      flex: 1,
      backgroundColor: 'red'
    }
  };

  return (
    <Row style={styles.container} gutter={[16, 16]}>
      <Col style={styles.appName}>
      appname
      </Col>
  </Row>
  );
}
