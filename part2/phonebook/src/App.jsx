import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
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
    };
    setPersons(persons.concat(newContact));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleOnChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <span style={{ display: "block" }} key={person.name}>
          {person.name}
        </span>
      ))}
    </div>
  );
};

export default App;
