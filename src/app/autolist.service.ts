import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AutolistService {

    constructor() {
        this.LinesRegex = new RegExp('');
        this.HatchRegex = new RegExp('');
        this.TextRegex = new RegExp('');
    }

    public LinesRegex: RegExp;

    public HatchRegex: RegExp;

    public TextRegex: RegExp;

    
}
