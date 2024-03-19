import React from 'react';
import {Link} from 'react-router-dom';


import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';
import reactRouterDom from 'react-router-dom';

const MainNavigation = props => {
    return <MainHeader>
            <button className="main-navigation__menu-btn">
                <span />
                <span />
                <span />
            </button>
            <h1 className='main-navigation__title'>
                <Link to="/">
                    Your Title
                </Link>
            </h1>
            <nav><NavLinks /></nav>
        </MainHeader>;
};

export default MainNavigation;