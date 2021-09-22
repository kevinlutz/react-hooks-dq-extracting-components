function Message({ content, name }) {
  return (
    <>
      <li className="message sent">
        <div className="icon">{name[0]}</div>
        <span className="content">{content}</span>
      </li>
    </>
  );
}

export default Message;
