import { Animal } from './models/animal.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  animal = new Animal('Sansón', 'Perrete', new Date('2016/01/01'));

  animals: Animal[] = [
    new Animal('Sansón', 'Perrete', new Date('2015/01/01')),
    new Animal('Tigre', 'Gatico', new Date('2016/01/01'), 'http://3.bp.blogspot.com/-2JT-DsDzINI/ToA7IDtuGjI/AAAAAAAADUs/w2zmkdxIwKw/s1600/2292753016_60816975e9_o.jpg'),
    new Animal('Tiburón', 'Pez', new Date(), 'https://t1.ea.ltmcdn.com/es/images/4/4/3/img_la_alimentacion_del_pez_globo_enano_de_agua_dulce_20344_600.jpg'),
  ];

  onDelete(animal: Animal) {
    console.log('Delete ', animal);
  }
}
