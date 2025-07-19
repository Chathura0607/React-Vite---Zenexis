// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../../assets/zenexis.png';
//
// export const Navbar: React.FC = () => {
//     return (
//         <nav className="bg-[#1f1f1f] text-white flex justify-between items-center px-8 py-4 shadow-md sticky top-0 z-50">
//             <div className="flex items-center gap-3 text-2xl font-bold">
//                 <img
//                     src={logo}
//                     alt="Zenexis Logo"
//                     className="h-[45px] w-[45px] object-contain rounded-full"
//                 />
//                 <span>Zenexis</span>
//             </div>
//
//             <div className="flex items-center gap-6">
//                 <ul className="flex gap-6 list-none m-0 p-0">
//                     <li>
//                         <Link to="/" className="hover:text-[#4fc1e9] font-medium text-base">
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/about" className="hover:text-[#4fc1e9] font-medium text-base">
//                             About
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/services" className="hover:text-[#4fc1e9] font-medium text-base">
//                             Services
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/portfolio" className="hover:text-[#4fc1e9] font-medium text-base">
//                             Portfolio
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/contact" className="hover:text-[#4fc1e9] font-medium text-base">
//                             Contact
//                         </Link>
//                     </li>
//                 </ul>
//                 <Link to="/login">
//                     <button className="bg-[#4fc1e9] text-white px-4 py-2 text-base font-semibold rounded-md hover:bg-[#35aad2] transition duration-300">
//                         Sign In
//                     </button>
//                 </Link>
//             </div>
//         </nav>
//     );
// };

// import {Link} from "react-router-dom";
// import logo from '../../../assets/zenexis.png';
//
// export function Navbar() {
//     return (
//         <nav
//             className="bg-[#1f1f1f] text-white flex justify-between items-center px-8 py-4 shadow-md sticky top-0 z-50">
//             <div className="flex items-center gap-3 text-2xl font-bold">
//                 <img
//                     src={logo}
//                     alt="Zenexis Logo"
//                     className="h-[45px] w-[45px] object-contain rounded-full"
//                 />
//                 <span>Zenexis</span>
//             </div>
//
//             <div className="flex items-center gap-6">
//                 <ul className="flex gap-6 list-none m-0 p-0">
//                     <li>
//                         <Link to="/" className="hover:text-[#4fc1e9] font-medium text-base">
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/about" className="hover:text-[#4fc1e9] font-medium text-base">
//                             About
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/services" className="hover:text-[#4fc1e9] font-medium text-base">
//                             Services
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/contact" className="hover:text-[#4fc1e9] font-medium text-base">
//                             Contact
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/shopping-cart" className="hover:text-[#4fc1e9] font-medium text-base">
//                             My-Cart
//                         </Link>
//                     </li>
//                 </ul>
//                 <Link to="/login">
//                     <button
//                         className="bg-[#4fc1e9] text-white px-4 py-2 text-base font-semibold rounded-md hover:bg-[#35aad2] transition duration-300">
//                         Sign In
//                     </button>
//                 </Link>
//             </div>
//         </nav>
//     );
// }
//

import './Navbar.css';
import logo from '../../../assets/zenexis.png';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navbar() {
    const [username, setUsername] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedRole = localStorage.getItem("role");
        setUsername(storedUsername);
        setRole(storedRole);
    }, []);

    return (
        <nav className="bg-[#1f1f1f] text-white flex justify-between items-center px-8 py-4 shadow-md sticky top-0 z-50">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3 text-2xl font-bold">
                <img
                    src={logo}
                    alt="Zenexis Logo"
                    className="h-[45px] w-[45px] object-contain rounded-full"
                />
                <span>Zenexis</span>
            </div>

            {/* Navigation Links */}
            <ul className="flex gap-6 list-none m-0 p-0">
                {/* Shared links */}
                {(role === "customer" || role === null) && (
                    <>
                        <li>
                            <Link to="/" className="hover:text-[#4fc1e9] font-medium text-base">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-[#4fc1e9] font-medium text-base">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-[#4fc1e9] font-medium text-base">Contact</Link>
                        </li>
                        <li>
                            <Link to="/shopping-cart" className="hover:text-[#4fc1e9] font-medium text-base">My-Cart</Link>
                        </li>
                    </>
                )}

                {/* Admin-only links */}
                {role === 'admin' && (
                    <>
                        <li>
                            <Link to="/admin-panel" className="hover:text-[#4fc1e9] font-medium text-base">Admin Panel</Link>
                        </li>
                        <li>
                            <Link to="/manage-products" className="hover:text-[#4fc1e9] font-medium text-base">Manage Products</Link>
                        </li>
                    </>
                )}
            </ul>

            {/* Right-side: User info or Login */}
            <div className="flex items-center space-x-4">
                {username ? (
                    <p className="text-lg font-semibold">{username}</p>
                ) : (
                    <Link to="/login">
                        <button
                            className="bg-[#4fc1e9] text-white px-4 py-2 text-base font-semibold rounded-md hover:bg-[#35aad2] transition duration-300"
                        >
                            Sign In
                        </button>
                    </Link>
                )}
            </div>
        </nav>
    );
}
