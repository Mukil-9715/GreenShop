import React, { useContext } from "react";
import pic5 from "../../Asset/pic3.png";
import { Button } from "react-bootstrap";
import { Rate } from "antd";
import Greenshop from "../../Context Api/Context";

const ProductDetail = () => {
  const { productdata } = useContext(Greenshop);
  console.log(productdata);

  return (
    <div className="ProductDetail my-4">
      <div>Home/Shop</div>
      <div className=" my-4 d-flex justify-content-between align-items-center ">
        <div className="cards-img w-50 h-auto d-flex justify-content-center align-items-center">
          <img src={productdata.image} alt="" width="75%" />
        </div>
        <div className=" ms-5 w-50">
          <div className="d-flex justify-content-between align-items-end ">
            <div className="">
              <div className="fs-3 fw-bold">{productdata.name}</div>
              <div className="fs-4 fw-bold primaryclr">
                {productdata.price[0]}
              </div>
            </div>
            <div className="">
              <Rate allowHalf disabled defaultValue={4.5} /> 5 Customer Review{" "}
            </div>
          </div>
          <hr className="mt-0" />
          <div>
            <div className="fs-5 fw-bold">Short Description :</div>
            <div>{productdata.description.st_description}</div>
          </div>
          <div className="my-3">
            <div className="fs-5 fw-bold ">Size :</div>
            <div className="d-flex w-25  justify-content-between align-items-center">
              {productdata.size.map((data) => {
                return (
                  <div className="btns-sizeoutline sizebtn d-flex justify-content-center align-items-center ">
                    {data}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-3 d-flex">
            <div className="d-flex">
              <Button className="btns-fill sizebtn d-flex justify-content-center align-items-center ">
                -
              </Button>
              <span className="mx-2">1</span>
              <Button className="btns-fill sizebtn d-flex justify-content-center align-items-center ">
                +
              </Button>
            </div>
            <div>
              <Button className="btns-fill mx-4">BUY NOW</Button>
              <Button className="btns-outline">ADD TO CART</Button>
            </div>
          </div>
          <div>Catagiries and tags</div>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around w-25">
          <div>Product Description</div>
          <div>Review</div>
        </div>
        <hr className="mt-0 primaryclr" />
        <div>{productdata.description.lg_description}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
