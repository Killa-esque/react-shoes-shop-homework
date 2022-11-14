import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
export default class Template extends Component {
    render() {
        return (
            <>
                <div className='row mx-auto justify-content-center align-items-center' style={{height:"100vh"}}>
                    <div className='w-25 d-flex flex-column px-3'>
                        <header>
                            <NavLink to='/home' className={({ isActive }) => isActive ? 'nav-link text-dark border border-2 border-info border-start-0 p-2' : 'nav-link text-dark p-2'}>Home</NavLink>
                            <NavLink to='/shop' className={({ isActive }) => isActive ? 'nav-link text-dark border border-2 border-info border-start-0 p-2' : 'nav-link bg-white text-dark p-2'}>Shop</NavLink>
                        </header>
                    </div>
                    <div className='w-75 border border-2 border-info px-2 py-2 overflow-scroll' style={{ height: '100vh' }}>
                        <Outlet />
                    </div>
                </div>
            </>
        )
    }
}
