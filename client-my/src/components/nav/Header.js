import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";


const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (event ) => {
    // console.log(e.key);
    setCurrent(event.href);
    console.log(current)
  };

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" onClick={handleClick} >Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"  onClick={handleClick} key="link">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#"  onClick={handleClick} value='action'>Action</a>
                <a className="dropdown-item" href="#"  onClick={handleClick} key='another action'>Another action</a>
              </div>
            </li>
          </ul>
          <ul className=" float-right navbar-nav my-2 my-lg-0">
            <li className="nav-item active ">
              <a className="nav-link" href="#">Register <span className="sr-only">(current)</span></a>
            </li>
            
            <li className="nav-item active ">
              <a className="nav-link" href="#">Login <span className="sr-only">(current)</span></a>
            </li>
            </ul>
        </div>
      </nav>
      
    <h1>{current}</h1>
    </>
  );
};

export default Header;
