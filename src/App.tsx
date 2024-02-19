import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  let items = ["New York", "Paris", "Tokyo", "Berlin", "San Diego"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleClickItem = () => {
    console.log(items);
  };
  const handleClickItemTwo = () => {
    return <p>You chose wisely.</p>;
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="List of Cities"
        onSelectItem={handleSelectItem}
      />
      <Button name="Click Me!" onClickMethod={handleClickItem} />
      <Button name="No, Click Me!" onClickMethod={handleClickItemTwo} />
    </div>
  );
}

export default App;
