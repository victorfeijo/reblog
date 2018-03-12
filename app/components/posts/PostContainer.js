import React from 'react';
import { Route } from 'react-router-dom';

import ReduxAppsWithSelectors from './ReduxAppsWithSelectors';

const PostContainer = ({ match }) => {
  return (
    <div>
      <div> some boilerplate </div>
      <Route path={`${match.url}/redux-apps-with-selectors`} component={ReduxAppsWithSelectors} />
    </div>
  );
};

export default PostContainer;
