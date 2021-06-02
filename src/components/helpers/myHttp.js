import Axios from "axios";
import Config from "./config";

export default class MyHttp {
  static post = (endpoint, data) => {
    const token = localStorage.getItem("token");
    const headers = {
      authorization: `Bearer ${token}`,
    };

    return Axios.post(`${Config.getUrl()}${endpoint}`, data, {
      headers,
    });
  };

  static put = (endpoint, data) => {
    const token = localStorage.getItem("token");
    const headers = {
      authorization: `Bearer ${token}`,
    };

    return Axios.put(`${Config.getUrl()}${endpoint}`, data, {
      headers: headers,
    });
  };

  static patch = (endpoint, data) => {
    const token = localStorage.getItem("token");
    const headers = {
      authorization: `Bearer ${token}`,
    };

    return Axios.patch(`${Config.getUrl()}${endpoint}`, data, {
      headers: headers,
    });
  };

  static delete = (endpoint) => {
    const token = localStorage.getItem("token");
    const headers = {
      authorization: `Bearer ${token}`,
    };

    return Axios.delete(`${Config.getUrl()}${endpoint}`, {
      headers: headers,
    })
  };

  static get = (endpoint) => {
    const token = localStorage.getItem("token");
    const headers = {
      authorization: `Bearer ${token}`,
    };

    // return fetch(endpoint, {headers : headers})
    return Axios.get(`${Config.getUrl()}${endpoint}`, {
      headers: headers,
    });
  };
}