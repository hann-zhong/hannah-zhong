import React, { useEffect, useState } from 'react';
import './styles/Layout.css';
import './styles/global.css';
import Navbar from './Navbar';

interface LayoutProps {
    children: JSX.Element;
}

function Layout(props:LayoutProps) : JSX.Element {
    return (
        <>
            <div>
                {props.children}
            </div>
        </>
    );
}

export default Layout;