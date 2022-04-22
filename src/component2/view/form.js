import React, { useState } from "react";
import Formconstant from "../constant/constant";
import "./form.css";
import Inputfield from "../inputarea/inputfeld";
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
                required
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              ></input>
              <span htmlFor="defaultcheck1">{Formconstant.yes}</span>
              <input
                className="radiobutton"
                type="radio"
                name="radiobutton1"
                id="defaultcheck2"
                required
                onChange={(e) => {
                  console.log(e.target.value);
                }}
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
                required
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              ></input>
              <span htmlFor="defaultcheck3">{Formconstant.yes}</span>
              <input
                className="radiobutton"
                type="radio"
                name="radiobutton2"
                id="defaultcheck4"
                required
                onChange={(e) => {
                  console.log(e.target.value);
                }}
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
                required
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              ></input>
              <span htmlFor="defaultcheck5">{Formconstant.yes}</span>
              <input
                className="radiobutton"
                type="radio"
                name="radiobutton3"
                id="defaultcheck6"
                required
                onChange={(e) => {
                  console.log(e.target.value);
                }}
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
                required
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              ></input>
              <span htmlFor="deafultcheck7">{Formconstant.yes}</span>
              <input
                className="radiobutton"
                type="radio"
                name="radiobutton4"
                id="identify4"
                required
                onChange={(e) => {
                  console.log(e.target.value);
                }}
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
