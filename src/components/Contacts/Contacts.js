import { useState } from 'react';
import ContactsView from './ContactsView';

function Contacts() {
  const [title] = useState('contacts.design');
  const [text] = useState('905-908, Abhijeet-1, Mithakhali Six Roads, Ahmedabad 380006, Gujarat, India');

  return (
    <ContactsView title={title} text={text} />
  );
}    
export default Contacts;
