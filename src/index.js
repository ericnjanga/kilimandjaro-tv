import React from 'react';
import ReactDOM from 'react-dom';

// Import provider and store
// import { Provider } from 'react-redux'
// import reduxStore from './store'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//   // Provider receives stores and wraps the app
//   // NOTE: Provider behaves similarly to <Context />
//   <Provider store={reduxStore}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
