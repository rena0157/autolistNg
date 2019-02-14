import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    /**
     * The Constructor
     */
    constructor() 
    {
        this.totalArea = "";
        this.totalLength = "";
    }

    /**
     * Main init function
     */
    ngOnInit() 
    {
    }

    /**
     * The total length of all lines
     * and polylines
     */
    public totalLength: string;

    /**
     * The total area of all the hatches
     */
    public totalArea: string;

    /**
     * @param text The text that is passed to the event
     */
    onInput(text: string) {
        this.totalLength = text;
        this.totalArea = text;
    }

}
