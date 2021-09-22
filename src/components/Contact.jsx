function Contact({ name, icon }) {
  return (
    <>
      <li className="contact">
        <div className="icon">{icon}</div>
        {name}
      </li>
    </>
  );
}
export default Contact;
