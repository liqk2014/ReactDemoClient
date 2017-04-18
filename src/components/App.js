/**
 * Created by liqiankun on 2017/4/17.
 */
import React from 'react';
import styles from './App.css';
import imgs from  './hello.jpg'
const App = () => (
    <div className={styles.app}>
        <h2>Hello, </h2>
        <img src={imgs}/>
    </div>
);

export default App;