export class Quote {
    public showDetail: boolean;
    constructor(public id:number,public name:string,public detail:string,public completeDate: Date){
        this.showDetail=false;
    } 
   
}
