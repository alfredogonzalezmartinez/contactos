import PropTypes from "prop-types";
import { useEffect, useId, useState } from "react";
import { Contact } from "../../models/contact.class";
import Input from "../Input";
import styles from "./ContactAdditionForm.module.css";

const ContactAdditionForm = ({ handleContactAddition }) => {
  const id = useId();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleNameInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameInputChange = (event) => {
    setSurname(event.target.value);
  };

  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = new Contact(name, surname, email);
    try {
      handleContactAddition(newContact);
      setName("");
      setSurname("");
      setEmail("");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (error) setTimeout(() => setError(null), 3000);
  }, [error]);

  return (
    <form className={styles.ContactAdditionForm}>
      <h2>Agregar nuevo contacto</h2>
      {error && <p className={styles.Error}>{error}</p>}
      <Input
        id={`${id}-name`}
        label="Nombre"
        type="text"
        value={name}
        handleChange={handleNameInputChange}
      />
      <Input
        id={`${id}-surname`}
        label="Apellido"
        type="text"
        value={surname}
        handleChange={handleSurnameInputChange}
      />
      <Input
        id={`${id}-email`}
        label="Email"
        type="email"
        value={email}
        handleChange={handleEmailInputChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Agregar
      </button>
    </form>
  );
};

ContactAdditionForm.propTypes = {
  handleContactAddition: PropTypes.func.isRequired,
};

export default ContactAdditionForm;
