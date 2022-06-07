import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";
import Row from "./Row";

const ContactTable = ({
  contacts,
  handleContactStatusChange,
  handleContactDeletion,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="name">Nombre</th>
          <th className="surname">Apellidos</th>
          <th className="email">Correo electrónico</th>
          <th className="status">Estado</th>
          <th className="actions">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <Row
            key={contact.email}
            contact={contact}
            handleContactStatusChange={handleContactStatusChange}
            handleContactDeletion={handleContactDeletion}
          />
        ))}
      </tbody>
    </table>
  );
};

ContactTable.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.instanceOf(Contact)).isRequired,
  handleContactStatusChange: PropTypes.func.isRequired,
  handleContactDeletion: PropTypes.func.isRequired,
};

export default ContactTable;
