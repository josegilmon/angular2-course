import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers/index';
import { Subscription } from 'rxjs';
import set = Reflect.set;
/**
 * Created by Jose A. Gil on 03/02/2017.
 */

@Component({
    selector: 'app-notification',
    template: `
        <div *ngIf="notification" [ngClass]="{ error: notification.level === 0, warning: notification.level === 1, info: notification.level === 2 }">
            {{notification.text}}
        </div>
    `,
    styles: [`
        div {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 250px;
            height: 50px;
            background-color: white;
            border: 1px solid gray;
            text-align: center;
            vertical-align: middle;
            z-index: 99;
        }
        .error { color: red; }
        .warning { color: orange }
        .info { color: blue }
    `]
})
export class NotificationComponent implements OnInit, OnDestroy {

    notification: any;
    subscription: Subscription;

    constructor(private store: Store<State>) {}

    ngOnInit() {
        this.subscription = this.store.select( state => state.notification ).subscribe( notification => {
            this.notification = notification;
            setTimeout( () => this.notification = null, 2000 );
        } );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
