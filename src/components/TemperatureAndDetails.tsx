import {
  FaArrowUp,
  FaArrowDown,
  FaTemperatureHigh,
  FaWind,
  FaSun,
  FaCloudSun
} from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";

const TemperatureAndDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Clear</p>
      </div>
      <div className="flex flex-row items-center justify-between py-3 text-white">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="Sunny"
          className="w-20"
        />
        <p className="flex flex-col space-y-2 text-5xl">34°C</p>
        <div className="flex flex-col space-y-2 font-light text-sm items-center justify-center">
          <div className="flex flex-row">
            <FaTemperatureHigh className="text-xl mr-1" />
            <p>Feels like: </p>
            <span className="font-medium ml-1">32°C</span>
          </div>
          <div className="flex flex-row">
            <GiWaterDrop className="text-xl mr-1" />
            <p>Humidity: </p>
            <span className="font-medium ml-1">43%</span>
          </div>
          <div className="flex flex-row">
            <FaWind className="text-xl mr-1" />
            <p>Wind </p>
            <span className="font-medium ml-1">3 km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
