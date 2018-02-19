import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import store from './store';

const Root = (props) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={MainPage} />
        <Route path="/lele" component={MainPage} />
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
