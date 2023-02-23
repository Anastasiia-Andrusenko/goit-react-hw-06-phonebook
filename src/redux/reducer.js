
import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from "./constants";


const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContacts = [...store.contacts, action.payload];
      return { ...store, contacts: newContacts };

    
    case DELETE_CONTACT:
      const updateContact = store.contacts.filter(contact => contact.id !== action.payload);
      return { ...store, contacts: updateContact };
    
    case SET_FILTER:
      return { ...store, filter: action.payload };
    
    default:
      return store;
  }
};


const initialStore = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
  filter: ""
};

export default reducer;