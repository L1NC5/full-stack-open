import { useEffect, useState } from "react";

import getAllCountries from "./services/countries.js";
import Filter from "./components/Filter";
import CountriesList from "./components/CountriesList.jsx";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [countryFilter, setCountryFilter] = useState("");
  const handleCountryFilter = ({ target: { value } }) => {
    setCountryFilter(value);
  };

  useEffect(() => {
    getAllCountries().then((response) => {
      setAllCountries(response);
    });
  }, []);

  return (
    <div>
      <Filter
        label="Find countries"
        filter={countryFilter}
        handleFilter={handleCountryFilter}
      />
      <CountriesList
        allCountries={allCountries}
        countryFilter={countryFilter}
      />
    </div>
  );
};

export default App;
