import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import './public/index.css'
import * as firebase from 'firebase/app'
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import userReducer from './redux/reducers/user'
import gamesReducer from './redux/reducers/games'
import screensReducer from './redux/reducers/screens'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

firebase.initializeApp({
    apiKey: "AIzaSyB2F-s1ZwdBmLtq-R8Pa5K3hK3Vr3B-qAE",
    authDomain: "test-india-5dcaa.firebaseapp.com",
    databaseURL: "https://test-india-5dcaa.firebaseio.com",
    projectId: "test-india-5dcaa",
    storageBucket: "test-india-5dcaa.appspot.com",
    messagingSenderId: "681092669467",
    appId: "1:681092669467:web:a2a8287561c7d053c618be",
    measurementId: "G-QBNZFY9PFK"
})

const store=createStore(combineReducers({
    user:userReducer,
    games:gamesReducer,
    screens:screensReducer
}))

render(
    <Provider store={store}>
    <App/>
    </Provider>,
document.getElementById('app'))