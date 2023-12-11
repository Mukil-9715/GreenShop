import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const Greenshop = createContext();

export function Contexts({ children }) {
  const [data, setdata] = useState([]);
  const [productdata, setproductdata] = useState([]);
  const [userdata, setuserdata] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let got = await axios.get("http://localhost:8000/api/cards");
      setdata(await got.data);
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      let usersdata = await axios.get("http://localhost:8000/api/user");
      setuserdata(await usersdata.data);
    };
    getData();
  }, []);
    console.log(userdata);

  return (
    <Greenshop.Provider
      value={{
        data,
        setdata,
        productdata,
        setproductdata,
      }}
    >
      {children}
    </Greenshop.Provider>
  );
}

export default Greenshop;
