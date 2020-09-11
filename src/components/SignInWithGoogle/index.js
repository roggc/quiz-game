import React from 'react'
import * as style from './index.module.css'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import {useDispatch} from 'react-redux'
import {userSet} from '../../redux/actions/user'

const SignInWithGoogle=props=>{
    const dispatch=useDispatch()
    const clicked=()=>{
        var provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            dispatch(userSet(user))
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
<a onClick={clicked}>Sign In With Google</a>
    )
}

export default SignInWithGoogle