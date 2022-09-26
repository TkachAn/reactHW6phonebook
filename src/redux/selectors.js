export const getContacts = state =>
  state.contactsReducer.items.filter(contact =>
    contact.name.toLowerCase().includes(state.contactsReducer.filter)
  );
