import React from 'react';
import { Row, Col, Icon, List, Card } from 'antd';

import styles from './MainPage.scss';

const MainPage = (props) => (
  <div>
    <Row type="flex" justify="center" className={styles.header}>
      <Col>
        <Row type="flex" gutter={16} justify="center">
          <Col>
            <img
              className={styles.avatar}
              src="https://avatars3.githubusercontent.com/u/8865899?s=460&v=4" />
          </Col>
          <Col span={10} className={styles.info__col}>
            <h1 className={styles.info}>Victor Feijó</h1>
            <h3 className={styles.info}>
              Full stack developer, computer scientist, sports lover, father of 3 cats and 2 dogs.
            </h3>
            <Row type="flex" gutter={10}>
              <Icon type="user" style={{ color: '#4C566A', fontSize: '22px' }} />
              <h3 className={styles.info}>SumOne</h3>
            </Row>
            <Row type="flex" gutter={10}>
              <Icon type="environment" style={{ color: '#4C566A', fontSize: '22px' }} />
              <h3 className={styles.info}>Florianópolis - Brazil</h3>
            </Row>
            <Row type="flex" gutter={10}>
              <Icon type="github" style={{ color: '#4C566A', fontSize: '22px' }} />
              <h3 className={styles.info}>/victorfeijo</h3>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row type="flex" justify="center">
      <List
        dataSource={[{title: 'Utilizando selectors em sua aplicação React/Redux'}, {title: 'Utilizando selectors em sua aplicação React/Redux'}]}
        renderItem={item => (
          <List.Item>
            <Card title={item.title}>Card content alsk jdalks jdlaksjd lakjsd laksjd lakjsd laksjd lakjs dlakjs dlakjsd lakjsd lakjsd  </Card>
          </List.Item>
        )}
      />
    </Row>
  </div>
);

export default MainPage;
