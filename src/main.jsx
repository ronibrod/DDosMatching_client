import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet } from 'react-router-dom';
import { store } from './app/store/store';
import { Provider } from 'react-redux';
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Outlet/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
