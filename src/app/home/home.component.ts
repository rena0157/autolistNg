import { Component, OnInit } from '@angular/core';
import { AutolistParser } from '../autolist/AutolistParser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private parser:AutolistParser;

    /**
     * The Constructor
     */
    constructor() 
    {
        this.parser = new AutolistParser();
        this.totalArea = 0;
        this.totalLength = 0;
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
    public totalLength: number;

    public totalLengthPlaceholder : string = "Total Length";

    /**
     * The total area of all the hatches
     */
    public totalArea: number;

    public totalAreaPlaceholder : string = "Total Area";

    /**
     * @param text The text that is passed to the event
     */
    onInput(text: string) {
    }

}
