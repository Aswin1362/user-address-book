import './App.css';
import React from 'react';
import { AppRoutes } from './Router/routes.tsx';
import { Provider } from 'react-redux';
import { store } from './config/store.tsx';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
