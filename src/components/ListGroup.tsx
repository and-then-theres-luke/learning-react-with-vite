import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   let selectedIndex = -1;
  const getMessage = items.length === 0 && <p>No Item Found</p>;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // When using useState, it returns TWO things:
  // arr[0] : variable with a value defined by the function argument
  //arr[1] : an updater function that will change that initial value
  return (
    <>
      <h1>{heading}</h1>
      {getMessage}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
