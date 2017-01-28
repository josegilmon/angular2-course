/**
 * Created by jagil on 27/01/2017.
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { Animal } from '../../../models/animal.model';
import { AnimalService } from '../../../services/animal.service';

@Component({
    selector: 'animal-create',
    templateUrl: './animal-create.component.html'
})
export class AnimalCreateComponent implements OnInit, OnDestroy {

    allowExit: boolean;
    animals: Animal[];
    animalEdit: Animal;
    animalSubscription: Subscription;

    constructor(private animalService: AnimalService, private router: Router, private route: ActivatedRoute) {
        /*
        this.route.params.subscribe( (params: any) => {
            if (params && params.id) {
                this.animalService.get(params.id).subscribe( data => this.animalEdit = data );
            }
        });
        */
        this.animalSubscription = this.route.params.map( (params: any) => {
            if (params && params.id) {
                return this.animalService.get(+params.id);
            }
            return Observable.of(null);
        }).switch().subscribe( obj => this.animalEdit = obj );
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    back() {
        this.allowExit = true;
        this.router.navigate(['./list']);
    }

    onSave(animal: Animal) {
        if (animal.bornDate) {

        }
        if (this.animalEdit) {
            this.animalService.update(this.animalEdit.id, animal).subscribe(() => this.back(), () => {
                alert('Error updating animal');
            });
        } else {
            this.animalService.create(animal).subscribe(() => this.back(), () => {
                alert('Error saving animal');
            });
        }
    }

    onEdit(animal: Animal) {
        this.animalEdit = animal;
    }

}
