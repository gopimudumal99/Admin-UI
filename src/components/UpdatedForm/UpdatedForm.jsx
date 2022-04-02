import React, { useState, useEffect } from "react";

function UpdatedForm({ user }) {
    const { email, name, role } = user
    return (
      <div>
        <div>
          <form action="">
            <input name="name" type="text" value={name} />
            <input name="email" type="text" value={role} />
            <input name="role" type="text" value={email} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
}

export default UpdatedForm;
