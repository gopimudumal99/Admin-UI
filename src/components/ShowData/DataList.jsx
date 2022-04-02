import React, { useState } from "react";


function DataList({ user, deleteUser, checkBoxhandle, checkBox, updateUser }) {
  return (
    <tr className="tableRow">
      <td>
        <input
          checked={checkBox ? (user.checked ? true : false) : null}
          onChange={(e) => checkBoxhandle(e, user.id)}
          type="checkbox"
        />
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <button onClick={() => updateUser(user)} className="button">
          update
        </button>{" "}
        <button onClick={() => deleteUser(user.id)} className="button">
          delete
        </button>
      </td>
    </tr>
  );
}

export default DataList;
