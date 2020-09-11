export class Game{
    constructor(id,users){
        this.id=id
        this.users=users
    }
}

export class Score{
    constructor(gameId,userId,score){
        this.gid=gameId
        this.uid=userId
        this.score=score
    }
}

export class Question{
    constructor(id,text){
        this.id=id
        this.text=text
    }
}

export class Answer{
    constructor(qid,text,value){
        this.qid=qid
        this.text=text
        this.value=value
    }
}

export class Play{
    constructor(gid,qid){
        this.gid=gid
        this.qid=qid
    }
}