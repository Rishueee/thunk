import { useState } from 'react';
import './App.css';
import Data from './comp/data';

import { Provider } from 'react-redux';

import { Store } from './redux/store';

function App() {

  return (
    <>

      <Provider store={Store}>
        <Data />

      </Provider>
    </>
  );
}

export default App;
