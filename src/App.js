import Forecast from "./Components/Forecast";
import Inputs from "./Components/Inputs";
import TemperatureAndDetails from "./Components/TemperatureAndDetails";
import TimeAndLocation from "./Components/TimeAndLocation";
import TopButtons from "./Components/TopButtons";
import getFormattedWeatherData, {
  getCurrentLocation,
} from "./Services/weatherService.service";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState(null);
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [clearInput, setClearInput] = useState(false);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };
  // fetch new data every time query, i.e. city changes or the units value changes
  useEffect(() => {
    let message = "";
    if (!query) {
      getCurrentLocation().then((res) => {
        setQuery({ lat: res.coords.latitude, lon: res.coords.longitude });
      });
    } else {
      message = query.q ? query.q : "current location";
      toast.info("Fetching weather for " + message);
    }
    getFormattedWeatherData({ ...query, units }).then(
      (data) => {
        toast.success("Fetched weather for " + message);
        setWeather(data);
      },
      (error) => {
        toast.error(
          "Error fetching weather for " + message + ". Pelase try again later."
        );
      }
    );
  }, [query, units]);

  return (
    <div
      className={`h-fit shadow-xl shadow-gray-400 
    mx-auto max-w-screen-md my-4 py-5 px-32 bg-gradient-to-b ${formatBackground()}`}
    >
      <TopButtons setQuery={setQuery} setClearInput={setClearInput} />
      <Inputs
        setQuery={setQuery}
        units={units}
        setUnits={setUnits}
        clearInput={clearInput}
        setClearInput={setClearInput}
      />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast items={weather.hourly} title="hourly forecast" />
          <Forecast items={weather.daily} title="daily forecast" />
        </>
      )}

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
