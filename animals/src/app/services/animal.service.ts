/**
 * Created by jagil on 21/01/2017.
 */

import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";

import { API_URL_OPAQUE } from "../config";

import { Animal } from "../models/animal.model";

@Injectable()
export class AnimalService {

    private lastId: number = 3;

    animals: Animal[] = [
        new Animal(1, 'Sansón', 'Perrete', new Date('2015/01/01')),
        new Animal(2, 'Tigre', 'Gatico', new Date('2016/01/01'), 'http://3.bp.blogspot.com/-2JT-DsDzINI/ToA7IDtuGjI/AAAAAAAADUs/w2zmkdxIwKw/s1600/2292753016_60816975e9_o.jpg'),
        new Animal(3, 'Tiburón', 'Pez', new Date(), 'https://t1.ea.ltmcdn.com/es/images/4/4/3/img_la_alimentacion_del_pez_globo_enano_de_agua_dulce_20344_600.jpg'),
    ];

    constructor(@Inject(API_URL_OPAQUE) private apiUrl: string, private http: Http) {
        console.log(apiUrl);
    }

    getAll() {
        //return this.http.get(`${ this.apiUrl }/animal`)
        return this.animals;
    }

    get(id: number) {
        return this.animals.find( (animal) => animal.id === id );
    }

    create(animal: Animal) {
        animal.id = ++this.lastId;
        this.animals.push(animal);
    }

    update(id: number, animalUpdate: Animal) {
        this.animals = this.animals.map((animal) => {
            if (animal.id === id) {
                Object.assign(animal, animalUpdate);
            }
            return animal;
        })
    }

    delete(id: number) {
        this.animals = this.animals.filter( (animal) => animal.id !== id );
    }
}
