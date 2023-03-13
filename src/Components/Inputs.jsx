import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentLocation } from '../Services/weatherService.service';

const Inputs = ({ units, setQuery, setUnits, clearInput, setClearInput }) => {

  const [city, setCity] = useState("");

  useEffect(() => {
    if (clearInput) {
      setCity(" ");
    }
  }, [clearInput]);

  const handleSearchClick = () => {
    setClearInput(false)
    if (city !== '') setQuery({ q: city });
  }
  const handleLocationClick = () => {
    toast.info("Getting your location...");
    getCurrentLocation().then(res => {
      const { latitude, longitude } = res.coords;
      setQuery({ lat: latitude, lon: longitude });
      toast.success("Got your location!");
    })
  }
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  }


  return (
    <div className="flex justify-center my-6">
      <div className="flex w-3/4 items-center justify-center space-x-4">
        <input
          type="flex justify-center my-6"
          placeholder="search for city..."
          className="w-full text-xl font-light 
                    p-2 shadow-xl focus:outline-none 
                    capitalize"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
        />
        <UilSearch
          size={25}
          onClick={handleSearchClick}
          className="text-white cursor-pointer transition
           ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          onClick={handleLocationClick}
          className="text-white cursor-pointer transition
           ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button onClick={handleUnitsChange} name="metric" className="text-xl text-white font-white transition ease-out hover:scale-125">
          &deg;C
        </button>
        <p className="text-white text-xl mx-1">|</p>
        <button onClick={handleUnitsChange} name="imperial" className="text-xl text-white font-white transition ease-out hover:scale-125">
          &deg;F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
