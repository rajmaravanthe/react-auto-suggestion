import { useState } from "react";
import "./App.css";
const searchedData = [
  "rajesh",
  "santhosh",
  "mahesh",
  "girish",
  "anish",
  "ravish",
  "vinish",
];

function App() {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const manipulateSuggestions = (event) => {
    setValue(event.target.value);
    setSuggestions(
      searchedData.map((suggestion, i) => {
        if (suggestion.indexOf(event.target.value) > -1) {
          return (
            <li
              key={i}
              onClick={(event) => {
                setValue(suggestion);
              }}
            >
              {suggestion}
            </li>
          );
        }
      })
    );
  };

  return (
    <div className='container'>
      <input
        type='text'
        value={value}
        onChange={(event) => manipulateSuggestions(event)}
      />
      <div>
        <ul>{suggestions}</ul>
      </div>
    </div>
  );
}

export default App;
