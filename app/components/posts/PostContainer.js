import React from 'react';
import { Route } from 'react-router-dom';

const postsComponents = {
  simplify_react_redux_apps_with_selectors: (<div>Reselect!</div>),
};

const PostContainer = ({ match }) => {
  return (
    <div>
      { match.url }
      { postsComponents[match.params.postId] }
    </div>
  );
};

export default PostContainer;
