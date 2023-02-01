import React, { useState, useContext } from "react";
import { Header } from "../components/Header";
import { RecentLink } from "../components/RecentLink";
import axios from "axios";
import logo from "../assets/boginoo-logo.svg";
import credit from "../assets/credit.svg";
import "../assets/App.css";
import { useParams } from "react-router-dom";
import { Context } from "../components/HistoryContext";
import { History } from "../components/History";

export const Home = () => {
  const styles = {
    container: {
      width: "100vw",
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    body: {
      marginTop: "300px",
      width: "789px",
      height: "226px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    },
    history: {
      overflow: "hidden",
      minHeight: "0px",
      width: "789px",
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
      fontWeight: "700",
      fontSize: "20px",
      borderRadius: "100px",
      border: "none",
    },
    credit: {
      position: "relative",
      marginTop: "350px",
      width: "225px",
      height: "44px",
      backgroundImage: `url(${credit})`,
    },
  };
  const [link, setLink] = useState("");
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const { id } = useParams();
  const URL = "http://localhost:8000/links";
  const { history, data } = useContext(Context);
  if (id) {
    axios
      .get(`http://localhost:8000/links/${id}`)
      .then(function (response) {
        window.location.replace(response.data.data.link);
      })
      .catch(function (error) {
        window.location.replace("/");
        console.log(error);
      });
  }
  const linkSender = () => {
    if (link !== "") {
      axios
        .post(
          URL,
          {
            link: link,
          },
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(function (res) {
          setUrl(res.data.data.link);
          setShortUrl("localhost:3000/" + res.data.data._id);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const deleteToken = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <Header />
      <div style={styles.container}>
        <div style={styles.body}>
          <div style={styles.logo}></div>
          <form
            style={styles.bottomContainer}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              style={styles.input}
              id="inputId"
              placeholder="https://www.web-huudas.mn"
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
            <input
              type="submit"
              style={styles.shortenButton}
              value="Богиносгох"
              onClick={linkSender}
            />
          </form>
        </div>
        {url && <RecentLink link={url} shortLink={shortUrl} />}
        {history
          ? data?.map((el, index) => {
              return (
                <History link={el.link} shortLink={el.shortLink} key={index} />
              );
            })
          : ""}
        <button onClick={deleteToken}>DELETE</button>
        <div style={styles.credit}></div>
      </div>
    </>
  );
};
