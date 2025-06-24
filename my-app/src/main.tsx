import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 phải có dòng này!
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
