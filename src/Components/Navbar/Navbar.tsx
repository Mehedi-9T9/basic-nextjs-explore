"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    // const navItems = <>
    //     <li><Link href={'/'}>Home</Link></li>
    //     <li><Link href={'/blogs'}>Blogs</Link></li>
    //     <li><Link href={'/comments'}>Comments</Link></li>
    // </>
    const pathName = usePathname()
    console.log(pathName);

    const navlist = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/blogs",
            title: "Blogs"
        },
        {
            path: "/comments",
            title: "Comments"
        },
    ]
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navlist.map((nav, idx) => <li key={idx}><Link href={nav.path} className={`${pathName == nav.path ? "text-red-400" : null}`}>{nav.title}</Link></li>)
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl -ml-5"> Basic Next-JS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navlist.map((nav, idx) => <li key={idx}><Link href={nav.path} className={`${pathName == nav.path ? "text-red-400" : null}`}>{nav.title}</Link></li>)
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;