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
    constructor(Id: string, length: number=0, area: number=0) {

    }

    /**
     * The ID of the Object
     */
    public ID : string;

    /**
     * The Length of the object
     */
    public Length : number;

    /**
     * The area of the object
     */
    public Area : number;
}