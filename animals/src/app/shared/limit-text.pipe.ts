/**
 * Created by jagil on 20/01/2017.
 */

import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'limitText',
    pure: true
})
export class LimitTextPipe implements PipeTransform {

    private MAX_LENGTH = 5;

    transform(value: string, maxLength: number = this.MAX_LENGTH) {

        if (value && value.length > maxLength) {
            return `${ value.substring(0, maxLength) }...`
        }
        return value;
    }
}
