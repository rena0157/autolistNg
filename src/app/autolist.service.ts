import { Injectable } from '@angular/core';
import { AcadObject } from './autolist/AcadObject';

@Injectable({
  providedIn: 'root'
})
export class AutolistService {

  constructor() { }

  readonly linesRegex = /[L,l]ength\s+=?\s*(\d+\.?\d*)/g;

  readonly hatchesRegex = /[A]rea\s*(\d+\.?\d*)/g;

  readonly textRegex = /(text|Contents:)\s*(.*)/g;

  /**
   * Get the double from the List text
   */
  getDoubles(text: string, re: RegExp): number[] {
      let match: RegExpExecArray;
      const matches: number[] = new Array<number>();
      while (match = re.exec(text) as RegExpExecArray) {
          matches.push(parseFloat(match[1]));
      }
      return matches;
  }

  /**
   * Get the strings from the list text
   */
  getString(text: string, re: RegExp, groupNum: number): string[] {
      let match: RegExpExecArray;
      const matches: string[] = new Array<string>();

      while (match = re.exec(text) as RegExpExecArray) {
          matches.push(match[groupNum]);
      }

      return matches;
  }

  /**
   * Get the objects from the list text
   */
  getObjects(text: string): AcadObject[] {
      const objectList = new Array<AcadObject>();

      const textObjects = this.getString(text, this.textRegex, 2);
      const lengthObjects = this.getDoubles(text, this.linesRegex);
      const areaObjects = this.getDoubles(text, this.hatchesRegex);

      const objectNames: RegExp = /(LINE|LWPOLYLINE|HATCH|TEXT|MTEXT|ARC)/g;
      const textMatch = 'TEXT';
      const mTextMatch = 'MTEXT';
      const lineMatch = 'LINE';
      const arcMatch = 'ARC';
      const lwPolyLineMatch = 'LWPOLYLINE';
      const hatchMatch = 'HATCH';

      // The list of matches
      const matches: string[] = this.getString(text, objectNames, 0);

      // Indexes
      let textIndex = 0;
      let lengthIndex = 0;
      let areaIndex = 0;

      // Current objects
      let currentText = null;
      let currentLength = 0.0;
      let currentArea = 0.0;

      // Iterate through the matches and build into objects that contain
      // Texts, lengths, and areas
      for (let matchIndex = 0; matchIndex < matches.length; ++matchIndex) {
          const currentMatch = matches[matchIndex];

          if (textIndex < textObjects.length && currentText == null && (currentMatch === textMatch || currentMatch === mTextMatch)) {
              currentText = textObjects[textIndex++];

              // TODO: Add MTEXT Additional Parsing

          // Length objects
          } else if (lengthIndex < lengthObjects.length &&
              (currentMatch === lwPolyLineMatch || currentMatch === lineMatch || currentMatch === arcMatch)) {
              currentLength += lengthObjects[lengthIndex++];

          // Area objects
          } else if (areaIndex < areaObjects.length && (currentMatch === hatchMatch)) {
              currentArea += areaObjects[areaIndex++];

          // Text objects
          } else if (textIndex < textObjects.length &&
              currentText != null && (currentMatch === textMatch || currentMatch === mTextMatch)) {
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
