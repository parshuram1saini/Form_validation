import React from "react";
// section for inputfield ................//

function Inputfield() {
  return (
    <>
      <input
        className="inputfield"
        type="text"
        id="a"
        required
        onChange={(e) => console.log(e.target.value)}
      />
    </>
  );
}

export default Inputfield;
