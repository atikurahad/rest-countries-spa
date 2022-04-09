import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css'

const Header = () => {
  return (
    <>
      <nav className="nabvar">
        <Link to="/home"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/qna"> QnA </Link>
        <Link to="/detail"> Detail </Link>
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
