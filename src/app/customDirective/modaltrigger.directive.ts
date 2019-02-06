import { Directive, OnInit , Inject ,ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from '../service/jquery.service'

@Directive({
  selector: '[appModaltrigger]'
})
export class ModaltriggerDirective implements OnInit {

  private eleHtml:HTMLElement;
  @Input('appModaltrigger') modalId:string  ;

  constructor( @Inject(JQ_TOKEN) private $: any , eleRef :ElementRef ) { 
    this.eleHtml = eleRef.nativeElement;
  }

  ngOnInit(){
    
    this.eleHtml.addEventListener('click', e =>{
      console.log("click" , e);
      
      this.$(`${this.modalId}`).modal({})
    })

  }

}
 