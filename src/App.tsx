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

  const handleButtonClick = () => {
    console.log("click");
  };
  return (
    
    <div>
      {}
      <Alert>
        <h1>Pedro</h1>
      </Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button onClick={handleButtonClick}>Submit</Button>
      <Button onClick={handleButtonClick} color="danger">
        Cancel
      </Button>
    </div>
  );
};

export default App;
