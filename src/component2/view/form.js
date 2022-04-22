import React from "react";
import Formconstant from "../constant/constant";
import "./form.css";
import {
  Inputfield,
  Yesradiobutton,
  Noradiobutton,
} from "../radiobutton/radiobutton";

function Formformat({ setOpenmodal, setModalheader }) {
  return (
    <>
      <form
        className="formset"
        onSubmit={() => {
          return setOpenmodal(false), setModalheader(true);
        }}
      >
        <div id="form">
          <button
            className="x"
            onClick={() => {
              return setOpenmodal(false), setModalheader(true);
            }}
          >
            {Formconstant.hidemodal}
          </button>
          <h1> {Formconstant.formheader}</h1>
          <div className="ui form">
            <div className="inline fields">
              <div className="eight wide field">
                <label htmlFor="a">
                  {Formconstant.formtitle}
                  <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              {/* <input
                className="inputfield"
                type="text"
                id="a"
                required
                onChange={(e) => console.log(e.target.value)}
              /> */}
              <Inputfield />
            </div>
            <div className="inline fields">
              <div className="eight wide field">
                <label htmlFor="b">
                  {Formconstant.code} <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <Inputfield />
            </div>
            <div className="inline fields">
              <div className="eight wide field">
                <label htmlFor="c">
                  {Formconstant.enable}
                  <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <Yesradiobutton />
              <Noradiobutton />
            </div>
            <div className="inline fields">
              <div className="eight wide field">
                <label htmlFor="c">
                  {Formconstant.filter}
                  <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <Yesradiobutton />
              <Noradiobutton />
            </div>
            <div className="inline fields">
              <div className="eight wide field">
                <label htmlFor="c">
                  {Formconstant.deletingtime}
                  <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <Yesradiobutton />
              <Noradiobutton />
            </div>
            <div className="inline fields">
              <div className="eight wide field">
                <label htmlFor="c">
                  {Formconstant.datalogs}
                  <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <Yesradiobutton />
              <Noradiobutton />
            </div>
            <div className="buttons">
              <button
                class="ui red basic button"
                onClick={() => {
                  return setOpenmodal(false), setModalheader(true);
                }}
              >
                {Formconstant.cancel}
              </button>
              <input type="submit" class="ui  grey button" value="Save"></input>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Formformat;
