import { useState, useContext } from 'react'
import { KELKVIN } from '../../constants'
import { WeatherContext } from '../../context/WeatherContext'
import { Wrapper, TempratureWrapper } from './style'


const WeatherDisp = () => {
    const { state } = useContext(WeatherContext)
    const [active, setActive] = useState<boolean>(true)
    const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var dateObj = new Date()
    const weekdayNum = dateObj.getDay()
    const weekday = daysArray[weekdayNum]

    const { data } = state
    const { name, sys, weather, main, wind } = data
    const { speed } = wind
    const { country } = sys
    const { temp, pressure, humidity } = main

    const CelciusTemp = temp - KELKVIN
    const FarhenhiteTemp = (CelciusTemp * 1.8) + 32

    const handleTemp = () => {
        setActive(!active)
    }

    console.log(data);

    return (
        <>
            <Wrapper>
                <h1>{name}, {country}</h1>
                <h2>{weekday}</h2>
                <h3>{weather[0].main}</h3>
                <TempratureWrapper>
                    <img src={'http://openweathermap.org/img/w/' + weather[0].icon + '.png'} alt="icon" />
                    <h1>{active ? CelciusTemp.toFixed(2) : FarhenhiteTemp.toFixed(2)}</h1>
                    <h2 onClick={handleTemp}>C | F</h2>
                    <h3>
                        Pressure : {pressure + ' ' + 'hPa'}
                        <br></br>
                        Humidity : {humidity + ' ' + '%'}
                        <br></br>
                        Speed : {speed + ' ' + 'm/s'}
                    </h3>
                </TempratureWrapper>


            </Wrapper>
        </>
    )
}

export default WeatherDisp
