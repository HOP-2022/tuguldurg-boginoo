import React from "react";
import credit from "../assets/credit.svg";

export const Footer = () => {
  const styles = {
    container: {
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      marginTop: "-100px",
    },
    credit: {
      position: "relative",
      marginTop: "0px",
      width: "225px",
      height: "44px",
      backgroundImage: `url(${credit})`,
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.credit}></div>
    </div>
  );
};
