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
      this.elem.nativeElement.style.backgroundColor='rgba(1, 1, 19, 0.7)';
    }
    else{
      this.elem.nativeElement.style.backgroundColor='black';
    }    
  }

}
