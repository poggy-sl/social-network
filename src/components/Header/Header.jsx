import s from'./Header.module.css';
import {NavLink} from "react-router-dom";
import React from "react";
import headerLogo from '../../assets/images/logoimg.png';

const Header = (props) => { 
    return (
        <header className={s.header}>
            <img alt="" src={headerLogo} className={s.headerLogo}></img>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
        );
}

export default Header;