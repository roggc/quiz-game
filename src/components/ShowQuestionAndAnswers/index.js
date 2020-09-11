import React,{useState, useEffect} from 'react'
import * as style from './index.module.css'
import {useSelector} from 'react-redux'

const ShowQuestionAndAnswers=({question,isLast,next})=>{
    if(!question){
        return <div></div>
    }
    const [answerValue,setAnswerValue]=useState(null)
    const answers=useSelector(state=>state.games.answers
        .filter(answer=>answer.qid===question.id))

    let changed=(e)=>{
        setAnswerValue(e.target.value)
    }
    
    return (
        <div>
            <div>{question.text}</div>
            {answers.map(answer=>
            <div key={answer.text}>
            <input 
            type="radio" 
            value={answer.value}
            name="answer"
            onChange={changed}
            />{answer.text}</div>
            )}
            <button 
            className="btn btn-primary"
            onClick={next.bind(this,isLast,answerValue)}
            disabled={answerValue===null}>{isLast?'End':'Next'}</button>
        </div>
    )
}

export default ShowQuestionAndAnswers