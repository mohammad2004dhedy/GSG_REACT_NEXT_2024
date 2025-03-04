"use client";
import React from "react";
interface Iprops {
  error: Error;
  reset: () => void;
}
const error = (props: Iprops) => {
  const btnStyle = {
    borderRadius: "20px",
    padding: "10px",
    backgroundColor: "white",
    color: "black",
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#737373",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        gap:"25px",
        padding:"20px",
      }}
    >
       <b style={{fontSize:"5rem"}}>🐞</b>
      <h4 style={{ color: "#fff", fontSize: "3rem" }}>Opps !!</h4>
      <br />
      <p style={{ color: "white", textAlign: "center" }}>
        something went wrong :( ,{" "}
        <button
          onClick={() => {
            props.reset();
          }}
          type="button"
          style={btnStyle}
        >
          try again
        </button>{" "}
        or{" "}
        <button
          onClick={() => {
            window.location.reload();
          }}
          style={btnStyle}
          type="button"
        >
          refresh the page
        </button>
      </p>
    </div>
  );
};

export default error;
