export class Animal {

    id?: number;
    name: string;
    age: number;
    type: string;
    birthDate: Date;
    image: string;

    constructor(id: number, name: string, type: string, birthDate: Date, image: string = 'http://25.media.tumblr.com/tumblr_m7qjm7Ky7a1qfheoho2_500.jpg') {
        this.id = id;
        this.name = name;
        this.type = type;
        this.image = image;
        this.birthDate = birthDate;
        this.age = new Date().getFullYear() - birthDate.getFullYear();
    }
}
