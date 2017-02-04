/**
 * Created by Jose A. Gil on 28/01/2017.
 */

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AnimalService } from '../services/animal.service';
import { State } from '../reducers/index';
import { Animal } from '../models/animal.model';
import { go } from '@ngrx/router-store';
import { NotificationAction } from './notification.action';

@Injectable()
export class AnimalAction {

    constructor(private animalService: AnimalService, private store: Store<State>, private notificationAction: NotificationAction) {}

    getAnimals() {
        this.animalService
            .getAll()
            .subscribe( animals => {
                this.store.dispatch({ type: 'SEARCH_ANIMALS', payload: animals });
                this.notificationAction.showInfo('Animals successfully retrieved!!')
            });
    }

    getAnimal(id: number) {
        this.animalService
            .get(id)
            .subscribe( animal => {
                this.store.dispatch({ type: 'GET_ANIMAL', payload: animal });
            });
    }

    createAnimal(newAnimal: Animal) {
        this.animalService
            .create(newAnimal)
            .subscribe(animal => {
                this.store.dispatch({ type: 'CREATE_ANIMAL', payload: animal });
                this.store.dispatch( go(['./list']) );
            }, this.actionError );
    }

    updateAnimal(id: number, animal: Animal) {
        this.animalService
            .update(id, animal)
            .subscribe( animal => {
                this.store.dispatch({ type: 'UPDATE_ANIMAL', payload: animal })
                this.store.dispatch( go(['./list']) );
            });
    }

    deleteAnimal(id: number) {
        this.animalService
            .delete(id)
            .subscribe(() => {
                this.store.dispatch({ type: 'DELETE_ANIMAL', payload: id });
            }, this.actionError);
    }

    actionError(error) {
        console.error(error);
    }
}
