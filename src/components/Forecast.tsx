interface forecastProps {
  id: number;
  day: string;
  weather: string;
  temperature: number;
}

interface dailyWeatherData {
  dailyWeatherData: forecastProps[];
  isCelsius: boolean;
}

const Forecast: React.FC<dailyWeatherData> = ({
  dailyWeatherData,
  isCelsius
}) => {
  const forecast = dailyWeatherData;

  return (
    <div>
      <div className="flex items-center justify-start mt-6 text-white">
        <p className="text-white font-medium uppercase">Daily forecast</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {forecast &&
          forecast.length > 0 &&
          forecast.map((day) => {
            const date = new Date(day.day);
            const dayOfWeekNumber = date.getDay();
            const dayOfWeek = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ][dayOfWeekNumber];
            const dayName = dayOfWeek;
            return (
              <div key={day.id}>
                <div className="flex flex-col items-center">
                  <p className="font-light text-sm">{dayName}</p>
                  <img
                    src={`http://openweathermap.org/img/wn/${day.weather}@2x.png`}
                    alt="Sunny"
                    className="w-12 my-1"
                  />
                  <p className="font-medium ">
                    {isCelsius
                      ? `${(day.temperature - 273.15).toFixed(0)}°C`
                      : `${(((day.temperature - 273.15) * 9) / 5 + 32).toFixed(
                          1
                        )}°F`}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

//The code worked fine then it just broke for some reason? Continue tommorow however you can...Forecast works until you reload...Then it breaks for some reason. Why?

export default Forecast;
