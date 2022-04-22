import React from "react";
import Formconstant from "../constant/constant";

///section of YES radio button ...........
function Yesradiobutton() {
  return (
    <>
      <input
        className="radiobutton"
        type="radio"
        name="radio1"
        id="c"
        required
        onChange={(e) => console.log(e.target.value)}
      ></input>
      <span htmlFor="c">{Formconstant.yes}</span>
    </>
  );
}
///section of NO radio button ...........
function Noradiobutton() {
  return (
    <>
      <input
        className="radiobutton"
        type="radio"
        name="radio1"
        id="d"
        required
        onChange={(e) => console.log(e.target.value)}
      />
      <span htmlFor="d">{Formconstant.no}</span>
    </>
  );
}

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

export { Yesradiobutton, Noradiobutton, Inputfield };
