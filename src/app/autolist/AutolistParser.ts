import { AcadObject } from './AcadObject';

// AutolistParser.ts
// By Adam Renaud
// Created: 2019-02-15

/**
 * Autolist Parser is a class that usess
 */
export class AutolistParser
{
    readonly linesRegex = new RegExp('[L,l]ength\s+=?\s*(\d+\.?\d*)', 'g');

    readonly hatchesRegex = new RegExp('');

    readonly textRegex = new RegExp('');

    /**
     * Get the double from the List text
     */
    getDouble(text:string, re: RegExp) : number[]
    {
        return new Array<number>();
    }

    /**
     * Get the strings from the list text
     */
    getString(re: RegExp) : string[]
    {
        return new Array<string>();
    }

    /**
     * Get the objects from the list text
     */
    getObjects() : AcadObject[]
    {
        return new Array<AcadObject>();
    }
}