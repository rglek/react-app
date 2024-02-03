import { MouseEvent, useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({items, heading, onSelectItem}: Props) => {
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  const [selectedIndex, setSelectedInex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && "No items found"}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedInex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
