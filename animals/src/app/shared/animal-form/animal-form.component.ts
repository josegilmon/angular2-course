/**
 * Created by Jose A. Gil on 20/01/2017.
 */
import {Component} from "@angular/core";
import {Animal} from "../../models/animal.model";

@Component({
    selector: 'animal-form',
    templateUrl: 'animal-form.component.html',
    styles: [`
        form {
            display: block;
            margin: auto;
            width: 80%;
        }
    `]
})
export class AnimalFormComponent {

    types: string[] = ['Perrete', 'Gatico', 'Pez'];
    animal: Animal;

    show(value) {
        console.log(value);
    }

    save(value: Animal) {
        console.log(value);
    }
}
