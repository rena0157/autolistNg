import { Component, OnInit } from '@angular/core';
import { AcadObject } from '../autolist/AcadObject';
import { AutolistService } from '../autolist.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    /**
     * The Constructor
     */
    constructor(parser: AutolistService) {
        this.parser = parser;
        this.totalArea = '';
        this.totalLength = '';
        this.objectsArray = new Array<AcadObject>();
        this.showTable = false;
    }

    private parser: AutolistService;

    /**
     * The total length of all lines
     * and polylines
     */
    public totalLength: string;

    /**
     * The totalLength placeholder text
     */
    public totalLengthPlaceholder = 'Total Length';

    /**
     * The total area of all the hatches
     */
    public totalArea: string;

    /**
     * The Objects Array
     */
    public objectsArray: AcadObject[];

    /**
     * Shows the table if true
     */
    public showTable: boolean;

    /**
     * The total Area placeholder text
     */
    public totalAreaPlaceholder = 'Total Area';

    /**
     * Main init function
     */
    ngOnInit() {
    }

    /**
     * Function that sums an array
     * @param a the first number
     * @param b the second number
     */
    public sumArray = (a: number, b: number): number => a + b;

    /**
     * Download the Block data into the csv
     */
    downloadCSV() {
        // Create a link element
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(this.arrayToCSV(this.objectsArray)));
        element.setAttribute('download', 'Objects.csv');

        // Make sure that it is hidden
        element.style.display = 'none';

        // Append it to the dom
        document.body.appendChild(element);

        // Click to init the download
        element.click();

        // Clean up after we are done
        document.body.removeChild(element);
    }

    /**
     * @param text The text that is passed to the event
     */
    onInput(text: string) {

        // Get the lines' lengths from the string passed in
        const lines = this.parser.getDoubles(text, this.parser.linesRegex);

        // Get the areas that are passed from the string
        const areas = this.parser.getDoubles(text, this.parser.hatchesRegex);

        const objects = this.parser.getObjects(text);

        // Set the total length
        if (lines.length > 0) {
            this.totalLength = `${lines.reduce(this.sumArray).toFixed(3)} m`;
        } else { this.totalLength = ''; }

        if (areas.length > 0) {
            this.totalArea = `${areas.reduce(this.sumArray).toFixed(3)} m² (${(areas.reduce(this.sumArray) / 10000).toFixed(3)} Ha)`;
        } else { this.totalArea = ''; }

        if (objects.length > 0 ) {
            this.objectsArray = objects;
            this.showTable = true;
        } else {
            // this.objectsArray = null;
            this.showTable = false;
        }
    }

    arrayToCSV(a: Array<AcadObject>) {
        let returnString = 'Object ID,Length,Area(m2),Area(Ha),Area(Ac)\n';

        this.objectsArray.forEach((o: AcadObject) => {
            returnString = returnString.concat(`${o.ID},${o.Length},${o.AreaM},${o.AreaHa},${o.AreaAc}\n`);
        });
        return returnString;
    }

}
