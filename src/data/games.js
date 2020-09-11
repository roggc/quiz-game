import {Game,Score,Question,Answer,Play} from '../model/game'

export const games= [
    new Game('g1',[
        'u1@gmail.com',
        'u2@gmail.com',
        'u3@gmail.com',
        'u4@gmail.com',
        'u5@gmail.com',
    ]),
]

export const scores=[
    new Score('g1','u1@gmail.com',100),
    new Score('g1','u3@gmail.com',50)
]

export const questions=[
    new Question('q1','how much is two plus two')
]

export const answers=[
    new Answer('q1','three',false),
    new Answer('q1','four',true),
    new Answer('q1','two',false),
    new Answer('q1','one',false),
]

export const play=[
    new Play('g1','q1')
]

