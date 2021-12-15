import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Layout from '../components/Layout';


import SimilarityImage from './similarityImage';
import DrapeImage from './DrapeImage';
import UploadImage from './UploadImage';

const Pages = () => {
  const children = ({}) => (
    <div>
      <Route exact path="/" component={SimilarityImage} />
      <Route exact path="/similarity" component={SimilarityImage} />
      <Route exact path="/drape" component={DrapeImage} />
      {/* <Route exact path="/upload" component={UploadImage} /> */}
    </div>
  );

  return <Router>
    <Layout Routes={children} />
  </Router>;
};

export default Pages;