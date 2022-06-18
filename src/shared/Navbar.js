import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import logo from '../Assests/logo.png';
import auth from '../Firebase/firebase.init';
const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    return (
        <div className="shadow-lg navbar bg-primary py-4 sm:px-0 lg:px-12 z-40 absolut">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact text-primary dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-medium">
                        <li ><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li ><NavLink to='/Shop'>Shop</NavLink></li>
                        <li><NavLink to='/blogs'>Blogs</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                        {user?.uid ?
                            <>
                                <NavLink to="/dashboard" className="mr-5 items-center">Dashboard</NavLink>
                                <NavLink to="/signIn" onClick={logout} className="md:border-l md:border-gray-400 font-bold uppercase inline-flex items-center bg-none border-0 py-1 px-3 focus:outline-none rounded text-primary mt-4 md:mt-0">Sign Out
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </NavLink>

                            </>
                            :
                            <NavLink to="/signIn" className="md:border-l md:border-gray-400 font-bold uppercase inline-flex items-center  border-0 py-1 px-3 focus:outline-none rounded text-primary mt-4 md:mt-0">Sign In
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </NavLink>
                        }
                    </ul>
                </div>
                <NavLink to='/' className="normal-case w-44 font-bold text-3xl"><img src={logo} alt="" srcSet="" /></NavLink>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ml-50 font-bold uppercase text-white">
                    <li><NavLink to=''>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li ><NavLink to='/Shop'>Shop</NavLink></li>
                    <li><NavLink to='/blogs'>Blogs</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    {user?.uid ?
                        <>
                            <NavLink to="/dashboard" className="mr-5 font-bold uppercase text-white items-center mt-3 ml-2">Dashboard</NavLink>
                            <NavLink to="/signIn" onClick={logout} className="md:border-l md:border-gray-400 font-bold uppercase inline-flex items-center bg-none border-0 py-1 px-3 focus:outline-none rounded text-white mt-4 md:mt-0">Sign Out
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </NavLink>

                        </>
                        :
                        <NavLink to="/signIn" className="md:border-l md:border-gray-400 font-bold uppercase inline-flex items-center bg-none border-0 py-1 px-3 focus:outline-none rounded text-white mt-4 md:mt-0">Sign In
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </NavLink>
                    }
                </ul>

            </div>
            <div className="navbar-end lg:hidden">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;