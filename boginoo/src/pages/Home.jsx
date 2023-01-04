import React from "react";
import { Header } from "../components/Header";
import logo from "../assets/boginoo-logo.svg";
import credit from "../assets/credit.svg";
import "../assets/App.css";

export const Home = () => {
  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    body: {
      width: "789px",
      height: "226px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo: {
      width: "184px",
      height: "118px",
      backgroundImage: `url(${logo})`,
    },
    bottomContainer: {
      width: "789px",
      display: "flex",
      justifyContent: "space-between",
    },
    input: {
      width: "581px",
      height: "44px",
      borderRadius: "100px",
      border: "none",
      boxShadow: "0px 0px 7px 0px gray",
      paddingLeft: "20px",
      boxSizing: "border-box",
    },
    shortenButton: {
      width: "192px",
      height: "44px",
      backgroundColor: "#02B589",
      color: "white",
      boxSizing: "border-box",
      textAlign: "center",
      padding: "10px",
      fontFamily: "Ubuntu",
      fontSize: "20px",
      borderRadius: "100px",
    },
    credit: {
      position: "absolute",
      bottom: "50px",
      width: "225px",
      height: "44px",
      backgroundImage: `url(${credit})`,
    },
  };
  return (
    <>
      <Header />
      <div style={styles.container}>
        <div style={styles.credit}></div>
        <div style={styles.body}>
          <div style={styles.logo}></div>
          <div style={styles.bottomContainer}>
            <input
              style={styles.input}
              id="inputId"
              placeholder="https://www.web-huudas.mn"
              type="text"
            />
            <div style={styles.shortenButton}>Богиносгох</div>
          </div>
        </div>
      </div>
    </>
  );
};
