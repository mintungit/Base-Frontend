import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import viVN from 'antd/es/locale/vi_VN';
import enUS from 'antd/es/locale/en_US';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

// Import css
import './styles/output.css';
import 'antd/dist/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

//Import file base
import App from '@containers/App';
import store from '@store/store';
import i18n from '@translations/i18n';

const { PUBLIC_URL } = process.env;
const MOUNT_NODE = document.getElementById('root');
const language = localStorage.getItem('i18nextLng');

const root = createRoot(MOUNT_NODE);

root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <ConfigProvider locale={language === 'vi' ? viVN : enUS}>
        <BrowserRouter basename={PUBLIC_URL}>
          <ToastContainer pauseOnFocusLoss={false}/>
          <App/>
        </BrowserRouter>
      </ConfigProvider>
    </I18nextProvider>
  </Provider>
);