import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css'

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <Link className="nav-link" to="/home">
          {" "}
          Home{" "}
        </Link>
        <Link className="nav-link" to="/about">
          {" "}
          About{" "}
        </Link>
        <Link className="nav-link" to="/qna">
          {" "}
          QnA{" "}
        </Link>
        <Link className="nav-link" to="/detail">
          {" "}
          Detail{" "}
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          {/* <Link to='/' element={<Home></Home>}>Home</Link> */}
        </Route>
      </Routes>
    </>
  );
};

export default Header;
