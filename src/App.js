import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  //const items = ["item1", "item2", "item3", "item4", "item5"];
  const [items, setItems] = useState([
    "item1", 
    "item2", 
    "item3",
    "item4",
    "item5",]);

  

  const [value, setValue] = useState("");
  function onValueChange(e){
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function onAdd(){
    console.log(value);

    const newItems = [...items,  value];

    setItems(newItems);
    setValue("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <input type="text" placeholder="Enter todo item" 
        value={value}
        onChange={onValueChange}
        />
        <button onClick={onAdd}>Add</button>

        <ol>
          {items.map((item, i) => (
            <li
            key={i}
              style={{ 
                color: "green",
             }}>
              {item}</li>
          ))}
        </ol>
      </header>
    </div>
  );
}

export default App;
