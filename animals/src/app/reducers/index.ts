/**
 * Created by Jose A. Gil on 28/01/2017.
 */

import * as animal from './animal.reducer';
import * as notification from './notification.reducer';

import { compose } from '@ngrx/core';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, combineReducers } from '@ngrx/store';

export interface State {
    animals: animal.IAnimalState,
    notification: notification.INotificationState
}

const reducers = {
    animals: animal.reducer,
    notification: notification.reducer,
    router: routerReducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: State, action: any) {
    return developmentReducer(state, action);
}
