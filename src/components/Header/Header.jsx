import s from'./Header.module.css';
import {NavLink} from "react-router-dom";
import React from "react";
import headerLogo from '../../assets/images/logoimg.png';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = (props) => { 
    return (
        <header className={s.header}>
            <img alt="" src={headerLogo} className={s.headerLogo}></img>
            <div className={s.loginBlock}>
                {props.isAuth 
                ? <div>{props.login} - <FontAwesomeIcon className={s.signOut} icon={faRightFromBracket} onClick={props.logout} /></div>
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
        );
}

export default Header;