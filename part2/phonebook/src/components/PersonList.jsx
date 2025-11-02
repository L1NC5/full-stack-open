const PersonList = ({ persons, filterBy, handleDelete }) => {
  const filteredPersons =
    filterBy.trim().length > 0
      ? persons.filter((person) =>
          person.name.toLowerCase().includes(filterBy.toLowerCase()),
        )
      : persons;

  return filteredPersons.map((person) => (
    <div style={{ display: "flex", gap: "0.5rem" }} key={person.name}>
      <span>{person.name}</span>
      <span>{person.number}</span>
      <button name="delete" onClick={() => handleDelete(person)}>
        Delete
      </button>
    </div>
  ));
};

export default PersonList;
