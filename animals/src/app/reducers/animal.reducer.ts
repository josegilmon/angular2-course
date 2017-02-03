/**
 * Created by Jose A. Gil on 28/01/2017.
 */

import { Animal } from '../models/animal.model';

export interface IAnimalState {
    entities: Animal[];
    animalEdit: Animal;
}

const initialState: IAnimalState = {
    entities: null,
    animalEdit: null
};

export function reducer(state = initialState, action): IAnimalState {
    switch (action.type) {
        case 'SEARCH_ANIMALS':
            return Object.assign({}, state, {
                entities: action.payload
            });
        case 'CREATE_ANIMAL':
            const entities = state.entities.concat(action.payload);
            return {
                entities,
                animalEdit: state.animalEdit && Object.assign({}, state.animalEdit)
            };
        default:
            return state;
    }
}
