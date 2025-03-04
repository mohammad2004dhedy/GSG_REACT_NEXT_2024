import React from "react";
// ما ركزت على الستايل وحاولت اركز على الوظائف الاساسية بسبب ضيق الوقت برمضان 🥲
const NotFound = () => {
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
       <b style={{fontSize:"5rem"}}>❌</b>
      <h4 style={{ color: "#fff", fontSize: "3rem" }}>Error 404</h4>
      <p style={{ color: "white", textAlign: "center" }}>
        the page you are trying to access is not found or the task does not
        exesit
      </p>
    </div>
  );
};

export default NotFound;
