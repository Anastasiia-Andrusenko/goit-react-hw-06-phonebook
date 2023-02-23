// import store from "./store";

export const getContacts = store => store.contacts;

export const getFilter = store => store.filter;

// export const getFilteredContacts = ({ filter, contacts }) => {
//   if (!filter) {
//     return contacts;
//   };

//   const normalizedValue = filter.toLowerCase();
//   const filteredContactsArray = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedValue));
  
//   return filteredContactsArray;
// }