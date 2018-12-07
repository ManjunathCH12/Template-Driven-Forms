import { Component, OnInit, Input } from '@angular/core';

@Component ({
    selector: 'favorite',
    templateUrl: './favourite.component.html',
    styleUrls: ['./favourite.component.css']
})
export class favouriteComponent implements OnInit {
   @Input() isFavorite: boolean;
    constructor() { }
    ngOnInit() {}
    onClick() {
        this.isFavorite=!this.isFavorite;
    }
}