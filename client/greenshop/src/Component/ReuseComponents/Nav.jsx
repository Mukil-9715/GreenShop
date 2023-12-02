import { HeartOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Button } from 'react-bootstrap';
import React from 'react';
import logo from "../../Asset/logo.png";

const Nav = () => {
  return (
    <div>
    <div className='d-flex align-items-center justify-content-evenly'>
    <div className='d-flex '>
        <img src={logo} alt="" width="60px" />
        <div className='primaryclr mt-2 ms-3 fs-3 fw-bold'>Greenshop</div>
    </div>
    <div className='d-flex align-items-center justify-content-around menus' >
      <Button className='btn-text'>Home</Button>
      <Button className='btn-text'>Shop</Button>
      <Button className='btn-text'>Plant Care</Button>
      <Button className='btn-text'>Blog</Button>

    </div>
    <div className='d-flex align-items-center justify-content-around icons'>
    <SearchOutlined/>  
    <HeartOutlined />
    <UserOutlined />
    <ShoppingCartOutlined />
    </div>
    <Button className="btns-fill">Login </Button>
    </div>
    <hr />
    </div>
  )
}

export default Nav