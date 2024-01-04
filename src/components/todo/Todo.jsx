import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [isEditItem, setIsEditItem] = useState(null);

  const itemAdded = () => {
    if (!input) {
      alert("kuch likho bhai");
    } else if (input && isEditItem) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: input };
          }
          return elem;
        })
      );
    } else {
      const allInputData = { id: new Date().getTime().toString(), name: input };
      setItems([...items, allInputData]);
      setInput("");
    }
  };

  const remove = (id) => {
    let update = items.filter((elem) => {
      return id !== elem.id;
    });
    setItems(update);
  };
  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    setInput(newEditItem.name);
    setIsEditItem(id);
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={itemAdded}>ADD</button>
      {items.map((elem) => (
        <>
          <h1 key={elem.id}>{elem.name}</h1>
          <button onClick={() => remove(elem.id)}>remove</button>
          <button onClick={() => editItem(elem.id)}>edit</button>
        </>
      ))}
    </div>
  );
};

export default Todo;
