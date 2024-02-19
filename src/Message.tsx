// Pascal Casing - Important to follow the convention of capitalizing the beginning of each letter.
function Message() {
  //TypeScript is interpreted in JSX (JavaScript XML)
  const name = "Luke";
  if (name) return <h1>Hello {name}!</h1>;
  return <h1>Hello world!</h1>;
}

export default Message;
