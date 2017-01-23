import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Animal } from '../../models/animal.model';

/**
 * AnimalComponent
 */
@Component({
  selector: 'animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {

    @Input() data: Animal;

    @Output() onEdit: EventEmitter<Animal> = new EventEmitter();
    @Output() onDelete: EventEmitter<Animal> = new EventEmitter();

    edit(ev: Event) {
        ev.preventDefault();
        this.onEdit.emit(this.data);
    }

    delete(ev: Event) {
        //alert('delete');
        ev.preventDefault();
        this.onDelete.emit(this.data);
    }
}
