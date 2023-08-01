// Импорты из React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Компоненты
import { App } from './components/App';
// Импорт стилей
import './scss/index.scss';
// Импорты из React Router
import { BrowserRouter } from 'react-router-dom';
// Импорт из React Redux
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/react-sneakers/'>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
