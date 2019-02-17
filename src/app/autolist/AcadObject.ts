// AcadObject.ts
// By: Adam Renaud
// Created: 2019-02-15

/**
 * The AcadObject class that is used to represent an
 * AutoCAD object in the list format
 */
export class AcadObject {

    /**
     * @param Id The ID of the Object
     * @param length The Length of the object, can be 0
     * @param area The length of the object, can be 0
     */
    constructor(Id: string, length: number= 0, area: number= 0) {
        this.ID = Id;
        this.Length = length;
        this.AreaM = area;
        this.AreaHa = this.AreaM / 10000;
        this.AreaAc = this.AreaHa * 2.471;
    }

    /**
     * The ID of the Object
     */
    public ID: string;

    /**
     * The Length of the object
     */
    public Length: number;

    /**
     * The area of the object in meters
     */
    public AreaM: number;

    /**
     * The Area of the Object in Hectares
     */
    public AreaHa: number;

    /**
     * The Area of the object in acres
     */
    public AreaAc: number;
}
