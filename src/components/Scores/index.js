import React from 'react'
import * as style from './index.module.css'
import {useSelector} from 'react-redux'

const Scores=({uid})=>{
    const gid=useSelector(state=>state.games.gid)
    const gameScores=
    useSelector(state=>state.games.scores.filter(s=>s.gid===gid))

    const compare=( a, b )=> {
        if ( a.score < b.score ){
          return 1
        }
        if ( a.score > b.score ){
          return -1
        }
        return 0
      }
      
      gameScores.sort(compare)

    return (
        <div>
            {gameScores.map(sc=>
            <div key={sc.uid}>{sc.uid} - {sc.score}</div>
            )}
        </div>
    )
}

export default Scores