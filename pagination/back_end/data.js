const { default: axios } = require("axios");

const data = [
  {
    user: "1",
    data: "gfddddsfd",
  },
  {
    user: "2",
    data: "gfddddsfd",
  },
  {
    user: "3",
    data: "gfddddsfd",
  },
  {
    user: "4",
    data: "gfddddsfd",
  },
  {
    user: "5",
    data: "gfddddsfd",
  },
  {
    user: "6",
    data: "gfddddsfd",
  },
  {
    user: "7",
    data: "gfddddsfd",
  },
  {
    user: "8",
    data: "gfddddsfd",
  },
  {
    user: "9",
    data: "gfddddsfd",
  },
  {
    user: "10",
    data: "gfddddsfd",
  },
  {
    user: "11",
    data: "gfddddsfd",
  },
  {
    user: "12",
    data: "gfddddsfd",
  },
  {
    user: "13",
    data: "gfddddsfd",
  },
  {
    user: "14",
    data: "gfddddsfd",
  },
  {
    user: "15",
    data: "gfddddsfd",
  },
  {
    user: "16",
    data: "gfddddsfd",
  },
  {
    user: "17",
    data: "gfddddsfd",
  },
  {
    user: "18",
    data: "gfddddsfd",
  },
  {
    user: "19",
    data: "gfddddsfd",
  },
  {
    user: "20",
    data: "gfddddsfd",
  },
];
const uploader = (el) => {
  axios.post("http://localhost:8000/datas", el);
};

const uploader1 = () => {
  data.map((el) => {
    uploader(el);
  });
};
uploader1();
