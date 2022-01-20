import { useState, useContext, useCallback } from "react";
import { KELKVIN } from "../../constants";
import { WeatherContext } from "../../context/WeatherContext";
import DaysWeather from "./Days-weather-display/DaysWeather";
import { Wrapper, TempratureWrapper, Span } from "./style";

const WeatherDisp = () => {
  const { state } = useContext(WeatherContext);
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
  var dateObj = new Date();
  const weekdayNum = dateObj.getDay();
  const weekday = daysArray[weekdayNum] ;

  const { data } = state;
  const { name, sys, weather, main, wind } = data;
  const { speed } = wind;
  const { country } = sys;
  const { temp, pressure, humidity } = main;
  const iconImg = "http://openweathermap.org/img/w/" + weather[0].icon + ".png";

  const CelciusTemp = temp - KELKVIN;
  const FarhenhiteTemp = CelciusTemp * 1.8 + 32;

  const handleCelTemp = useCallback(() => {
    setIsCelTemp(true);
  }, []);

  const handleFarTemp = useCallback(() => {
    setIsCelTemp(false);
  }, []);

  return (
    <>
      <Wrapper>
        <h1>
          {name}, {country}
        </h1>
        <h2>{weekday}</h2>
        <h3>{weather[0].main}</h3>
        <TempratureWrapper>
          <div>
            <img src={iconImg} alt="icon" />
          </div>
          <div>
            <h1>
              {isCelTemp ? CelciusTemp.toFixed(2) : FarhenhiteTemp.toFixed(2)}
            </h1>
          </div>
          <div>
            <h2>
              <Span
                className="is-celcius"
                isCelTemp={isCelTemp}
                onClick={handleCelTemp}
              >
                {" "}
                C{" "}
              </Span>
              |
              <Span
                className="is-farhenhite"
                isCelTemp={isCelTemp}
                onClick={handleFarTemp}
              >
                F
              </Span>
            </h2>
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
        <DaysWeather response={data} weekday={weekday} />
      </Wrapper>
    </>
  );
};

export default WeatherDisp;
