import { Action } from '../context/WeatherContext'

export type StateType = {
    tab: number,
    data: any
}

export type dispatch = React.Dispatch<Action>;
