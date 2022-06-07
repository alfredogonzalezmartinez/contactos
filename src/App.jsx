import { useState } from "react";
import ContactTable from "./components/ContactTable";
import ContactAdditionForm from "./components/ContactAdditionForm";
import { Contact } from "./models/contact.class";

const DEFAULT_CONTACT = new Contact("Dulce", "Bilbao", "dulce.bilbao@mail.com");

function App() {
  const [contacts, setContacts] = useState([DEFAULT_CONTACT]);

  const handleContactAddition = (newContact) => {
    if (newContact.name === "") throw new Error("Nombre es requerido");
    if (newContact.email === "") throw new Error("Email es requerido");
    if (contacts.some((contact) => contact.email === newContact.email))
      throw new Error(
        `Ya existe un contacto con el email: ${newContact.email}`
      );
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleContactStatusChange = (contact) => {
    setContacts((prevContacts) =>
      prevContacts.map((prevContact) => {
        if (prevContact.email === contact.email) {
          const { name, surname, email, isConnected } = prevContact;
          const updatedContact = new Contact(
            name,
            surname,
            email,
            !isConnected
          );
          return updatedContact;
        }
        return prevContact;
      })
    );
  };

  const handleContactDeletion = (contactToDelete) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact !== contactToDelete)
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Contactos</h1>
      </header>
      <main>
        <ContactTable
          contacts={contacts}
          handleContactStatusChange={handleContactStatusChange}
          handleContactDeletion={handleContactDeletion}
        />
        <ContactAdditionForm handleContactAddition={handleContactAddition} />
      </main>
    </div>
  );
}

export default App;
