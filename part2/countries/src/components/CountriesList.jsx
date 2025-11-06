import { useEffect, useState } from "react";

const CountriesList = ({ allCountries, countryFilter }) => {
  const [filteredCountries, setFilteredCountries] = useState([]);

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
            <li key={country.name.common}>{country.name.common}</li>
          ))}
        </ul>
      );
    }
    if (filteredCountries.length === 1) {
      const country = filteredCountries[0];
      return (
        <>
          <h1>{country.name.common}</h1>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
          >
            <span
              style={{
                display: "flex",
                gap: "0.125rem",
              }}
            >
              <b>Capital:</b>
              {country.capital.join(", ")}
            </span>
            <span
              style={{
                display: "flex",
                gap: "0.125rem",
              }}
            >
              <b>Area:</b>
              {`${country.area}km`}
            </span>
          </div>
          <h2>Languages</h2>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.125rem",
            }}
          >
            {Object.values(country.languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img src={country.flags.png} alt={country.flags.alt} />
        </>
      );
    }
    if (filteredCountries.length === 0)
      return <span>No matching countries found, specify another filter</span>;
  }
};

export default CountriesList;
