/**
 * Created by liqiankun on 2017/4/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import {AppContainer} from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './components/App';

import axios from 'axios';

    axios({
    method: 'get',
    // baseURL :'https://cnodejs.org/api/v1',
    // baseURL :'http://www.slfteam.com/api',
    url: '/api/themes/ls',
    // url: '/api/v1/topics',
    responseType: 'json'
    // httpAgent: new http.Agent({ keepAlive: true }),
    // httpsAgent: new https.Agent({ keepAlive: true }),
    //
    // proxy: {
    //     host: '127.0.0.1',
    //     port: 8123
    //
    // }


}).then(function (response) {

console.log(response);




});




const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App)
    });
}