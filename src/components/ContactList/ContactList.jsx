import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ telefon, onDelete }) => {
  return (
    <ul className={css.contactBox}>
      {telefon.map(val => (
        <li key={val.id} className={css.contactBoxItem}>
          <Contact val={val} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
