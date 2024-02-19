import { MouseEvent, useState } from "react";

interface ButtonProps {
  name: string;
  handleClick: (event: MouseEvent) => void;
}
const [hello, setHello] = useState([]);

function Button({ name, handleClick }: ButtonProps) {
  return <button onClick={handleClick}>{name}</button>;
}

export default Button;
