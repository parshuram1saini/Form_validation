import React from "react";
import Formformat from "./view/form";
import Formconstant from "./constant/constant";
import { useState } from "react";
import "./boxmodal.css";
import Header from "./header";

function Boxmodal() {
  const [openmodal, setOpenmodal] = useState(false);
  const [modalheader, setModalheader] = useState(true);
  // console.log(openmodal);

  return (
    <>
      {modalheader && <Header />}
      <button
        id="purple"
        className="ui inverted purple button"
        onClick={() => {
          return setOpenmodal(true), setModalheader(false);
        }}
      >
        {Formconstant.modal}
      </button>
      {openmodal && (
        <Formformat
          setOpenmodal={setOpenmodal}
          setModalheader={setModalheader}
        />
      )}
    </>
  );
}

export default Boxmodal;
