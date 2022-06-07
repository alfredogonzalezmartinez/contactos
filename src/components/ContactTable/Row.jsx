import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";
import styles from "./Row.module.css";

const Row = ({ contact, handleContactStatusChange, handleContactDeletion }) => {
  const { name, surname, email, isConnected } = contact;

  const handleStatusChange = () => {
    handleContactStatusChange(contact);
  };

  const handleDeletion = () => {
    handleContactDeletion(contact);
  };

  return (
    <tr className={styles.Row}>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{isConnected ? "Conectado" : "Desconectado"}</td>
      <td>
        <div>
          <button onClick={handleStatusChange}>
            {isConnected ? "Desconectar" : "Conectar"}
          </button>
          <button className={styles.deleteButton} onClick={handleDeletion}>
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

Row.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  handleContactStatusChange: PropTypes.func.isRequired,
  handleContactDeletion: PropTypes.func.isRequired,
};

export default Row;
