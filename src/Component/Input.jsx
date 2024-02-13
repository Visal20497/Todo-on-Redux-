import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";

function Input() {
  let { name, pass, edit } = useSelector((item) => {
    return item.TextReducer;
  });

  function submitHandler() {
    let obj = {
      id: Math.trunc(Math.random() * 1000),
      username: name,
      pass: pass,
    };
    if (name && pass) {
      dispatch({ type: "SUBMIT", payload: obj });
    }
  }
  let dispatch = useDispatch();

  return (
    <>
    <Navbar/>
      <div className="container-fluid  p-5 b-black" style={{ width: "40%" }}>
        <div className="row m-2">
          <label className="col">TodoName: </label>
          <input
            className="col"
            type="text"
            value={name}
            placeholder="Enter your name..."
            onChange={(e) =>
              dispatch({ type: "NAME", payload: e.target.value })
            }
          />
          <br />
          <br />
        </div>
        <div className="row m-2">
          {/* <label className="col">TodoType :</label> */}
          {/* <input
            className="col"
            type="text"
            placeholder="Enter your password..."
            value={pass}
            onChange={(e) => {
              dispatch({ type: "PASS", payload: e.target.value });
            }}
          /> */}
          <select value={pass}  onChange={(e) => {
              dispatch({ type: "PASS", payload: e.target.value });
            }} >
            <option value=''>Select_Type</option>
            <option disabled></option>
            <option value='New Todo'>New Todo</option>
            <option disabled></option>
            <option value='incomplete'>Incomplete</option>
            <option disabled></option>
            <option value='completed'>Completed</option>
            <option disabled></option>
          </select>
        </div>
        <div className="row">
          <button
            className="col btn btn-primary"
            onClick={() => {
              submitHandler();
            }}
          >
            {edit?"EDIT":"Add Todo"}
          </button>
        </div>
      </div>
      <hr />
      <Card />
    </>
  );
}

export default Input;
