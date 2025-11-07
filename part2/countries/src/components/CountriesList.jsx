import { useEffect, useState } from "react";
import Country from "./Country";

const CountriesList = ({ allCountries, countryFilter }) => {
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleCountrySelection = (country) => {
    setFilteredCountries([country]);
  };

  useEffect(() => {
    const currentMatches = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(countryFilter.toLowerCase()),
    );

    setFilteredCountries(currentMatches);
  }, [allCountries, countryFilter]);

  if (countryFilter) {
    if (filteredCountries.length > 10) {
      return <span> Too many matches, specify another filter</span>;
    }
    if (filteredCountries.length > 1) {
      return (
        <ul
          style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}
        >
          {filteredCountries.map((country) => (
            <li key={country.name.common}>
              {country.name.common}
              <button onClick={() => handleCountrySelection(country)}>
                Show details
              </button>
            </li>
          ))}
        </ul>
      );
    }
    if (filteredCountries.length === 1) {
      const country = filteredCountries[0];
      return <Country data={country} />;
    }
    if (filteredCountries.length === 0)
      return <span>No matching countries found, specify another filter</span>;
  }
};

export default CountriesList;
