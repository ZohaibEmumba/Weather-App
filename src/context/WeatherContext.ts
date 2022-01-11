import { createContext } from 'react';
import { VISIBLESCREEN, INITIALSTATE } from '../constants/index'
import { StateType, dispatch } from '../types/ContextTypes'

export const initialState: StateType = INITIALSTATE;

export type Action =
    | {
        type: 'VISIBLESCREEN', payload: {
            tab: number,
            data: any[]
        }
    }

export const WeatherContext = createContext<{
    state: StateType;
    dispatch: dispatch;
}>({
    state: initialState,
    dispatch: () => undefined,
});

export const GistReducer = (state: StateType, action: Action): StateType => {
    const {
        type,
    } = action;
    switch (type) {
        case VISIBLESCREEN:
            return {
                ...state,
                tab: action.payload.tab,
                data: action.payload.data
            };

        default:
            return state;
    }
};
