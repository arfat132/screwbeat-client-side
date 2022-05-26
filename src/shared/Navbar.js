import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../Assests/logo.png';
import auth from '../Firebase/firebase.init';
const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    return (
        <div className="navbar bg-base-100 shadow-md sm:px-0 lg:px-12 z-40 bg-opacity-60">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-medium">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/about'>ABout</Link></li>
                        <li><Link to=''>Blogs</Link></li>
                        <li><Link to=''>Contact</Link></li>
                        {user?.uid ?
                        <>
                            <Link to="/dashboard" className="mr-5 items-center">Dashboard</Link>
                            <Link to="/signIn" onClick={logout} className="md:border-l md:border-gray-400 font-bold uppercase inline-flex items-center bg-none border-0 py-1 px-3 focus:outline-none rounded text-primary mt-4 md:mt-0">Sign Out
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>

                        </>
                        :
                        <Link to="/signIn" className="md:border-l md:border-gray-400 font-bold uppercase inline-flex items-center bg-none border-0 py-1 px-3 focus:outline-none rounded text-primary mt-4 md:mt-0">Sign In
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    }
                    </ul>
                </div>
                <Link to='' className="normal-case w-52"><img src={logo} alt="" srcset="" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ml-50 font-bold uppercase text-secondary">
                    <li><Link to=''>Home</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to=''>Contact</Link></li>
                    {user?.uid ?
                        <>
                            <Link to="/dashboard" className="mr-5 font-bold uppercase text-secondary items-center mt-3">Dashboard</Link>
                            <Link to="/signIn" onClick={logout} className="md:border-l md:border-gray-400 font-bold uppercase inline-flex items-center bg-none border-0 py-1 px-3 focus:outline-none rounded text-primary mt-4 md:mt-0">Sign Out
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>

                        </>
                        :
                        <Link to="/signIn" className="md:border-l md:border-gray-400 font-bold uppercase inline-flex items-center bg-none border-0 py-1 px-3 focus:outline-none rounded text-primary mt-4 md:mt-0">Sign In
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;