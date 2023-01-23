import axios from "axios";
import { useState } from "react";

export const History = ({ link, shortLink }) => {
  const styles = {
    container: {
      width: "789px",
      height: "73px",
      marginTop: "80px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    content: {
      width: "394.5px",
      height: "73px",
    },
    key: {
      fontFamily: "Ubuntu",
      fontWeight: "400",
      filter: "opacity(30%)",
      fontSize: "16px",
      marginBottom: "10px",
    },
    info: {
      fontFamily: "Ubuntu",
      fontWeight: "400",
      fontSize: "20px",
      wordWrap: "break-word",
    },
    copyContainer: {
      width: "100%",
      display: "flex",
    },
    copyButton: {
      border: "none",
      backgroundColor: "transparent",
      fontFamily: "Ubuntu",
      fontWeight: "400",
      fontSize: "18px",
      color: "#02B589",
      textDecoration: "underline",
      marginLeft: "10px",
    },
  };
  const URL = "http://localhost:8000/links";
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.key}>Өгөгдсөн холбоос:</div>
        <div style={styles.info}>{link}</div>
      </div>
      <div style={styles.content}>
        <div style={styles.key}>Богино холбоос:</div>
        <div style={styles.copyContainer}>
          <div style={styles.info}>{shortLink}</div>
          <button
            style={styles.copyButton}
            onClick={() => {
              navigator.clipboard.writeText(shortLink);
            }}
          >
            Хуулж авах
          </button>
        </div>
      </div>
    </div>
  );
};
