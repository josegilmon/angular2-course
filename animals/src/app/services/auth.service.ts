/**
 * Created by jagil on 27/01/2017.
 */

import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    user: any = {
        name: 'Pepe',
        role: 'ADMIN'
    };

}
