import Footer from "../ReuseComponents/Footer";
import Nav from "../ReuseComponents/Nav";
import React, { useEffect, useState } from "react";
import ProductDetail from "../ReuseComponents/ProductDetail";
import RelatedProduct from "../ReuseComponents/RelatedProduct";
import Totop from "../ReuseComponents/Totop";
import { useParams } from "react-router-dom";
import axios from "axios";


const ProductModule = () => {
  // const plantId =useParams()
  // console.log(plantId)
  const [uniquedata, setuniquedata] = useState();
  // const [plant_Id, setplant_Id] = useState("");

  const { plant_id } = useParams();

  // setplant_Id(plant_id)
  console.log(plant_id)
  // console.log(plant_Id)
  // debugger
  useEffect(() => {
    const getuniData = async () => {
      let got = await axios.get("http://localhost:8000/api/cards/" + plant_id);
      console.log(plant_id);
      console.log(got.data);
      const unData=JSON.parse(JSON.stringify(got.data))
      setuniquedata(unData);
      // setuniquedata(got.data);
    };
    getuniData();
  }, [plant_id]);
  return (
    <>
      <Totop />
      <Nav />
      <div className="container">
        {uniquedata&&<ProductDetail uniquedata={uniquedata} />}
        <RelatedProduct />
        <Footer />
      </div>
    </>
  );
};

export default ProductModule;
