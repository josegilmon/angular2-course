/**
 * Created by Jose A. Gil on 27/01/2017.
 */

import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AnimalCreateComponent } from '../pages/animal/create/animal-create.component';

@Injectable()
export class ExitCanDeactivateGuard implements CanDeactivate<AnimalCreateComponent> {

    canDeactivate(instance: AnimalCreateComponent): boolean {
        return instance.allowExit || window.confirm('Are you sure that you want to exit?');
    }

}
