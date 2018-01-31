import React from 'react';

import { Layout } from 'antd';

import styles from './App.scss';

const { Header, Content, Footer } = Layout;

console.log('styles', styles);

const App = (props) => (
  <Layout>
    <Header className={styles.header}>
      Info about blog
    </Header>
    <Content className={styles.content}>
      <div className={styles.content__post}>
        <h1>Blog title</h1>
        blog content
      </div>
    </Content>
    <Footer className={styles.footer}>
      Feijo blog ©2016
    </Footer>
  </Layout>
);

export default App;
