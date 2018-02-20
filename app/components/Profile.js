import React from 'react';
import { Row, Col, Icon } from 'antd';

import styles from './Profile.scss';

const Profile = () => (
  <Row type="flex" justify="center" className={styles.profile}>
    <Col>
      <Row type="flex" gutter={16} justify="center">
        <Col>
          <img
            alt="Profile"
            className={styles.avatar}
            src="https://avatars3.githubusercontent.com/u/8865899?s=460&v=4"
          />
        </Col>
        <Col span={10} className={styles.info__col}>
          <h1 className={styles.info}>Victor Feijó</h1>
          <h3 className={styles.info}>
            Full stack developer, computer scientist, sports lover, father of 3 cats and 2 dogs.
          </h3>
          <Row type="flex" gutter={10}>
            <Icon type="user" style={{ color: '#fff', fontSize: '18px' }} />
            <h4 className={styles.info}>SumOne</h4>
          </Row>
          <Row type="flex" gutter={10}>
            <Icon type="environment-o" style={{ color: '#fff', fontSize: '18px' }} />
            <h4 className={styles.info}>Florianópolis - Brazil</h4>
          </Row>
          <Row type="flex" gutter={10}>
            <Icon type="github" style={{ color: '#fff', fontSize: '18px' }} />
            <h4 className={styles.info}>/victorfeijo</h4>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Profile;
