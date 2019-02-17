import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-autolist-textarea',
    templateUrl: './autolist-textarea.component.html',
    styleUrls: ['./autolist-textarea.component.scss']
})
export class AutolistTextareaComponent implements OnInit {

    constructor() {
    }

    /**
     * Input Event
     */
    @Output() public inputEvent = new EventEmitter();


    ngOnInit() {
    }

    /**
     * @param text The string from the input area
     */
    onInput(text: string) {
        this.inputEvent.emit(text);
    }

}
