import React from 'react'
import * as style from './index.module.css'

const Modal=props=>{
    return (
        <div className={style.cont}>
            {props.children}
        </div>
    )
}

export default Modal