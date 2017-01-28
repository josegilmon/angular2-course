/**
 * Created by jagil on 27/01/2017.
 */

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private authService: AuthService) {}

    doUser() {
        this.authService.user.role = 'USER';
    }

    doAdmin() {
        this.authService.user.role = 'ADMIN';
    }

}
