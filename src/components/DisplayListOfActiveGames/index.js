import React from 'react'
import * as style from './index.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {gamesJoin,gamesSetGId} from '../../redux/actions/games'
import {screensToggleSeeModal,screensToggleSeeModal2} from '../../redux/actions/screens'
import screens from '../../redux/reducers/screens'

const DisplayListOfActiveGames=({uid})=>{
    const activeGames=useSelector(state=>state.games.games)
    const scores=useSelector(state=>state.games.scores)
    const dispatch=useDispatch()
    
    const joinHandler=(gid)=>{
        dispatch(gamesJoin(gid,uid))
    }
        
    const playHandler=(gid)=>{
        dispatch(screensToggleSeeModal())
        dispatch(gamesSetGId(gid))
    }
        
    const scoresHandler=(gid)=>{
        dispatch(screensToggleSeeModal2())
        dispatch(gamesSetGId(gid))
    }

    return (
        <div className={style.cont}>
            {activeGames.map(game=>
                <div key={game.id} className={style.row}>
                    <div>{game.id}</div>
                    <div className={style.col}>
                        {game.users.map(user=>
                        <div key={user}>{user}</div>
                        )}
                    </div>
                    {
                        uid?
                        (game.users.some(u=>u===uid)?
                        (scores.some(score=>{
                            if(score.gid===game.id&& score.uid===uid){
                                return true
                            }
                        })?
                        <button className="btn btn-primary"
                        onClick={scoresHandler.bind(this,game.id)}>scores</button>:
                        <button className="btn btn-primary"
                        onClick={playHandler.bind(this,game.id)}>play</button>):
                        <button className="btn btn-primary"
                        onClick={joinHandler.bind(this,game.id)}>join</button>)
                        :null
                    }
                </div>
            )}
        </div>
    )
}

export default DisplayListOfActiveGames