import React from "react";
import "../assets/App.css";

export const Header = () => {
  const styles = {
    container: {
      position: "absolute",
      width: "100vw",
      height: "15vh",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    helpButton: {
      color: "#02B589",
      fontFamily: "Ubuntu",
      fontSize: "20px",
      marginRight: "44px",
    },
    loginButton: {
      width: "183px",
      height: "44px",
      backgroundColor: "#02B589",
      color: "white",
      boxSizing: "border-box",
      textAlign: "center",
      padding: "10px",
      fontFamily: "Ubuntu",
      fontSize: "20px",
      borderRadius: "100px",
      marginRight: "7%",
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.helpButton}>Хэрхэн ажилладаг вэ?</div>
      <div style={styles.loginButton}>Нэвтрэх</div>
    </div>
  );
};
