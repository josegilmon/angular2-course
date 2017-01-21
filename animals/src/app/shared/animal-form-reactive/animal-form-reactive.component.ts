/**
 * Created by jagil on 20/01/2017.
 */
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

import { Animal } from "../../models/animal.model";

@Component({
    selector: 'animal-form-reactive',
    templateUrl: 'animal-form-reactive.component.html',
    styles: [`
        form {
            display: block;
            margin: auto;
            width: 80%;
        }
    `]
})
export class AnimalFormReactiveComponent implements OnInit {

    types: string[] = ['Perrete', 'Gatico', 'Pez', 'Otro'];
    animal: Animal = new Animal(0, 'Fresquita', 'http://www.focaswiki.com/Imagenes/adorable-bebe-foca.jpg', new Date('2016-05-07'), 'Otro');

    form: FormGroup;

    @Output() onSave = new EventEmitter();

    constructor(private formBuilder: FormBuilder) {}

    save(animal: any) {
        console.log(animal);
        if (animal.birthDate) animal.birthDate = new Date(animal.birthDate.year, animal.birthDate.month - 1, animal.birthDate.day);
        this.onSave.emit(animal);
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['Fresquita', [Validators.required, Validators.minLength(5)]],
            image: ['http://www.focaswiki.com/Imagenes/adorable-bebe-foca.jpg', Validators.required],
            type: ['Otro', Validators.required],
            birthDate: ['']
        });
    }
}
