/**
 * Created by Jose A. Gil on 20/01/2017.
 */
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from "@angular/core";
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
export class AnimalFormReactiveComponent implements OnInit, OnChanges {

    types: string[] = ['Cat', 'Dog', 'Snake', 'Perrete', 'Gatico', 'Pez', 'Otro'];
    animal: Animal = new Animal(0, 'Fresquita', 'http://www.focaswiki.com/Imagenes/adorable-bebe-foca.jpg', new Date('2016-05-07'), 'Otro');

    form: FormGroup;

    @Input() data: Animal;
    @Output() onSave = new EventEmitter();

    constructor(private formBuilder: FormBuilder) {}

    save(animal: any) {
        console.log(animal);
        if (animal.bornDate) animal.bornDate = new Date(animal.bornDate.year, animal.bornDate.month - 1, animal.bornDate.day);
        this.onSave.emit(animal);
    }

    initForm() {
        let date = {};
        if (this.data && this.data.bornDate) {
            this.data.bornDate = new Date(this.data.bornDate);
            date = {
                year: this.data.bornDate.getFullYear(),
                month: this.data.bornDate.getMonth() + 1,
                day: this.data.bornDate.getDate()
            };
        }

        this.form = this.formBuilder.group({
            name: [this.data ? this.data.name : 'Frozen', [Validators.required, Validators.minLength(5)]],
            image: [this.data ? this.data.image : 'http://www.focaswiki.com/Imagenes/adorable-bebe-foca.jpg', Validators.required],
            type: [this.data ? this.data.type : 'Otro', Validators.required],
            bornDate: [date]
        });
    }

    ngOnChanges(changes: SimpleChanges) {
       this.initForm();
    }

    ngOnInit() {
        this.initForm();
    }
}
