export class Repo {
    repoName:string;
    owner:string;
    ownerLink:string;
    repoLink:string;
    description:string;
    createdAt:string;
    lastUpdated:string;
    language:string;
    license:string;
    forks:number;

    constructor (){
        this.repoName='';
        this.owner='';
        this.ownerLink='';
        this.repoLink='';
        this.description='';
        this.createdAt='';
        this.lastUpdated='';
        this.language='';
        this.license='';
        this.forks=0;
    }
}
