import React, { useState } from "react";

function DataList({ user, deleteUser }) {
  const [text, setText] = useState([]);
  const arr = [];

  const checkBoxhandle = (e, userId) => {
    setText([...text, userId]);
    console.log(text);
  };

    const updateUser = (user) => {
      
    console.log(user);
  };
  return (
    <tr className="tableRow">
      <td>
        <input onChange={(e) => checkBoxhandle(e, user.id)} type="checkbox" />
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <button onClick={() => updateUser(user)} className="button">
          update
        </button>{" "}
        <button onClick={()=>deleteUser(user)} className="button">
          delete
        </button>
      </td>
    </tr>
  );
}

export default DataList;
