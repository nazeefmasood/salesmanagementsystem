import React from "react";
import { useNavigate } from "react-router-dom";
const Error = () => {
    const navigate = useNavigate()
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#09090b",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "5px",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "white" }}>{"ERROR 404 THIS PAGE DOESN'T EXIST"}</h1>
      <button
        style={{
          backgroundColor: "#212124",
          padding: "10px 15px",
          border: "none",
          color: "#ededed",
          fontSize: "16px",
          borderRadius: "5px",
          userSelect: "none",
          cursor: "pointer",
        }}
        onClick={()=>navigate('/')}
      >
        Go to Home
      </button>
    </div>
  );
};

export default Error;
