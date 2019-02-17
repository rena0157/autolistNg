import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-download-button',
    templateUrl: './download-button.component.html',
    styleUrls: ['./download-button.component.scss']
})
export class DownloadButtonComponent implements OnInit {

    constructor() { }

    @Output() public clicked = new EventEmitter();

    ngOnInit() {
    }

    onClick() {
        this.clicked.emit('');
    }
}
