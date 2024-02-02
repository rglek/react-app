const ListGroup = () => {
  let items = ["New York", "London", "Paris", "Tokio", "Sydney"];
  //   items = [];
  //   const getMessage = () => {
  //     // if (items.length == 0) {
  //     //   return <p>No item Found</p>;
  //     // }
  //     items.length === 0 && 'No items found'
  //   };

  return (
    <>
      <h1>Pedro</h1>
      {items.length === 0 && "No items found"}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log("clicked", item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
