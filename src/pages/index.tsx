import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Layout from '../components/Layout';
import HomePage from './Home';
import ChartPage from './Chart'
import DiscussionPage from './DIscussion';
import ShareDataPage from './ShareData';

import Supermarket from './Supermarket';
import Gallery from './Gallery';
import SimilarImage from './SimilarImage';


const Pages = () => {
  const children = ({}) => (
    <div>
      <Route exact path="/" component={HomePage} />
      {/* <Route exact path="/" element={<HomePage FilterList={FilterList} />} /> */}
      {/* <Route exact path="/chart" component={ChartPage} /> */}
      <Route exact path="/discussion" component={DiscussionPage} />
      <Route exact path="/data" component={ShareDataPage} />
    </div>
  );

  return <Router>
    {/* <Layout>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/chart" component={ChartPage} /> */}
      {/* <Route path="/supermarket" component={Supermarket} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/similar" component={SimilarImage} /> */}
    {/* </Layout> */}
    <Layout Routes={children} />
  </Router>;
};

export default Pages;