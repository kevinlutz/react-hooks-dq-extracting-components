import React from "react";
import Nav from "./Nav";
import Form from "./Form";
import { messages, contacts } from "../data";
import Messages from "./Messages";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <h2>Messages</h2>
        <Messages />
        <Form />
      </main>
    </div>
  );
}

export default App;
