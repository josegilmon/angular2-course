/**
 * Created by Jose A. Gil on 28/01/2017.
 */

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AnimalService } from '../services/animal.service';
import { State } from '../reducers/index';
import { Animal } from '../models/animal.model';

@Injectable()
export class AnimalAction {

    constructor(private animalService: AnimalService, private store: Store<State>) {}

    getAnimals() {
        this.animalService
            .getAll()
            .subscribe( animals => {
                return this.store.dispatch({
                    type: 'SEARCH_ANIMALS',
                    payload: animals
                });
            });
    }

    createAnimal(newAnimal: Animal) {
        this.animalService
            .create(newAnimal)
            .subscribe(animal => {
                this.store.dispatch({ type: 'CREATE_ANIMAL', payload: animal })
            }, error => console.error(error) );
    }
}
