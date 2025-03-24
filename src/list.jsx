import React, { useState } from "react";

const List = ({ names }) => {
  //  useState is used to append an element
  //   const [vaule, setValue] = useState(initialValue);
  const [activeName, setActiveName] = useState("");

  //   const check = activeName === "Bob" ? "active" : "inactive";

  //   console.log(activeName);

  const handleClickItem = (value) => {
    // console.log(value);
    setActiveName(value);
  };

  return (
    <ul>
      {names.map((item, index) => {
        return (
          <li
            key={index}
            className={activeName === item ? "list-item active" : "list-item"}
            onClick={() => handleClickItem(item)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
