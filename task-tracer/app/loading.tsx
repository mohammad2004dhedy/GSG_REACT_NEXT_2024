import React from 'react'

const loading = () => {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#737373",
      display: "flex",
      flexDirection:"column",
      justifyContent: "center",
      alignItems: "center",
      gap:"25px",
      padding:"20px",
      }}>
       <b style={{fontSize:"5rem"}}>✈️🏃‍♀️‍➡️</b>
        <div style={{
            color:"#fff",
            fontSize:"3rem",
            fontWeight:"bold",
        }}>loading ....</div>
      </div>
  )
}

export default loading