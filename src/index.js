import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from 'react'
import ReactDOM from 'react-dom';
import App from './pages/App';
import { ConfigProvider } from 'antd';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from '@/store/store'
import './styles/style.less'
import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';

ReactDOM.render(
  //<React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={locale}>
        <App />
      </ConfigProvider>
    </Provider>
  //</React.StrictMode>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
