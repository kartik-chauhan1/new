import React,{useContext} from "react";
import "./Header.css";
 import { AppContext } from "../App";
import userImg from "../images/user.jpg";

function Header({ toggleActive }) {
  const{library,bag}=useContext(AppContext)
  return (
    <header>
      <a href=" #" className="menu" onClick={toggleActive}>
        <i className="bi bi-sliders"></i>
      </a>
      <div className="userItems">
        <a href="# " className="icon">
          <i className="bi bi-heart-fill"></i>
          <span className="like">{library.length}</span>
        </a>
        <a href="# " className="icon">
          <i className="bi bi-bag-dash-fill"></i>
          <span className="bag">{bag.length}</span>
        </a>
        <div className="avatar">
          <a href="# ">
            <img src={userImg} alt="User Profile" />
          </a>
          <div className="user">
            <span> User Name</span>
            <a href="# ">View profile</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
