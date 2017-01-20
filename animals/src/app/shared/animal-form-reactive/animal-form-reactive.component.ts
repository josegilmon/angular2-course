/**
 * Created by jagil on 20/01/2017.
 */
import {Component, OnInit} from "@angular/core";
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

    types: string[] = ['Perrete', 'Gatico', 'Pez'];
    animal: Animal;

    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    save(value: Animal) {
        console.log(value);
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            image: ['', Validators.required],
            type: ['', Validators.required],
            birthDate: ['']
        });
    }
}
