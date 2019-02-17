// Object table component
// By Adam Renaud
// Created 2019-02-17

import { Component, OnInit, Input } from '@angular/core';
import { AcadObject } from '../autolist/AcadObject';

/**
 * The Object Table Component class
 */
@Component({
    selector: 'app-object-table',
    templateUrl: './object-table.component.html',
    styleUrls: ['./object-table.component.scss']
})
export class ObjectTableComponent implements OnInit {

    /**
     * Default Constructor
     */
    constructor() {
        this.objectArray = new Array<AcadObject>();
    }

    /**
     * The input object array
     */
    @Input() objectArray: Array<AcadObject>;

    /**
     * On Init Life cycle hook
     */
    ngOnInit() {
    }
}
