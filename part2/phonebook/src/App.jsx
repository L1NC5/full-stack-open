import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [filterBy, setNewFilterBy] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleFilterBy = (event) => {
    setNewFilterBy(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const alreadyPresent = persons.some((item) => item.name === newName);
    if (alreadyPresent) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newContact = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(newContact));
  };

  const filteredPersons =
    filterBy.trim().length > 0
      ? persons.filter((person) =>
          person.name.toLowerCase().includes(filterBy.toLowerCase()),
        )
      : persons;

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Filter by name</h2>
      <input value={filterBy} onChange={handleFilterBy} />
      <form onSubmit={handleSubmit}>
        <h2>Add new contact</h2>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((filteredPersons) => (
        <div style={{ display: "flex", gap: "0.5rem" }} key={filteredPersons.name}>
          <span>{filteredPersons.name}</span>
          <span>{filteredPersons.number}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
