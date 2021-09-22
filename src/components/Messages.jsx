import { messages } from "../data";
import Message from "./Message";

function Messages() {
  const messageList = messages.map((message) => (
    <Message content={message.content} />
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
