import { useEffect, useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import personService from "./services/persons.js";
import NotificationMessage from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState();
  const [filterBy, setNewFilterBy] = useState("");
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [notificationMessage, setNotificationMessage] = useState("");

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

    const matchingPerson = persons.find(
      (person) => person.name === newPerson.name,
    );
    if (matchingPerson) {
      if (
        window.confirm(
          `${newPerson.name} name already exists: do you want to update the phone number?`,
        )
      ) {
        const updatedPerson = { ...matchingPerson, ...newPerson };
        personService
          .update(matchingPerson.id, updatedPerson)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== updatedPerson.id ? person : updatedPerson,
              ),
            );
            setNotificationMessage({
              message: `${updatedPerson.name}'s number updated correctly`,
            });
            setTimeout(() => {
              setNotificationMessage("");
            }, 5000);
          });
      }
      return;
    }
    personService.create(newPerson).then((response) => {
      setPersons(persons.concat(response));
      setNotificationMessage({ message: `Added ${response.name}` });
      setTimeout(() => {
        setNotificationMessage("");
      }, 5000);
    });
  };

  const handleDelete = (person) => {
    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
      personService
        .remove(person.id)
        .then((response) => {
          setPersons((prevPersons) =>
            prevPersons.filter((prevPerson) => prevPerson.id !== response.id),
          );
        })
        .catch(() => {
          setNotificationMessage({
            message: `Information about ${person.name} has already been deleted`,
            variant: "error",
          });
          setPersons((prevPersons) =>
            prevPersons.filter((prevPerson) => prevPerson.id !== person.id),
          );
          setTimeout(() => {
            setNotificationMessage("");
          }, 5000);
        });
    }
  };

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>
      {notificationMessage && (
        <NotificationMessage
          message={notificationMessage.message}
          variant={notificationMessage.variant}
        />
      )}
      <Filter filterBy={filterBy} handleFilterBy={handleFilterBy} />
      <h2>Add new contact</h2>
      <PersonForm
        newPerson={newPerson}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      {persons && (
        <PersonList
          persons={persons}
          filterBy={filterBy}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default App;
