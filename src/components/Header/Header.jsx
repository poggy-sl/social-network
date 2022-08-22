import s from'./Header.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

const Header = (props) => { 
    return (
        <header className={s.header}>
            <img src="./../public/logoimg.png"></img>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
        );
}

export default Header;