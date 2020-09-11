export const GAMES_JOIN='GAMES_JOIN'
export const GAMES_SETGID='GAMES_SETGID'
export const GAMES_SETSCORE='GAMES_SETSCORE'

export const gamesJoin=(gid,uid)=>({
    type:GAMES_JOIN,
    gid,
    uid
})

export const gamesSetGId=(gid)=>({
    type:GAMES_SETGID,
    gid
})

export const gamesSetScore=(gid,uid,score)=>({
    type:GAMES_SETSCORE,
    gid,
    uid,
    score
})
