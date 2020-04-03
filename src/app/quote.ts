export class Quote {
    public showDetail: boolean;
    constructor(public id:number,public name:string,public detail:string,public completeDate: Date,public author: string,public upvote:number,public downvote:number){
        this.showDetail=false;
    } 
   
}
