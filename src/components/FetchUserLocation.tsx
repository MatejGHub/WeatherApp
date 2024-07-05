import { SlLocationPin } from "react-icons/sl";

interface FetchUserLocationProps {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
}

const FetchUserLocation = ({ setCityName }: FetchUserLocationProps) => {
  const sucessCallback = (position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6ab467e6149af4532a021d5e374b2ce2`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.name);
        // Why is setcityname not a function and not working? Fix it.
      });
  };

  const errorCallback = (error) => {
    console.error(error);
  };

  return (
    <>
      <SlLocationPin
        className="text-3xl text-white cursor-pointer transition ease-out hover:scale-125"
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            sucessCallback,
            errorCallback
          );
        }}
      />
    </>
  );
};

export default FetchUserLocation;
