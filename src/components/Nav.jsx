import { contacts } from "../data";
import Contact from "./Contact";

function Nav() {
  const contactList = contacts.map((contact) => (
    <Contact name={contact.name} icon={contact.icon} />
  ));
  return (
    <>
      <nav>
        <h2>Contacts</h2>
        {contactList}
      </nav>
    </>
  );
}

export default Nav;
