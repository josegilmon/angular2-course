/**
 * Created by Jose A. Gil on 27/01/2017.
 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.user.role === 'ADMIN') {
            return true;
        } else {
            this.router.navigate(['not-authorized']);
            return false;
        }
    }

}
