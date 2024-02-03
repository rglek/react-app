import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
let items = ["New York", "London", "Paris", "Tokio", "Sydney"];

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleSwapClick = () => {
    setAlertVisibility(!alertVisible);
    console.log("alertVisible:", alertVisible);
  };

  const handCancelClick = () => {
    console.log("click");
  };
  return (
    <div>
      {}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <strong>Pedro</strong>
        </Alert>
      )}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button onClick={() => setAlertVisibility(true)}>Show Alert</Button>
      <Button onClick={handleSwapClick} color="secondary">
        Swap Alert
      </Button>
      <Button onClick={() => setAlertVisibility(false)} color="danger">
        Hide A
      </Button>
    </div>
  );
};

export default App;
