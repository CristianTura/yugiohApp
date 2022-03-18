import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';
import {  useDispatch } from 'react-redux';
import { handleChangeInput } from '../redux/filter/actions';

export const Header = () => {
  // const valueFilter = useSelector((state:RootState) => state.filter);

  const dispatch = useDispatch();

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch( handleChangeInput(e.target.value) )
  }

  return (
    <header className="header__header">
      <nav className="header_menu-nav">
        <Link to="/">
          <img className="header__logo" src={Logo} alt="Logo" />
        </Link>
        <div className="header__container-search">
            <input className="header-search" onChange={ changeInput } type="text" placeholder="Search Card"/>
            <i className="icon-search fa-solid fa-magnifying-glass"/>
        </div>
        <Link className="header__favorites" to="/favorites"><i className="fa-solid fa-star" /> <span>Favorites</span></Link>
      </nav>
    </header>
  );
};
