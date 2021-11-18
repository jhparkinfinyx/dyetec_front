// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// import {Provider} from 'mobx-react';
// import RootStore from './stores/rootStore';

// const rootStore = new RootStore();

// ReactDOM.render(
//   <Provider {...rootStore}>
//     <App />
//   </Provider>
//   ,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <App />
  ,
  document.getElementById('root')
);