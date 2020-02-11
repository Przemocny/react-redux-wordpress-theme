import React from 'react';
import Menu from './Menu'

const Layout = ({children, menu})=>{
    return (
        <div className="app container-fluid no-pm">
            {/* <Menu menu={menu}/> */}
            <div className="app-page">
                {children}
            </div>
        </div>
    )
}

export default Layout