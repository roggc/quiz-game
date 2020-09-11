import React, { useState, useEffect } from 'react'
import * as style from './index.module.css'
import {useSelector,useDispatch} from 'react-redux'
import ShowQuestionAndAnswers from '../ShowQuestionAndAnswers'
import { screensToggleSeeModal } from '../../redux/actions/screens'
import {gamesSetScore} from '../../redux/actions/games'

const Play=({uid})=>{
    const [index,setIndex]=useState(0)
    const [score,setScore]=useState(0)

    const gid=useSelector(state=>state.games.gid)
    const plays= useSelector(state=>state.games.play.filter(p=>p.gid===gid))
    const allQuestions=useSelector(state=>state.games.questions)
    const questions=allQuestions.filter(q=>plays.some(p=>p.qid===q.id))

    const dispatch=useDispatch()

    const next=(isLast,value)=>{
        setIndex(prev=>prev+1)
        if(value==='true'){ 
            setScore(prev=>prev+1)
        }
    }

    useEffect(()=>{
        if(index===questions.length){
            dispatch(gamesSetScore(gid,uid,score/questions.length*100))
            dispatch(screensToggleSeeModal())
        }
    },[score,index])

    return (
        <div>
            <ShowQuestionAndAnswers 
            next={next} 
            question={questions[index]}
            isLast={questions.length===index+1}
            />
        </div>
    )
}

export default Play