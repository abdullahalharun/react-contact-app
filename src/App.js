import React from 'react';
import './App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactCard from "./components/ContactCard";
import ContactList from "./components/ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Harun",
      email: "harun@gmail.com"
    },
    {
      id: "2",
      name: "Mamun",
      email: "mamun@gmail.com"
    },
    {
      id: "3",
      name: "Adiba",
      email: "adiba@gmail.com"
    },
  ]

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
