import React from "react";
import { Button } from "react-bootstrap";
import pic1 from"../../Asset/pic1.png"
import { useNavigate } from "react-router-dom";

const ProductCart = () => {
  const navigate=useNavigate()
  const handleCheckout=()=>{
    navigate("/checkout")
  }
  const handleShopping=()=>{
    navigate("/")
  }
  return (
    <div className=" container">
      <div>Home/Shop/Shopping Cart</div>
      <div className="d-flex">
        <div className="w-75 me-5 ">
          <div className="row">
            <div className="col-5 fw-bold">PRODUCT</div>
            <div className="col-2 fw-bold">PRICE</div>
            <div className="col-2 fw-bold">QUANTITY</div>
            <div className="col-2 fw-bold">TOTAL</div>
          </div>
          <hr className="mt-2 primaryclr" />
          <div style={{height:"100px"}} className="cardbgclr my-3 row rounded  ">
            {/* <div className="row"> */}
            <div className="col-1 d-flex align-items-center">
              <img  className="" src={pic1} alt="" width="100%" />
            </div>
            <div className="col-4 d-flex  flex-column  justify-content-center ">
              {" "}
              <div>Product Name</div>
              <div>SKU:</div>
            </div>
            <div className="col-2 d-flex align-items-center">Price</div>
            <div className="col-2 d-flex align-items-center">
              <div className="d-flex">
                <Button className="btns-fill sizebtn d-flex justify-content-center align-items-center ">
                  -
                </Button>
                <span className="mx-2">1</span>
                <Button className="btns-fill sizebtn d-flex justify-content-center align-items-center ">
                  +
                </Button>
              </div>
            </div>
            <div className="col-2 d-flex align-items-center ">Total</div>
            <div className="col-1 d-flex align-items-center">bin</div>
            {/* </div> */}
          </div>
          <div style={{height:"100px"}} className="cardbgclr my-3 row rounded  ">
            {/* <div className="row"> */}
            <div className="col-1 d-flex align-items-center">
              <img  className="" src={pic1} alt="" width="100%" />
            </div>
            <div className="col-4 d-flex  flex-column  justify-content-center ">
              {" "}
              <div>Product Name</div>
              <div>SKU:</div>
            </div>
            <div className="col-2 d-flex align-items-center">Price</div>
            <div className="col-2 d-flex align-items-center">
              <div className="d-flex">
                <Button className="btns-fill sizebtn d-flex justify-content-center align-items-center ">
                  -
                </Button>
                <span className="mx-2">1</span>
                <Button className="btns-fill sizebtn d-flex justify-content-center align-items-center ">
                  +
                </Button>
              </div>
            </div>
            <div className="col-2 d-flex align-items-center ">Total</div>
            <div className="col-1 d-flex align-items-center">bin</div>
            {/* </div> */}
          </div>
        </div>
        <div className="w-25 ms-3">
          <div className="fw-bold ">CART TOTALS</div>
          <hr className="my-2 primaryclr" />
          <div>
            <div>Coupon Apply</div>
            <div></div>
          </div>
          <div className="my-3">
            <div className="d-flex justify-content-between">
              <div>Sub Total</div>
              <div className="fw-bold ">$1600</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>Coupon Discount</div>
              <div>(-) $0</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>Shipping</div>
              <div className="fw-bold ">$16</div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="fw-bold ">Total</div>
            <div className="primaryclr fw-bold ">$1616</div>
          </div>
          <div className="text-center">
            <Button className="btns-fill my-3" onClick={handleCheckout}>PROCESS TO CHECKOUT</Button>
            <Button className="btns-sizeoutline mb-3" onClick={handleShopping}>
              CONTINOUE SHOPPING
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
