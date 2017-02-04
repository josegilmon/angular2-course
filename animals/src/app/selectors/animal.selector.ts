/**
 * Created by Jose A. Gil on 03/02/2017.
 */

import { Store } from '@ngrx/store';
import { State } from '../reducers/index';
import { Injectable } from '@angular/core';

@Injectable()
export class AnimalSelector {

    constructor(private store: Store<State>) {}

    getAnimalEdit() {
        return this.store.select( state => state.animals.animalEdit ).map( animalEdit => animalEdit && Object.assign({}, animalEdit))
    }
}
