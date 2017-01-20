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
  //@Input() data: any; // Some data wich will be passed as parameter to the component in the 'inputs' array
    @Input() color: string;

  @Output() onDelete = new EventEmitter();

  formatDate: String = 'dd/MM/yyyy HH:mm';

  delete(ev: Event) {
    //alert('delete');
    ev.preventDefault();
    this.onDelete.emit(this.data);
  }
}
