import React,{useEffect} from 'react'
import * as style from './index.module.css'
import {useSelector} from 'react-redux'

const DisplayInfoUser=props=>{
    
    const user=useSelector(state=>state.user.user)

    let content=<div></div>

    if(user){
        content=
        <div>
            <img src={user.photoURL}
            alt='photo' className={style.photo}/>
            <div>{user.displayName}</div>
        </div>
    }

    return content
}

export default DisplayInfoUser