import Weather from "./Weather";

const Country = ({ data }) => {
  return (
    <>
      <h1>{data.name.common}</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        <span
          style={{
            display: "flex",
            gap: "0.125rem",
          }}
        >
          <b>Capital:</b>
          {data.capital[0]}
        </span>
        <span
          style={{
            display: "flex",
            gap: "0.125rem",
          }}
        >
          <b>Area:</b>
          {`${data.area}km`}
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
        {Object.values(data.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={data.flags.png} alt={data.flags.alt} />
      <Weather city={data.capital[0]} coordinates={data.capitalInfo.latlng} />
    </>
  );
};

export default Country;
