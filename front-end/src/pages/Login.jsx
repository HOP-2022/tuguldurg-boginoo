import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/App.css";
import logo from "../assets/boginoo-logo.svg";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import axios from "axios";

export const Login = () => {
  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    // howItWorks: {
    //   color: "#02B589",
    //   fontFamily: "Ubuntu",
    //   fontStyle: "normal",
    //   fontWeight: 700,
    //   fontSize: "25px",
    //   lineHeight: "23px",
    //   texTransform: "uppercase",
    //   paddingLeft: "1600px",
    //   paddingTop: "50px",
    // },
    body: {
      height: "601px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    },
    nevtreh: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "37px",
      textAlign: "center",

      color: "#02B589",
    },
    input: {
      boxSizing: "border-box",
      width: "381px",
      height: "44px",
      background: "#FFFFFF",
      border: "1px solid #F0F0F0",
      outline: "none",
      // border: 'none',
      boxShadow: "0px 1px 5px gray",
      borderRadius: "100px",

      paddingLeft: "50px",
      fontfamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "23px",
      color: "#000000",
      // opacity: 0.2,
    },
    container1: {
      width: "381px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    checkbox: { border: "1px solid #02B589" },
    namaigsana: {
      paddingRight: "100px",
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "18px",
      color: "#02B589",
    },
    nevtreh1: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "23px",
      textTransform: "uppercase",
      color: "#FFFFFF",

      width: "383px",
      height: "43px",
      backgroundColor: "#02B589",
      border: "0px #02B589",
      borderRadius: "100px",
    },
    link1: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "18px",
      textDecorationLine: "underline",
      color: "#333333",
    },
    link2: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "18px",
      textDecorationLine: "underline",
      color: "#02B589",
    },
  };
  const email = useRef("");
  const password = useRef("");
  const URL = "http://localhost:8000/users/login";
  const login = () => {
    if (email.current.value !== "" && password.current.value !== "") {
      axios
        .post(URL, {
          email: email.current.value,
          password: password.current.value,
        })
        .then(function (res) {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          window.location.replace("/");
        })
        .catch(function (error) {
          console.log(error.response.data.message);
        });
    } else {
      console.log("no");
    }
  };
  return (
    <>
      <Header />
      <div style={styles.container}>
        {/* <div style={styles.howItWorks}>xэрхэн ажилладаж вэ?</div> */}

        <div style={styles.body}>
          <img src={logo} alt="" />
          <div style={styles.nevtreh}>Нэвтрэх</div>
          <div>
            <div style={{ margin: "0px 0px 3px 15px" }}>Цахим хаяг</div>
            <input
              style={styles.input}
              placeholder="name@mail.domain"
              type="email"
              ref={email}
            />
          </div>
          <div>
            <div style={{ margin: "0px 0px 3px 15px" }}>Нууц үг</div>
            <input
              style={styles.input}
              placeholder="••••••••••"
              type="password"
              ref={password}
            />
          </div>
          <div style={styles.container1}>
            <input type="checkbox" style={styles.checkbox} />
            <div style={styles.namaigsana}>Намайг сана</div>
            <Link style={styles.link1}>Нууц үгээ мартсан</Link>
          </div>
          <button style={styles.nevtreh1} onClick={login}>
            Нэвтрэх
          </button>
          <Link style={styles.link2} to="/signup">
            Шинэ хэрэглэгч бол энд дарна уу?
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
