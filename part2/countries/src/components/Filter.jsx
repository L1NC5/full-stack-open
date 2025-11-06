const Filter = ({ label, filter, handleFilter }) => {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      {label}
      <input value={filter} onChange={handleFilter} />
    </label>
  );
};

export default Filter;
