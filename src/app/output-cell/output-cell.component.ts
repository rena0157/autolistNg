// output-cell component
// By: Adam Renaud
// Created: 2019-02-14

import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-output-cell',
    templateUrl: './output-cell.component.html',
    styleUrls: ['./output-cell.component.scss']
})
export class OutputCellComponent implements OnInit {

    /**
     * Default Constructor
     */
    constructor() 
    {
        this.value = "";
        this.placeholder = "";
    }

    /**
     * Init lifecycle hook
     */
    ngOnInit() {
    }

    /**
     * The value of the output cell
     */
    @Input() public value: string;

    /**
     * The placeholder value of the cell
     */
    @Input() public placeholder : string;
}
