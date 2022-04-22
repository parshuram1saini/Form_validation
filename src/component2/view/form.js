import React from "react";
import Formconstant from "../constant/constant";
import "./form.css";

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
              <input
                className="inputfield"
                type="text"
                id="a"
                required
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div className="inline fields">
              <div className="eight wide field">
                <label htmlFor="b">
                  {Formconstant.code} <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <input type="text" id="b" required />
            </div>
            <div className="inline fields">
              <div className="eight wide field">
                <label htmlFor="c">
                  {Formconstant.enable}
                  <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <input
                className="radiobutton"
                type="radio"
                name="radio1"
                id="c"
                required
                onChange={(e) => console.log(e.target.value)}
              ></input>
              <span htmlFor="c">{Formconstant.yes}</span>
              <input
                className="radiobutton"
                type="radio"
                name="radio1"
                id="d"
                required
                onChange={(e) => console.log(e.target.value)}
              />
              <span htmlFor="d">{Formconstant.no}</span>
            </div>
            <div className="inline fields">
              <div className="eight wide field">
                <label htmlFor="c">
                  {Formconstant.filter}
                  <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <input
                className="radiobutton"
                type="radio"
                name="radio2"
                id="e"
                required
                onChange={(e) => console.log(e.target.value)}
              ></input>
              <span htmlFor="e">{Formconstant.yes}</span>
              <input
                className="radiobutton"
                type="radio"
                name="radio2"
                id="f"
                required
                onChange={(e) => console.log(e.target.value)}
              ></input>
              <span htmlFor="f">{Formconstant.no}</span>
            </div>
            <div className="inline fields">
              <div className="eight wide field">
                <label htmlFor="c">
                  {Formconstant.deletingtime}
                  <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <input
                className="radiobutton"
                type="radio"
                name="radio3"
                id="g"
                required
                onChange={(e) => console.log(e.target.value)}
              ></input>
              <span htmlFor="g">{Formconstant.yes}</span>
              <input
                className="radiobutton"
                type="radio"
                name="radio3"
                id="h"
                required
                onChange={(e) => console.log(e.target.value)}
              ></input>
              <span htmlFor="h">{Formconstant.no}</span>
            </div>
            <div className="inline fields">
              <div className="eight wide field">
                <label htmlFor="c">
                  {Formconstant.datalogs}
                  <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <input
                className="radiobutton"
                type="radio"
                name="radio4"
                id="i"
                required
                onChange={(e) => console.log(e.target.value)}
              ></input>
              <span htmlFor="i">{Formconstant.yes}</span>
              <input
                className="radiobutton"
                type="radio"
                name="radio4"
                id="j"
                required
                onChange={(e) => console.log(e.target.value)}
              ></input>
              <span htmlFor="j">{Formconstant.no}</span>
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
