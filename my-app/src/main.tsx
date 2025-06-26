import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 phải có dòng này!
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
