import { CiSearch } from "react-icons/ci";
import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri";
import { useState } from "react";
import FetchUserLocation from "./FetchUserLocation";

interface InputsProps {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
  setIsCelsius: React.Dispatch<React.SetStateAction<boolean>>;
}

const Inputs = ({ setCityName, setIsCelsius }: InputsProps) => {
  const [saveCityName, setSaveCityName] = useState("");

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCityName(saveCityName);
          }}
        >
          <input
            type="text"
            className="text-xl font-light p-2 focus:outline-none w-full shadow-xl capitalize placeholder:lowercase"
            placeholder="Search..."
            onChange={(e) => {
              setSaveCityName(e.target.value);
            }}
          />
        </form>
        <CiSearch
          onClick={() => {
            setCityName(saveCityName);
          }}
          className="text-3xl text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <FetchUserLocation />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button className="text-white text-xl cursor-pointer" name="metric">
          <RiCelsiusFill
            className="text-xl text-white"
            onClick={() => setIsCelsius(true)}
          />
        </button>

        <p className="mx-2 text-white flex mb-1">|</p>
        <button className="text-white text-xl cursor-pointer" name="imperial">
          <RiFahrenheitFill
            className="text-xl text-white"
            onClick={() => setIsCelsius(false)}
          />
        </button>
      </div>
    </div>
  );
};

export default Inputs;
