import React from 'react';
import Menu from './Menu'
import { Footer } from '.';

const Layout = ({children, menu})=>{
    return (
        <div className="app container-fluid no-pm">
            <Menu menu={menu}/>
            <div className="app-page">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout