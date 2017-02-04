/**
 * Created by Jose A. Gil on 03/02/2017.
 */

import { Store } from '@ngrx/store';
import { State } from '../reducers/index';
import { Injectable } from '@angular/core';

@Injectable()
export class NotificationAction {

    constructor(private store: Store<State>) {}

    showError(message: string) {
        this.store.dispatch({ type: 'SHOW_ERROR', payload: message });
    }

    showInfo(message: string) {
        this.store.dispatch({ type: 'SHOW_INFO', payload: message });
    }
}
