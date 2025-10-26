import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
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
      {persons.map((person) => (
        <div style={{display: "flex", gap: "0.5rem"}} key={person.name}>
          <span>
            {person.name}
          </span>
          <span>
            {person.number}
          </span>
        </div>
      ))}
    </div>
  );
};

export default App;
