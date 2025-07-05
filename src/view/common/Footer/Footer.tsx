// import React from 'react';
// import './Footer.css';
//
// export function Footer() {
//     return (
//         <footer className="footer">
//             <div className="footer-container">
//                 <div className="footer-grid">
//                     {/* Logo and About */}
//                     <div className="footer-column">
//                         <h3 className="footer-logo">Zenexis</h3>
//                         <p className="footer-about">
//                             Empowering digital transformation through innovative IT services, printing, graphic design, and device repair solutions.
//                         </p>
//                     </div>
//
//                     {/* Quick Links */}
//                     <div className="footer-column">
//                         <h4 className="footer-heading">Quick Links</h4>
//                         <ul className="footer-links">
//                             <li><a href="#">Home</a></li>
//                             <li><a href="#">About Us</a></li>
//                             <li><a href="#">Services</a></li>
//                             <li><a href="#">Portfolio</a></li>
//                             <li><a href="#">Contact</a></li>
//                         </ul>
//                     </div>
//
//                     {/* Services */}
//                     <div className="footer-column">
//                         <h4 className="footer-heading">Our Services</h4>
//                         <ul className="footer-links">
//                             <li><a href="#">Software Development</a></li>
//                             <li><a href="#">Printing & Graphic Design</a></li>
//                             <li><a href="#">PC & Mobile Repair</a></li>
//                             <li><a href="#">Sales & Accessories</a></li>
//                             <li><a href="#">Communication Services</a></li>
//                         </ul>
//                     </div>
//
//                     {/* Contact Info */}
//                     <div className="footer-column">
//                         <h4 className="footer-heading">Contact Us</h4>
//                         <ul className="footer-contact">
//                             <li><span>+94 70 712 0945</span></li>
//                             <li><span>zenexis@gmail.com</span></li>
//                             <li className="footer-address">
//                                 Zenexis,<br />
//                                 Poddiwala, Maththaka.
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//
//                 {/* Bottom Row */}
//                 <div className="footer-bottom">
//                     <p className="footer-copyright">
//                         &copy; {new Date().getFullYear()} Zenexis. All rights reserved.
//                     </p>
//                     <div className="footer-legal">
//                         <a href="#">Privacy Policy</a>
//                         <a href="#">Terms of Service</a>
//                         <a href="#">Cookie Policy</a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

export function Footer() {
    return (
        <footer className="bg-[#1f1f1f] text-white font-sans">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
                    {/* Logo + About */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-[3px] after:bg-[#4fc1e9]">
                            Zenexis
                        </h3>
                        <p className="text-sm leading-relaxed text-[#b3b3b3]">
                            Empowering digital transformation through innovative IT services, printing, graphic design,
                            and device repair solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#4fc1e9]">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 text-sm text-[#b3b3b3]">
                            <li><a href="#" className="hover:text-[#4fc1e9] hover:translate-x-1 transition">Home</a>
                            </li>
                            <li><a href="#" className="hover:text-[#4fc1e9] hover:translate-x-1 transition">About Us</a>
                            </li>
                            <li><a href="#" className="hover:text-[#4fc1e9] hover:translate-x-1 transition">Services</a>
                            </li>
                            <li><a href="#"
                                   className="hover:text-[#4fc1e9] hover:translate-x-1 transition">Portfolio</a></li>
                            <li><a href="#" className="hover:text-[#4fc1e9] hover:translate-x-1 transition">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#4fc1e9]">
                            Our Services
                        </h4>
                        <ul className="space-y-3 text-sm text-[#b3b3b3]">
                            <li><a href="#" className="hover:text-[#4fc1e9] hover:translate-x-1 transition">Software
                                Development</a></li>
                            <li><a href="#" className="hover:text-[#4fc1e9] hover:translate-x-1 transition">Printing &
                                Graphic Design</a></li>
                            <li><a href="#" className="hover:text-[#4fc1e9] hover:translate-x-1 transition">PC & Mobile
                                Repair</a></li>
                            <li><a href="#" className="hover:text-[#4fc1e9] hover:translate-x-1 transition">Sales &
                                Accessories</a></li>
                            <li><a href="#" className="hover:text-[#4fc1e9] hover:translate-x-1 transition">Communication
                                Services</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#4fc1e9]">
                            Contact Us
                        </h4>
                        <ul className="text-sm text-[#b3b3b3] space-y-3">
                            <li>+94 70 712 0945</li>
                            <li>zenexis@gmail.com</li>
                            <li className="leading-relaxed">
                                Zenexis,<br/>
                                Poddiwala, Maththaka.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-6 text-center">
                    <p className="text-xs text-[#b3b3b3] mb-2">
                        &copy; {new Date().getFullYear()} Zenexis. All rights reserved.
                    </p>
                    <div className="flex justify-center gap-6 text-xs text-[#b3b3b3]">
                        <a href="#" className="hover:text-[#4fc1e9] transition">Privacy Policy</a>
                        <a href="#" className="hover:text-[#4fc1e9] transition">Terms of Service</a>
                        <a href="#" className="hover:text-[#4fc1e9] transition">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}