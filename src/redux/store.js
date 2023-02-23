
import { createStore } from 'redux';
// import {configureStore } from '@redux/toolkit';

import reducer from './reducer';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;  