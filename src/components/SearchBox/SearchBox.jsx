import { useId } from 'react';
import css from './SearchBox.module.css'

export const SearchBox = ({ inputValue, onChange }) => {
  const filterId = useId();
  const handleChange = evt => {
    onChange(evt.target.value);
  };
  return (
    <div className={css.searchBox}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        value={inputValue}
        name="userfilter"
        id={filterId}
        onChange={handleChange}
      />
      <p>{inputValue}</p>
    </div>
  );
};
