import React from "react";
import { Pagination } from 'antd';
import pic1 from "../../Asset/pic1.png"
import pic2 from "../../Asset/pic2.png"
import pic3 from "../../Asset/pic3.png"
import pic4 from "../../Asset/pic4.png"

const Cards = () => {
  return (
    <div className="cardsection w-5">
      <div className="d-flex w-100 justify-content-between ">
        <div className="d-flex w-25 justify-content-between ">
          <div>All plants</div>
          <div>New Arrival</div>
          <div>Sale</div>
        </div>
        <div>Sort By : dropdown menu</div>
      </div>
      <div className="d-flex flex-wrap g-5 ">
        <div className=" mx-4 my-4">
          <div className="cards-img d-flex justify-content-center align-items-center "><img src={pic1} alt=""  width="200px"/></div>
          <div>title</div>
          <div className="d-flex justify-content-between w-50 ">
            <p className="primaryclr fw-bold">$215</p>
            <del>$250</del>
          </div>
        </div>
        <div className=" mx-4 my-4">
          <div className="cards-img d-flex justify-content-center align-items-center "><img src={pic2} alt=""  width="200px"/></div>
          <div>title</div>
          <div>price</div>
        </div>
        <div className=" mx-4 my-4">
          <div className="cards-img d-flex justify-content-center align-items-center "><img src={pic3} alt=""  width="200px"/></div>
          <div>title</div>
          <div>price</div>
        </div>
        <div className=" mx-4 my-4">
          <div className="cards-img d-flex justify-content-center align-items-center "><img src={pic4} alt=""  width="200px"/></div>
          <div>title</div>
          <div>price</div>
        </div>
        <div className="mx-4 my-4">
          <div className="cards-img">cards</div>
          <div>title</div>
          <div>price</div>
        </div>
        <div className=" mx-4 my-4">
          <div className="cards-img">cards</div>
          <div>title</div>
          <div className="d-flex justify-content-between w-50 ">
            <p className="primaryclr fw-bold">$215</p>
            <del>$250</del>
          </div>
        </div>
        <div className=" mx-4 my-4">
          <div className="cards-img">cards</div>
          <div>title</div>
          <div className="d-flex justify-content-between w-50 ">
            <p className="primaryclr fw-bold">$215</p>
            <del>$250</del>
          </div>
        </div>
        <div className=" mx-4 my-4">
          <div className="cards-img">cards</div>
          <div>title</div>
          <div className="d-flex justify-content-between w-50 ">
            <p className="primaryclr fw-bold">$215</p>
            <del>$250</del>
          </div>
        </div>
        <div className=" mx-4 my-4">
          <div className="cards-img">cards</div>
          <div>title</div>
          <div className="d-flex justify-content-between w-50 ">
            <p className="primaryclr fw-bold">$215</p>
            <del>$250</del>
          </div>
        </div>
        
      </div>
      <div className="text-end"><Pagination defaultCurrent={1} total={50} /></div>
    </div>
  );
};

export default Cards;
