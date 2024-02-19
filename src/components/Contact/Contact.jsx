import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoPerson } from 'react-icons/io5';
import css from './Contact.module.css';

export const Contact = ({ val: { id, name, number }, onDelete }) => {
  return (
    <div className={css.contactBox}>
      <div><p className={css.contactBoxName}>
        <IoPerson /> {name}
      </p>
      <p className={css.contactBoxNumber}>
        <BsFillTelephoneFill /> {number}
      </p></div>
      <button type="button" className={css.contactBoxButton} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
