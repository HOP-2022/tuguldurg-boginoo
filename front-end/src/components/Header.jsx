import React, { useContext, useState } from "react";
import "../assets/App.css";
import { Context } from "../components/HistoryContext";
import axios from "axios";
import { History } from "./History";
import { Link } from "react-router-dom";

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
      fontWeight: "700",
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
      fontWeight: "700",
      fontSize: "20px",
      borderRadius: "100px",
      marginRight: "7%",
    },
    historyButton: {
      width: "183px",
      height: "44px",
      backgroundColor: "#02B589",
      color: "white",
      boxSizing: "border-box",
      textAlign: "center",
      padding: "10px",
      fontFamily: "Ubuntu",
      fontWeight: "700",
      fontSize: "20px",
      borderRadius: "100px",
      marginRight: "3%",
      border: "none",
    },
  };

  const { handleChange, history, data, setData } = useContext(Context);
  const URL = "http://localhost:8000/links";

  const click = async () => {
    await axios
      .get(URL, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(function (response) {
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    handleChange();
  };

  return (
    <div style={styles.container}>
      <button style={styles.historyButton} onClick={click}>
        TYYX
      </button>
      <div style={styles.helpButton}>Хэрхэн ажилладаг вэ?</div>
      <Link style={styles.loginButton} to="/login">
        Нэвтрэх
      </Link>
    </div>
  );
};
