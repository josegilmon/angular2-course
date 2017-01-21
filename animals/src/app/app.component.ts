import { Component } from '@angular/core';

import { AnimalService } from "./services/animal.service";

import { Animal } from './models/animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    animals: Animal[];

    constructor(private animalService: AnimalService) {
        this.updateAnimals();
    }

    onSave(animal: Animal) {
        this.animalService.create(animal);
        this.updateAnimals();
    }

    onDelete(animal: Animal) {
        this.animalService.delete(animal.id);
        this.updateAnimals();
    }

    updateAnimals() {
        this.animals = this.animalService.getAll();
    }
}
