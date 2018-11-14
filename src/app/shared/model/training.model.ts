import {Time} from '@angular/common';

export class Training {
    constructor(
        public kilometre: number,
        public isVelo: string,
        public dateSortie: Date,
        public duree: Time,
        public forme: string
    ) {}
}
