import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import PostContainer from './components/posts/PostContainer';
import store from './store';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={MainPage} />
        <Route path="/posts" component={PostContainer} />
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
