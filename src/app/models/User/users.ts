export class Users {
    totalCount:number;
    username:string;
    profileLink:string;
    name:string;
    profPic:string;
    following:number;
    followers:number;
    joined:string;
    publicRepos:number;
    reposUrl:string;
    isName:boolean;
    

    constructor(){
        this.totalCount=0;
        this.username='';
        this.profileLink='';
        this.name='';
        this.profPic='';
        this.following=0;
        this.followers=0;
        this.joined='';
        this.publicRepos=0;
        this.reposUrl=''; 
        this.isName=true;       
    }
}
