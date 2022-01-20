import { FC, useMemo } from 'react'
import { CelciusTemp, FarhenhiteTemp } from '../../../utils/WeatherDispUtils'
import { Section } from './style'

interface PropType {
    response: any;
    weekday: string
}

const DaysWeather: FC<PropType> = (props) => {
    const { response, weekday } = props
    const { weather, main } = response
    const { temp } = main

    const CelTemperature = useMemo(() => CelciusTemp(temp), [temp])
    const FarTemperature = useMemo(() => FarhenhiteTemp(temp), [temp])
    const iconImg = "http://openweathermap.org/img/w/" + weather[0].icon + ".png"

    return (
        <Section>
            <h2>{weekday}</h2>
            <img src={iconImg} alt="icon" />
            <div>
                <h3 className='celcius-class'>{CelTemperature}</h3>
                <h3 className='farhenhite-class'>{FarTemperature}</h3>
            </div>
        </Section>
    )
}

export default DaysWeather
