/**
 * Created by jagil on 27/01/2017.
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Animal } from '../../../models/animal.model';
import { AnimalService } from '../../../services/animal.service';

@Component({
    selector: 'animal-list',
    templateUrl: './animal-list.component.html'
})
export class AnimalListComponent implements OnInit, OnDestroy {

    animals: Animal[];
    animalsSubscription: Subscription;

    constructor(private animalService: AnimalService, private router: Router, private route: ActivatedRoute ) {
        this.updateAnimals();
    }

    ngOnInit() {
        this.updateAnimals();
    }

    ngOnDestroy() {
        this.animalsSubscription && this.animalsSubscription.unsubscribe();
    }

    updateAnimals() {
        this.ngOnDestroy();
        this.animalsSubscription = this.animalService.getAll().subscribe( data => this.animals = data );
    }

    onEdit(animal: Animal) {
        this.router.navigate(['animal/edit', animal.id]);
        //this.router.navigate(['../edit', animal.id], { relativeTo: this.route });     // Relative routes
    }

    onDelete(animal: Animal) {
        this.animalService.delete(animal.id).subscribe( () => this.updateAnimals(), () => {
            alert('Error removing animal');
            this.updateAnimals();
        });
    }

}
