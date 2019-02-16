import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-output-cell',
    templateUrl: './output-cell.component.html',
    styleUrls: ['./output-cell.component.scss']
})
export class OutputCellComponent implements OnInit {

    constructor() 
    {
        this.value = "";
        this.placeholder = "";
    }

    ngOnInit() {
    }

    @Input() public value: string;

    @Input() public placeholder : string;
}
