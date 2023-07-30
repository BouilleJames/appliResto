import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import "../styles/Home.css";
import axios from "axios";

const Home = () => {
  const [stuffList, setStuffList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/stuff")
      .then((response) => {
        setStuffList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Form />
    </div>
  );
};

export default Home;
