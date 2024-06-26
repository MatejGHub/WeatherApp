import { CiSearch } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri";

const Inputs = () => {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          className="text-xl font-light p-2 focus:outline-none w-full shadow-xl capitalize placeholder:lowercase"
          placeholder="Search..."
        />
        <CiSearch className="text-3xl text-white cursor-pointer transition ease-out hover:scale-125" />
        <SlLocationPin className="text-3xl text-white cursor-pointer transition ease-out hover:scale-125" />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button className="text-white text-xl cursor-pointer" name="metric">
          <RiCelsiusFill className="text-xl text-white" />
        </button>

        <p className="mx-2 text-white flex mb-1">|</p>
        <button className="text-white text-xl cursor-pointer" name="imperial">
          <RiFahrenheitFill className="text-xl text-white" />
        </button>
      </div>
    </div>
  );
};

export default Inputs;
