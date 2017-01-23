import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";

import { AnimalService } from "./services/animal.service";

import { Animal } from './models/animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

    animals: Animal[];
    animalEdit: Animal;
    animalsSubscription: Subscription;

    constructor(private animalService: AnimalService) {
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

    onSave(animal: Animal) {
        if (animal.bornDate) {

        }
        if (this.animalEdit) {
            this.animalService.update(this.animalEdit.id, animal).subscribe(() => this.updateAnimals(), () => {
                alert('Error updating animal');
                this.updateAnimals();
            });
        } else {
            this.animalService.create(animal).subscribe(() => this.updateAnimals(), () => {
                alert('Error saving animal');
                this.updateAnimals();
            });
        }
    }

    onEdit(animal: Animal) {
        this.animalEdit = animal;
    }

    onDelete(animal: Animal) {
        this.animalService.delete(animal.id).subscribe( () => this.updateAnimals(), () => {
            alert('Error removing animal');
            this.updateAnimals();
        });
    }

}
