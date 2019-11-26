import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Components
import Routes from './routes';

// CSS
import GlobalStyles from 'styles/global';

// Store
import store from 'store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  </Provider>
);

export default App;
