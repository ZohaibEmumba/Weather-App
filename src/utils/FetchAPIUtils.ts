import axios from 'axios'
import { ID } from '../constants/index'

export const weatherByName = async (cityName: string) => {
    const resp =await axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ID}`).then(data => data.data)
    const data = resp
    return data
}
export const getWeatherByCityID = async (cityID : number) => {
    const resp =await axios(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${ID}`).then(data => data.data)
    const data = resp
    return data
}

export const getWeatherByGeoCord = async (lat : number , lon : number) => {
    const resp =await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ID}`).then(data => data.data)
    const data = resp
    return data
}