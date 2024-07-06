import { useEffect, useState } from "react";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import "./index.css";

interface DailyWeatherDataProps {
  day: string;
  weather: string;
  temperature: number;
}

function App() {
  const [cityName, setCityName] = useState("Ljubljana");
  const [countryName, setCountryName] = useState("SL");
  const [weatherData, setWeatherData] = useState({
    main: "",
    feelsLike: 0,
    humidity: 0,
    wind: 0,
    sunrise: 0,
    sunset: 0,
    highest: 0,
    lowest: 0,
    temperature: 0,
    icon: ""
  });
  const [dailyWeatherData, setDailyWeatherData] = useState<
    DailyWeatherDataProps[]
  >({
    day: "",
    weather: "",
    temperature: 0
  });
  const [isCelsius, setIsCelsius] = useState(true);

  // Fetch weather data
  useEffect(() => {
    const apiKey = "6ab467e6149af4532a021d5e374b2ce2";
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCountryName(data.city.country);
        setWeatherData({
          main: data.list[0].weather[0].main,
          feelsLike: data.list[0].main.feels_like,
          humidity: data.list[0].main.humidity,
          wind: data.list[0].wind.speed,
          sunrise: data.city.sunrise,
          sunset: data.city.sunset,
          highest: data.list[0].main.temp_max,
          lowest: data.list[0].main.temp_min,
          temperature: data.list[0].main.temp,
          icon: data.list[0].weather[0].icon
        });
        setDailyWeatherData([
          {
            day: data.list[0].dt_txt,
            weather: data.list[0].weather[0].icon,
            temperature: data.list[0].main.temp
          },
          {
            day: data.list[8].dt_txt,
            weather: data.list[8].weather[0].icon,
            temperature: data.list[8].main.temp
          },
          {
            day: data.list[16].dt_txt,
            weather: data.list[16].weather[0].icon,
            temperature: data.list[16].main.temp
          },
          {
            day: data.list[24].dt_txt,
            weather: data.list[24].weather[0].icon,
            temperature: data.list[24].main.temp
          },
          {
            day: data.list[32].dt_txt,
            weather: data.list[32].weather[0].icon,
            temperature: data.list[32].main.temp
          }
        ]);
      })
      .catch(() => {
        setCityName("No");
        setCountryName(" the city does not exist");
      });
  }, [cityName]);

  return (
    <>
      <div className="mx-auto max-w-screen-md my-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButtons setCityName={setCityName} />
        <Inputs setCityName={setCityName} setIsCelsius={setIsCelsius} />
        <TimeAndLocation cityName={cityName} countryName={countryName} />
        <TemperatureAndDetails
          weatherData={weatherData}
          isCelsius={isCelsius}
        />
        <Forecast dailyWeatherData={dailyWeatherData} isCelsius={isCelsius} />
      </div>
    </>
  );
}

export default App;
//Also the location icon

//Installed React-Icons
