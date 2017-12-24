import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App'
import {createStore} from 'redux';
//1. make store
import reducers from './reducers'
//2. get reducers
import {Provider} from 'react-redux';
//arround component

const store = createStore(reducers)

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>
,document.getElementById('root'))