import React, { useState } from "react";
// import { Fragment } from "react";
import List from "./list";
import Input from "./Input";
import Buttonb from "./Buttonb";

function App() {
  // method of inputing multiple elements in a element

  // method 1 empty tag
  //   return (
  //     <>
  //       <div>
  //         <h1> Dive Africa Reaxt App</h1>
  //       </div>
  //     </>
  //   );
  // }

  // method 2 using of div
  //   return (
  //       <div>
  //         <h1> Dive Africa Reaxt App</h1>
  //       </div>

  //   );
  // }

  // method 3 using of fragment (it uses an headed tag, as used on thye file)

  //   useState for list to append any new element added to the list for it to populate the input item

  // event.target.value is used to catch whatever data that is inputted by a user

  const [value, setValue] = useState("");

  const [names, setNames] = useState([]);

  // use to append an element to the button
  const handleAddValue = () => {
    setNames([...names, value]);
    setValue(" ");
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form className="input-container">
        <Input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Enter"
        />

        <Buttonb onClick={handleAddValue} />
      </form>
      <div>
        <h3 className="task">TODAY'S TASK</h3>
        <List names={names} />
      </div>
    </div>
  );
}

export default App;
