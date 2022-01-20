import { KELVIN } from "../constants"

export const CelciusTemp = (temp : number) => {
    let Celcius = temp - KELVIN
    return Celcius.toFixed(2)
}
export const FarhenhiteTemp = (temp: number) => {
    let Far = (temp - KELVIN) * 9/5 + 32
    return Far.toFixed(2) 
}
