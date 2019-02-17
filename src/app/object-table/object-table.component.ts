import { Component, OnInit, Input } from '@angular/core';
import { AcadObject } from '../autolist/AcadObject';

@Component({
    selector: 'app-object-table',
    templateUrl: './object-table.component.html',
    styleUrls: ['./object-table.component.scss']
})
export class ObjectTableComponent implements OnInit {

    constructor() {
        this.objectArray = new Array<AcadObject>();
    }

    ngOnInit() {
    }

    @Input() objectArray:Array<AcadObject>;
}
