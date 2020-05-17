export class UserRepos {
    repositoryNames:string[];
    repositoryLinks:string[];
    repositoryDescriptions:string[];
    repositoryCreated:string[];
    repositoryForks:number[];
    repositoryLicenses:string[];

    constructor(){
        this.repositoryNames=[];
        this.repositoryLinks=[];
        this.repositoryDescriptions=[];
        this.repositoryCreated=[];
        this.repositoryForks=[];
        this.repositoryLicenses=[];
    } 
}
