import React from 'react';

import { Layout } from 'antd';

import './App.scss';

const { Header, Content, Footer } = Layout;

const App = (props) => (
  <Layout>
    <Header className="header">
      Info about blog
    </Header>
    <Content className="content">
      <div className="content__post">
        <h1>Blog title</h1>
        blog content
      </div>
    </Content>
    <Footer className="footer">
      Feijo blog ©2016
    </Footer>
  </Layout>
);

export default App;
