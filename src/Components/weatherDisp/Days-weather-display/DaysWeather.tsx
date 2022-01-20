import React, { FC } from 'react'
import { KELKVIN } from '../../../constants'
import {Section} from './style'

interface Props {
    response : any ;
    weekday : string
}

const DaysWeather:FC <Props> = ({response , weekday}) =>  {
    const { weather, main} = response
    const {temp} = main
    const CelciusTemp = temp - KELKVIN
    const FarhenhiteTemp = CelciusTemp * 1.8 + 32
    const iconImg = "http://openweathermap.org/img/w/" + weather[0].icon + ".png"
    
    return (
        <>
            <Section>
                <h2>{weekday}</h2>
                <img src={iconImg} alt="" />
                <div><span className='celcius-class'>{CelciusTemp.toFixed(2)}</span> <span className='farhenhite-class'>{FarhenhiteTemp.toFixed(2)}</span></div>
            </Section>
        </>
    )
}

export default DaysWeather
