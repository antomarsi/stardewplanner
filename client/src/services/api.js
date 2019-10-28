import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

let instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

export default instance;
