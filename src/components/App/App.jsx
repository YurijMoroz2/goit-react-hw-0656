import { useState, useEffect } from 'react';
import './App.css';
import { ContactForm } from '../ContactForm/ContactForm';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactList } from '../ContactList/ContactList';

function App() {
  let telefon = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const valueLocStorage = () => {
    const savedValue = window.localStorage.getItem('KEY_NUMBER');
    return savedValue !== null ? JSON.parse(savedValue) : telefon;
  };
  const [inputFilterValue, setInputFilterValue] = useState('');
  const [count, setCount] = useState(valueLocStorage);
  const filteredContacts = count.filter(user =>
    user.name.toLowerCase().includes(inputFilterValue.toLowerCase())
  );
  useEffect(() => {
    window.localStorage.setItem('KEY_NUMBER', JSON.stringify(count));
  }, [count]);
  const addContact = ({ id, name, number }) => {
    let formattedNumber = number.replace(/(\d{3})(\d{2})(\d{2})/, '$1-$2-$3');
    setCount(count => {
      return [...count, { id: id, name: name, number: formattedNumber }];
    });
  };
  const deleteContact = contactId => {
    setCount(count => {
      return count.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm onSubmitForm={addContact} />
      <SearchBox inputValue={inputFilterValue} onChange={setInputFilterValue} />
      <ContactList telefon={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
