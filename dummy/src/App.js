import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [text, setText] = useState("");
  const [name, setName] = useState("Suyog");

  //Variation 1 -> Every Render
  // useEffect(() => {
  //   console.log("UI Rendering Done");
  // })

  //Variation 2-> First Render
  // useEffect(() => {
  //   console.log("UI Rendering Done");
  // }, []);

  //Variation 3-> whenever dependency changes
  // useEffect(() => {
  //   console.log("Change Text");
  // }, [name]);

  //Variation 4-> to handle unmounting of a componants
  useEffect(() => {
    console.log("Add Event Listener added");

    return () => {
      console.log("listener Removed")
    }

  }, [text]);

  function inputHandler(event) {
    console.log(text);
    setText(event.target.value);
  }


  return (
    <div className="App">
      <input type="text" onChange={inputHandler}></input>
    </div>
  );
}

export default App;
