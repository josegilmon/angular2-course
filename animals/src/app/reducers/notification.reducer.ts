/**
 * Created by Jose A. Gil on 03/02/2017.
 */

export interface INotificationState {
    text: string,
    level: number // 0: error, 1: warning, 2: info
};

const initialState: INotificationState = {
    text: null,
    level: -1
}

export function reducer(state: INotificationState, action: any) {
    switch (action.type) {
        case 'SHOW_ERROR':
            return {
                level: 0,
                text: action.payload
            };
        case 'SHOW_INFO':
            return {
                level: 2,
                text: action.payload
            };
        default:
            return state;
    }
}
