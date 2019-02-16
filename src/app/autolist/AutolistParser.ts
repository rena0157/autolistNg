import { AcadObject } from './AcadObject';

// AutolistParser.ts
// By Adam Renaud
// Created: 2019-02-15

/**
 * Autolist Parser is a class that usess
 */
export class AutolistParser {
    readonly linesRegex = /[L,l]ength\s+=?\s*(\d+\.?\d*)/g;

    readonly hatchesRegex = /[A]rea\s*(\d+\.?\d*)/g;

    readonly textRegex = /(text|Contents:)\s*(.*)/g;

    /**
     * Get the double from the List text
     */
    getDoubles(text: string, re: RegExp): number[] {
        var match: RegExpExecArray;
        var matches: number[] = new Array<number>();
        while (match = re.exec(text) as RegExpExecArray) {
            matches.push(parseFloat(match[1]));
        }
        return matches;
    }

    /**
     * Get the strings from the list text
     */
    getString(text: string, re: RegExp, groupNum:number): string[] {
        var match: RegExpExecArray;
        var matches: string[] = new Array<string>();

        while (match = re.exec(text) as RegExpExecArray) {
            matches.push(match[groupNum]);
        }

        return matches;
    }

    /**
     * Get the objects from the list text
     */
    getObjects(text: string): AcadObject[] {
        var objectList = new Array<AcadObject>();

        var textObjects = this.getString(text, this.textRegex, 2);
        var lengthObjects = this.getDoubles(text, this.linesRegex);
        var areaObjects = this.getDoubles(text, this.hatchesRegex);

        const objectNames:RegExp =  /(LINE|LWPOLYLINE|HATCH|TEXT|MTEXT|ARC)/g;
        const textMatch = 'TEXT';
        const mTextMatch = "MTEXT";
        const lineMatch = "LINE";
        const arcMatch = "ARC";
        const lwPolyLineMatch = "LWPOLYLINE";
        const hatchMatch = "HATCH";

        // The list of matches
        var matches:string[] = this.getString(text, objectNames, 0);

        // Indexes
        var textIndex = 0;
        var lengthIndex = 0;
        var areaIndex = 0;

        var currentText = null;
        var currentLength:number = 0.0;
        var currentArea:number = 0.0;

        for(var matchIndex = 0; matchIndex < matches.length; ++matchIndex) {
            var currentMatch = matches[matchIndex];

            if (textIndex < textObjects.length && currentText == null && (currentMatch == textMatch || currentMatch == mTextMatch)) {
                currentText = textObjects[textIndex++];

                // TODO: Add MTEXT Additional Parsing
            }

            else if (lengthIndex < lengthObjects.length && (currentMatch == lwPolyLineMatch || currentMatch == lineMatch || currentMatch == arcMatch)) {
                currentLength += lengthObjects[lengthIndex++];
            }

            else if (areaIndex < areaObjects.length && (currentMatch == hatchMatch)) {
                currentArea += areaObjects[areaIndex++];
            }

            else if (textIndex < textObjects.length && currentText != null && (currentMatch == textMatch || currentMatch == mTextMatch)) {
                // TODO: Add MText Parsing

                objectList.push(new AcadObject(currentText, currentLength, currentArea));

                currentText = textObjects[textIndex++];
                currentLength = 0.0;
                currentArea = 0.0;
            }
        }

        if (objectList.length < textObjects.length) {
            objectList.push(new AcadObject(currentText as string, currentLength, currentArea));
        }

        return objectList;

    }
}
