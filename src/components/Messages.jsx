import { messages, contacts } from "../data";
import Message from "./Message";

function Messages() {
  const messageList = messages.map((message) => (
    <Message
      key={message.id}
      name={message.name}
      type={message.type}
      content={message.content}
    />
  ));
  return (
    <>
      <section className="messages">
        <ul>{messageList}</ul>
      </section>
    </>
  );
}
export default Messages;
