import PropTypes from 'prop-types';
import s from './Contacts.module.css';

export default function Contacts({ contacts, onDelete }) {
  console.log(contacts, ' contacts');
  return (
    contacts.length !== 0 && (
      <>
        <ul className={s.contList}>
          {contacts.map(({ name, tel, id }) => (
            <li className={s.contItem} key={name}>
              <p className={s.contInfo}>
                {name}: {tel}
              </p>
              <button
                type="button"
                className={s.contBtn}
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    )
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};