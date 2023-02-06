import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const App = () => {
  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    body: {
      width: "300px",
      height: "500px",
      border: "1px solid black",
      display: "flex",
      flexDirection: "column",
    },
    content: {
      width: "300px",
      height: "450px",
    },
  };
  const [pageNum, setPageNum] = useState(0);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/datas?skip=${pageNum}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div style={styles.container}>
      <div style={styles.body}>
        <div style={styles.content}></div>
        <div
          style={{
            width: "300px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <button
            onClick={() => {
              setPageNum(0);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              setPageNum(5);
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              setPageNum(10);
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              setPageNum(15);
            }}
          >
            4
          </button>
        </div>
      </div>
    </div>
  );
};
