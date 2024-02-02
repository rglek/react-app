import { MouseEvent } from "react";

const ListGroup = () => {
  let items = ["New York", "London", "Paris", "Tokio", "Sydney"];

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>Pedro</h1>
      {items.length === 0 && "No items found"}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
