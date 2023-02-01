import React, { useState, useRef } from "react";
import axios from "axios";

export const App = () => {
  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    body: {
      width: "150px",
      height: "200px",
      border: "1px solid black",
    },
    upper: {
      width: "150px",
      height: "150px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    lower: {
      width: "150px",
      height: "50px",
    },
    check: {
      width: "150px",
      height: "25px",
      display: "flex",
      alignItems: "center",
    },
  };
  const email = useRef("");
  const username = useRef("");
  const sadmin = useRef("");
  const admin = useRef("");

  const checker1 = () => {
    admin.current.checked = false;
  };
  const checker2 = () => {
    sadmin.current.checked = false;
  };
  const signup = () => {
    let role = "user";
    if (sadmin.current.checked === true) {
      role = "superadmin";
    }
    if (admin.current.checked === true) {
      role = "admin";
    }
    if (email.current.value && username.current.value !== "") {
      axios
        .post("http://localhost:9000/roles", {
          email: email.current.value,
          username: username.current.value,
          role: role,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.body}>
        <div style={styles.upper}>
          <input type="text" placeholder="email" ref={email} />
          <input type="text" placeholder="username" ref={username} />
          <button onClick={signup}>sign up</button>
        </div>
        <div style={styles.lower}>
          <div style={styles.check}>
            <input
              type="checkbox"
              ref={sadmin}
              onClick={() => checker1(admin, sadmin)}
            />
            <p>superadmin</p>
          </div>
          <div style={styles.check}>
            <input
              type="checkbox"
              ref={admin}
              onClick={() => checker2(admin, sadmin)}
            />
            <p>admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};
