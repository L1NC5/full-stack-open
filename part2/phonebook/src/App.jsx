import { useEffect, useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import personService from "./services/persons.js";

const App = () => {
  const [persons, setPersons] = useState();
  const [filterBy, setNewFilterBy] = useState("");
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });

  const handleFilterBy = ({ target: { value } }) => {
    setNewFilterBy(value);
  };

  const handleFormChange = ({ target: { name, value } }) => {
    setNewPerson((newPerson) => ({
      ...newPerson,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const alreadyPresent = persons.some((item) => item.name === newPerson.name);
    if (alreadyPresent) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }
    personService.createNew(newPerson).then((response) => {
      setPersons(persons.concat(response));
    });
  };

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filterBy={filterBy} handleFilterBy={handleFilterBy} />
      <h2>Add new contact</h2>
      <PersonForm
        newPerson={newPerson}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      {persons && <PersonList persons={persons} filterBy={filterBy} />}
    </div>
  );
};

export default App;
