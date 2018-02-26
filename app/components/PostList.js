import React from 'react';
import { Row, Col, Icon, List, Divider } from 'antd';

import styles from './PostList.scss';
import someStyle from './variables.scss';

const posts = [
  {
    title: 'Simplificando sua aplicação React/Redux com selectors',
    description: 'Utilizar React juntamente com o Redux é uma boa pratica para gerenciar o estado da aplicação. Entretanto, a maneira que os dados são estruturados no estado do redux podem acabar gerando um overhead de lógica dos componentes React, aumentando sua complexidade. O conceito de selectors vem justamente para simplicar a conexão entre os dados que vem do store do redux e os componentes React.'
  },
  {
    title: 'Simplificando sua aplicação Redux com selectors',
    description: 'Utilizar React juntamente com o Redux é uma boa pratica para gerenciar o estado da aplicação. Entretanto, a maneira que os dados são estruturados no estado do redux podem acabar gerando um overhead de lógica dos componentes React, aumentando sua complexidade. O conceito de selectors vem justamente para simplicar a conexão entre os dados que vem do store do redux e os componentes React.'
  },
];

const PostList = () => (
  <List
    style={{ marginTop: '50px' }}
    dataSource={posts}
    renderItem={item => (
      <Row type="flex" justify="center">
        <Col xs={18} md={18} lg={14} xl={12} xxl={10} >
          <Row>
            <h1 className={styles.title}>{ item.title }</h1>
          </Row>
          <Row>
            <h3 className={styles.description}>{ item.description }</h3>
          </Row>
          <Row type="flex" gutter={16}>
            <Col>
              <Row type="flex" gutter={10}>
                <Icon type="star-o" style={{ fontSize: '18px' }} />
                <h4 className={styles.number}>10</h4>
              </Row>
            </Col>
            <Col>
              <Row type="flex" gutter={10}>
                <Icon type="message" style={{ fontSize: '18px' }} />
                <h4 className={styles.number}>2</h4>
              </Row>
            </Col>
          </Row>
          <Divider />
        </Col>
      </Row>
    )}
  />
);

export default PostList;
