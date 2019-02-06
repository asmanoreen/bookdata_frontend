import { Component, Input, Inject, ViewChild, ElementRef } from '@angular/core'
import { JQ_TOKEN } from '../service/jquery.service'

@Component({
    selector:'simple-modal',
    template:`
        <div id="{{elementId}}" #modalcontainer class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class modal-content>
                    <div class="modal-header">
                        <button type="btn" class="close close-btn" data-dismiss="modal">
                            <span>&times;</span></button>
                        <h1 class="modal-title">{{title}}</h1>
                    </div>
                    <div class="modal-body" (click)="closeModel()">
                        <ng-template></ng-template>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles:[`
        .modal-body { margin-bottom:20px; height: 250px; overflow-y: scroll; }
        `]
})

export class SimpleModalComponent {

    constructor( @Inject(JQ_TOKEN) private $: any ) { }
    
    @Input() title:string;
    @Input() id:string;
    @ViewChild('modalcontainer') containerEl: ElementRef;

    closeModel(){
        this.$(this.containerEl.nativeElement).modal('hide');
    }

}  