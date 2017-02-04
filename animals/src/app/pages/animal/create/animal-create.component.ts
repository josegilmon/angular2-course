/**
 * Created by Jose A. Gil on 27/01/2017.
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Animal } from '../../../models/animal.model';
import { AnimalAction } from '../../../actions/animal.action';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers/index';
import { AnimalSelector } from '../../../selectors/animal.selector';

@Component({
    selector: 'animal-create',
    templateUrl: './animal-create.component.html'
})
export class AnimalCreateComponent implements OnInit, OnDestroy {

    allowExit: boolean;
    animals: Animal[];
    animalEdit: Animal;
    animalSubscription: Subscription;

    constructor(private router: Router, private route: ActivatedRoute, private store: Store<State>, private animalAction: AnimalAction, private animalSelector: AnimalSelector) {}

    ngOnInit() {
        this.route.params.subscribe( (params: any) => {
            if (params.id) {
                this.animalAction.getAnimal(+params.id);
            }
        })
        this.animalSelector.getAnimalEdit().subscribe( animalEdit => this.animalEdit = animalEdit );
    }

    ngOnDestroy() {
    }

    back() {
        this.allowExit = true;
        this.router.navigate(['./list']);
    }

    onSave(animal: any) {
        this.allowExit = true;
        if (animal.bornDate) {
            //animal.bornDate = new Date(animal.bornDate.year, animal.bornDate.month - 1, animal.bornDate.date);
        }
        if (this.animalEdit) {
            this.animalAction.updateAnimal(this.animalEdit.id, animal);
            //this.animalService.update(this.animalEdit.id, animal).subscribe(() => this.back(), () => { alert('Error updating animal'); });
        } else {
            this.animalAction.createAnimal(animal);
            //this.animalService.create(animal).subscribe(() => this.back(), () => { alert('Error saving animal'); });
        }
    }

    onEdit(animal: Animal) {
        this.animalEdit = animal;
    }

}
