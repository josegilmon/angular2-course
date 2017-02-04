/**
 * Created by Jose A. Gil on 03/02/2017.
 */

import { Component } from '@angular/core';
@Component({
    selector: 'app-tab',
    template: `
        <div>
            <ul>
                <li (click)="selected = 1">Tab1</li>
                <li (click)="selected = 2">Tab2</li>
            </ul>
            <div class="content" *ngIf="selected === 1">
                <ng-content select="tab-component1"></ng-content>
                pepe
            </div>
            <div class="content" *ngIf="selected === 2">
                <ng-content select="tab-component2"></ng-content>
                juan
            </div>
        </div>
    `,
    styles: [`
        ul { list-style: none }
        li { display: inline-block }
        .content {
            display: block;
            height: 300px;
            width: 100%;
        }
    `]
})

export class TabComponent {

    selected: number = 1;
}
