import React from 'react'
import * as style from './index.module.css'
import {useDispatch} from 'react-redux'
import {screensToggleSeeModal,screensToggleSeeModal2} from '../../redux/actions/screens'

const Fixed=({num})=>{
    const dispatch=useDispatch()

    const toggleModal=()=>{
        if(num==2){
            dispatch(screensToggleSeeModal2())
        }else{
            dispatch(screensToggleSeeModal())
        }
    }

    return (
        <div className={style.cont} onClick={toggleModal}></div>
    )
}

export default Fixed