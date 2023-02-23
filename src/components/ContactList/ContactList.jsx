
import { Contact } from "./Contact/Contact";

// !!!!!!!!!!!!!! підписуємося на фільтр в сторі
import { useSelector } from "react-redux";
import { getFilter, getContacts } from "redux/selectors";



export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);


  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedValue = filter.toLowerCase();
    const filteredContactsArray = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue));
  
    return filteredContactsArray;
  }

  const filteredContacts = filterContacts();


  return <ul className="">
    {filteredContacts.length > 0 ? filteredContacts.map((contact =>
      <Contact key={contact.id} contact={contact}/>
    )) : <p> no matches ☹</p>}
  </ul>
}



