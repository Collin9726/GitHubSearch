import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRepoHighlight]'
})
export class RepoHighlightDirective {

  isClicked:boolean;

  constructor(private elem:ElementRef) { 
    this.isClicked=false;
  }

  @HostListener("click") onClicks(){
    this.isClicked=!this.isClicked;
    this.repoDeco(this.isClicked)
  }

  private repoDeco(input:boolean){
    if(input){
      this.elem.nativeElement.style.backgroundColor='yellow';
    }
    else{
      this.elem.nativeElement.style.backgroundColor='black';
    }    
  }

}
