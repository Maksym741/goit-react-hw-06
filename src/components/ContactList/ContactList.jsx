import React from 'react';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts }) {
  return (
    <div>
      <ul className={css.listItem}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.contactItem}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
