interface TimeAndLocationProps {
  cityName: string;
  countryName: string;
}

//Get current time and date
const currentTimeAndDate = new Date();
const optionsDate = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
const optionsTime = { hour: "2-digit", minute: "2-digit", hour12: false };

const formattedDate = new Intl.DateTimeFormat("en-GB", optionsDate).format(
  currentTimeAndDate
);
const formattedTime = new Intl.DateTimeFormat("en-GB", optionsTime).format(
  currentTimeAndDate
);

const TimeAndLocation = ({ cityName, countryName }: TimeAndLocationProps) => {
  return (
    <div className="">
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-2xl font-extralight ">
          {formattedDate} | Local Time {formattedTime}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white font-bold text-2xl capitalize">
          {cityName},{countryName}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
