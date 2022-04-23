import React, { useState } from "react";
import Formconstant from "../constant/constant";
import "./form.css";
import Inputfield from "../inputarea/inputfeld";

function Formformat({ setOpenmodal, setModalheader }) {
  const handlevalue = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <form
        className="formset"
        onSubmit={() => {
          return setOpenmodal(false), setModalheader(true);
        }}
      >
        <div id="form">
          <div className="store-cross">
            <h1> {Formconstant.formheader}</h1>
            <button
              className="x"
              onClick={() => {
                return setOpenmodal(false), setModalheader(true);
              }}
            >
              {Formconstant.hidemodal}
            </button>
          </div>
          <div className="ui form">
            <div className="inline fields">
              <div className="eight wide field">
                <label htmlFor="a">
                  {Formconstant.formtitle}
                  <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <Inputfield />
            </div>
            <div className="inline fields">
              <div className="eight wide field">
                <label>
                  {Formconstant.code} <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <Inputfield />
            </div>
            <div className="inline fields">
              <div className="eight wide field">
                <label>
                  {Formconstant.enable}
                  <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <input
                className="radiobutton"
                type="radio"
                name="radiobutton1"
                id="defaultcheck4"
                value="YES"
                required
                onChange={handlevalue}
              ></input>
              <span htmlFor="defaultcheck1">{Formconstant.yes}</span>
              <input
                className="radiobutton"
                type="radio"
                name="radiobutton1"
                id="defaultcheck2"
                value="NO"
                required
                onChange={handlevalue}
              />
              <span htmlFor="defaultcheck2">{Formconstant.no}</span>
            </div>
            <div className="inline fields">
              <div className="eight wide field">
                <label>
                  {Formconstant.filter}
                  <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <input
                className="radiobutton"
                type="radio"
                name="radiobutton2"
                id="defaultcheck3"
                value="YES"
                required
                onChange={handlevalue}
              ></input>
              <span htmlFor="defaultcheck3">{Formconstant.yes}</span>
              <input
                className="radiobutton"
                type="radio"
                name="radiobutton2"
                id="defaultcheck4"
                value="NO"
                required
                onChange={handlevalue}
              />
              <span htmlFor="defaultcheck4">{Formconstant.no}</span>
            </div>
            <div className="inline fields">
              <div className="eight wide field">
                <label>
                  {Formconstant.deletingtime}
                  <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <input
                className="radiobutton"
                type="radio"
                name="radiobutton3"
                id="defaultcheck5"
                value="YES"
                required
                onChange={handlevalue}
              ></input>
              <span htmlFor="defaultcheck5">{Formconstant.yes}</span>
              <input
                className="radiobutton"
                type="radio"
                name="radiobutton3"
                id="defaultcheck6"
                value="NO"
                required
                onChange={handlevalue}
              />
              <span htmlFor="defaultcheck6">{Formconstant.no}</span>
            </div>
            <div className="inline fields">
              <div className="eight wide field">
                <label>
                  {Formconstant.datalogs}
                  <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <input
                className="radiobutton"
                type="radio"
                name="radiobutton4"
                id="defaultcheck7"
                value="YES"
                required
                onChange={handlevalue}
              ></input>
              <span htmlFor="deafultcheck7">{Formconstant.yes}</span>
              <input
                className="radiobutton"
                type="radio"
                name="radiobutton4"
                id="identify4"
                value="NO"
                required
                onChange={handlevalue}
              />
              <span htmlFor="identify4">{Formconstant.no}</span>
            </div>
            <div className="buttons">
              <button
                className="ui red basic button"
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
