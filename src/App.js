import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [text, setText] = useState([]);
  const [newText, setnewText] = useState("");
  const [count, setcount] = useState(0);

  const addelem = () => {
    if (newText !== "") {
      const newtext = [...text, { elem: newText, completed: false }];
      setText(newtext);
      setnewText("");
      setcount(count + 1);
    }
  };

  const handleonDelete = (index) => {
    const newtext = [...text];
    if (!newtext[index].completed) {
      setcount(count - 1);
    }
    newtext.splice(index, 1);
    setText(newtext);
  };

  const handleonComplete = (index) => {
    const newtext = [...text];
    newtext[index].completed = true;
    setText(newtext);
    count > 0 && setcount(count - 1);
  };

  return (
    <div className="outer-main">
      <div className="main-box">
        <div className="box">
          <div id="head">Pending Task ({count})</div>
          {text.map((elem, index) => (
            <div className="text" key={index}>
              {elem.completed ? (
                <p>
                  <s>{elem.elem}</s>
                </p>
              ) : (
                elem.elem
              )}
              <div className="btn">
                <button
                  type="button"
                  className="complete"
                  onClick={() => handleonComplete(index)}
                >
                  Complete
                </button>
                <button
                  type="button"
                  className="delete"
                  onClick={() => handleonDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <input
          type="text"
          value={newText}
          onChange={(e) => setnewText(e.target.value)}
        />
        <button className="add" onClick={addelem}>
          ADD
        </button>
      </div>
    </div>
  );
}
