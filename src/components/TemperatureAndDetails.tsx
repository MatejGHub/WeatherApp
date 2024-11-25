import {
  FaArrowUp,
  FaArrowDown,
  FaTemperatureHigh,
  FaWind,
  FaSun
} from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import { TbSunset2 } from "react-icons/tb";

interface TemperatureAndDetailsProps {
  weatherData: {
    main: string;
    feelsLike: number;
    humidity: number;
    wind: number;
    sunrise: number;
    sunset: number;
    highest: number;
    lowest: number;
    temperature: number;
    icon: string;
  };
  isCelsius: boolean;
}

const TemperatureAndDetails = ({
  weatherData,
  isCelsius
}: TemperatureAndDetailsProps) => {
  const sunriseDate = new Date(weatherData.sunrise * 1000);
  const sunriseTime = sunriseDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
  const sunsetDate = new Date(weatherData.sunset * 1000);
  const sunsetTime = sunsetDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p className="capitalize">{weatherData.main}</p>
      </div>
      <div className="flex flex-row items-center justify-between py-3 text-white">
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt="Sunny"
          className="w-20"
        />
        <p className="flex flex-col space-y-2 text-5xl">
          {isCelsius
            ? `${(weatherData.temperature - 273.15).toFixed(0)}°C`
            : `${(((weatherData.temperature - 273.15) * 9) / 5 + 32).toFixed(
                1
              )}°F`}
        </p>
        <div className="flex flex-col space-y-2 font-light text-sm items-center justify-center">
          <div className="flex flex-row">
            <FaTemperatureHigh className="text-xl mr-1" />
            <p>Feels like: </p>
            <span className="font-medium ml-1">
              {isCelsius
                ? `${(weatherData.temperature - 273.15).toFixed(0)}°C`
                : `${(
                    ((weatherData.temperature - 273.15) * 9) / 5 +
                    32
                  ).toFixed(1)}°F`}
            </span>
          </div>
          <div className="flex flex-row">
            <GiWaterDrop className="text-xl mr-1" />
            <p>Humidity: </p>
            <span className="font-medium ml-1">{weatherData.humidity}%</span>
          </div>
          <div className="flex flex-row">
            <FaWind className="text-xl mr-1" />
            <p>Wind </p>
            <span className="font-medium ml-1">{weatherData.wind} km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row text-white justify-center text-sm mt-5">
        <div className="flex flex-row">
          <FaSun className="text-xl mr-1" />
          <p>Rise: </p>
          <span className="font-medium ml-1 uppercase flex-nowrap text-nowrap">
            {sunriseTime}
          </span>
        </div>
        <p className="mx-3">|</p>
        <div className="flex flex-row">
          <TbSunset2 className="text-xl mr-1" />
          <p>Set: </p>
          <span className="font-medium ml-1 uppercase text-nowrap">
            {sunsetTime}
          </span>
        </div>
        <p className="mx-3">|</p>
        <div className="flex flex-row">
          <FaArrowUp className="text-xl mr-1" />
          <p>High: </p>
          <span className="font-medium ml-1 uppercase">
            {isCelsius
              ? `${(weatherData.temperature - 273.15).toFixed(0)}°C`
              : `${(((weatherData.temperature - 273.15) * 9) / 5 + 32).toFixed(
                  1
                )}°F`}
          </span>
        </div>
        <p className="mx-3">|</p>
        <div className="flex flex-row">
          <FaArrowDown className="text-xl mr-1" />
          <p>Low: </p>
          <span className="font-medium ml-1 uppercase">
            {isCelsius
              ? `${(weatherData.temperature - 273.15).toFixed(0)}°C`
              : `${(((weatherData.temperature - 273.15) * 9) / 5 + 32).toFixed(
                  1
                )}°F`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
