const Filter = ({ filterBy, handleFilterBy }) => {
  return (
    <>
      <h2>Filter by name</h2>
      <input value={filterBy} onChange={handleFilterBy} />
    </>
  );
};

export default Filter;
