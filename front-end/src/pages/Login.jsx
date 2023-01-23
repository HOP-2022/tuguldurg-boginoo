import React from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/boginoo-logo.svg";
import credit from "../assets/credit.svg";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import "../assets/App.css";

export const Login = () => {
  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    body: {
      width: "383px",
      height: "601px",
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
    login: {
      width: "383px",
      height: "420px",
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
      boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.16)",
      borderRadius: "100px",

      paddingLeft: "50px",
      fontfamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "23px",
      color: "#000000",
      opacity: 0.2,
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
  const { loc } = useParams();
  console.log(loc);
  return (
    <>
      <Header />
      <div style={styles.container}>
        <div style={styles.body}>
          <div style={styles.logo}></div>
          <div style={styles.login}>
            <div style={styles.nevtreh}>Нэвтрэх</div>
            <div>
              <div style={{ marginLeft: "15px" }}>Цахим хаяг</div>
              <input
                style={styles.input}
                placeholder="name@mail.domain"
                type="email"
              />
            </div>
            <div>
              <div style={{ marginLeft: "15px" }}>Нууц үг</div>
              <input
                style={styles.input}
                placeholder="••••••••••"
                type="password"
              />
            </div>
            <div style={styles.container1}>
              <input type="checkbox" style={styles.checkbox} />
              <div style={styles.namaigsana}>Намайг сана</div>
              <Link style={styles.link1}>Нууц үгээ мартсан</Link>
            </div>
            <button style={styles.nevtreh1}>Нэвтрэх</button>
            <Link style={styles.link2} to="/signup">
              Шинэ хэрэглэгч бол энд дарна уу?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
