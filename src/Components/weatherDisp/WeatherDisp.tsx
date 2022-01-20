import { useState, useContext, useCallback, FC, useMemo } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { CelciusTemp, FarhenhiteTemp } from "../../utils/WeatherDispUtils";
import DaysWeather from "./Days-weather-display/DaysWeather";
import { Wrapper, TempratureWrapper, Span, Section } from "./style";


const WeatherDisp: FC = () => {
    const { state: { data: { name, sys: { country }, weather, main: { temp, pressure, humidity }, wind: { speed } }, data } } = useContext(WeatherContext);
    const [isCelTemp, setIsCelTemp] = useState(true);
    const daysArray = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const dateObj = new Date();
    const weekdayNum = dateObj.getDay();
    const weekday = daysArray[weekdayNum];
    const iconImg = "http://openweathermap.org/img/w/" + weather[0].icon + ".png";

    const CelTemperature = useMemo(() => CelciusTemp(temp), [temp])
    const FarTemperature = useMemo(() => FarhenhiteTemp(temp), [temp])

    const handleCelTemp = useCallback(() => {
        setIsCelTemp(true);
    }, [setIsCelTemp]);

    const handleFarTemp = useCallback(() => {
        setIsCelTemp(false);
    }, [setIsCelTemp]);

    return (
        <>
            <Wrapper>
                <h1>
                    {name}, {country}
                </h1>
                <h2>{weekday}</h2>
                <h3>{weather[0].main}</h3>
            </Wrapper>
            <TempratureWrapper>
                <div>
                    <img src={iconImg} alt="icon" />
                </div>
                <div>
                    <h1>
                        {isCelTemp ? CelTemperature : FarTemperature}
                        <Span
                            className="is-celcius"
                            isCelTemp={isCelTemp}
                            onClick={handleCelTemp}
                        >
                            {" "}
                            C{" "}
                        </Span>
                        <span style={{ marginBottom: '50px' }}>|</span>
                        <Span
                            className="is-farhenhite"
                            isCelTemp={isCelTemp}
                            onClick={handleFarTemp}
                        >
                            F
                        </Span>
                    </h1>
                </div>
                <div>

                </div>
                <div>
                    <h3>
                        Pressure : {pressure + "hPa"}
                        <br></br>
                        Humidity : {humidity + "%"}
                        <br></br>
                        Speed : {speed + "m/s"}
                    </h3>
                </div>
            </TempratureWrapper>
            <Section>
                {daysArray.slice(3).map(day => <DaysWeather response={data} weekday={weekday} />)}
            </Section>
        </>
    );
};

export default WeatherDisp;
