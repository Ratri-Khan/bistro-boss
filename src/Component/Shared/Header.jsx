// import React from 'react';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../../hooks/useCart";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.log(error) })
    }
    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/order/salad'>Order</Link></li>
                    <li>
                        <button className="bg-red-400">
                            <Link to='/dashboard/myCart'><AiOutlineShoppingCart className="w-8 h-8"/></Link>
                            <p>{cart?.length || 0}</p>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <img src={user.photoURL} className='w-14 h-14 rounded-full' alt="" />
                            <p onClick={handleLogOut} className="border-2 p-2 cursor-pointer">log out</p>

                        </> :
                        <>
                            <Link to='/login'>Login</Link>
                            <Link to='/signup'>Signup</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;