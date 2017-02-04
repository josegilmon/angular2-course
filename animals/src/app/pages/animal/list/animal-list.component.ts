/**
 * Created by Jose A. Gil on 27/01/2017.
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Animal } from '../../../models/animal.model';
import { AnimalAction } from '../../../actions/animal.action';
import { State } from '../../../reducers/index';

@Component({
    selector: 'animal-list',
    templateUrl: './animal-list.component.html'
})
export class AnimalListComponent implements OnInit, OnDestroy {

    animals: Animal[];
    animals$: Observable<Animal[]>;
    animalsSubscription: Subscription;

    constructor(private store: Store<State>, private router: Router, private route: ActivatedRoute, private animalAction: AnimalAction) {}

    ngOnInit() {
        this.animalAction.getAnimals();
        this.animals$ = this.store.select( (state: State) => state.animals.entities );
    }

    ngOnDestroy() {
        this.animalsSubscription && this.animalsSubscription.unsubscribe();
    }

    onEdit(animal: Animal) {
        this.router.navigate(['animal/edit', animal.id]);
        //this.router.navigate(['../edit', animal.id], { relativeTo: this.route });     // Relative routes
    }

    onDelete(animal: Animal) {
        this.animalAction.deleteAnimal(animal.id);
    }

    onError() {
    }

}
