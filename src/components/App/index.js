import React from 'react'
import * as classes from './index.module.css'
import SignInWithGoogle from '../SignInWithGoogle'
import DisplayInfoUser from '../DisplayInfoUser'
import DisplayListOfActiveGames from '../DisplayListOfActiveGames'
import {useSelector} from 'react-redux'
import Modal from '../Modal'
import Play from '../Play'
import Fixed from '../Fixed'
import Scores from '../Scores'

const App=props=>{
    const seeModal=useSelector(state=>state.screens.seeModal)
    const seeModal2=useSelector(state=>state.screens.seeModal2)

    const user=useSelector(state=>state.user.user)
    let uid
    if(user){
        uid=user.email
    }

    return (
<div className={classes.general}>
    <SignInWithGoogle/>
    <DisplayInfoUser/>
    <DisplayListOfActiveGames uid={uid}/>
    {seeModal&& <Fixed />}
    {seeModal&&<Modal><Play uid={uid}/></Modal>}
    {seeModal2&& <Fixed num={2}/>}
    {seeModal2&&<Modal><Scores uid={uid}/></Modal>}
</div>
    )
}

export default App