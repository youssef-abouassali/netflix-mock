import axios from "axios";
import requests from "../Requests";
import { useEffect, useState } from "react";

const Main = () => {
  const [Movise, SetMovise] = useState([]);

  const movie = useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      SetMovise(response.data.results);
    });
  }, []);
  return <div>Main</div>;
};

export default Main;
