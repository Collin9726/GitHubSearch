export class Repo {
    repoName:string;
    owner:string;
    link:string;
    description:string;
    createdAt:string;
    lastUpdated:string;
    language:string;
    license:string;
    forks:number;

    constructor (){
        this.repoName='';
        this.owner='';
        this.link='';
        this.description='';
        this.createdAt='';
        this.lastUpdated='';
        this.language='';
        this.license='';
        this.forks=0;
    }
}
