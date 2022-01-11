import React,{useReducer,useMemo} from "react";
import "./App.css";
import HomePage from "./Pages/home-page/HomePage";
import { GistReducer, initialState, WeatherContext } from './context/WeatherContext'
import WeatherDisp from "./Components/weatherDisp/WeatherDisp";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(GistReducer, initialState);
  const { tab } = state

  const displayScreenTabs = useMemo(() => {
    switch (tab) {
      case 1:
        return <WeatherDisp />
      default:
        return null
    }
  }, [tab]);

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      <HomePage />
      {displayScreenTabs}
    </WeatherContext.Provider>
  );
};

export default App;
