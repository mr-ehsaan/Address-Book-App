import React from "react";

import { nationalities } from "../constants/const";

function DropDown({ changeNat, nat }) {
  return (
    <div>
      <label>Select Nationality:</label>
      <select
        className="selection"
        onChange={(event) => changeNat(event.target.value)}
        defaultValue={nat}
      >
        {nationalities.map((li, index) => {
          return (
            <option className="Options" key={index} value={li}>
              {" "}
              {li}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default DropDown;
