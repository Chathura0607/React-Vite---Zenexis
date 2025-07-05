// import './MainContent.css'
// import {Route, Routes} from "react-router-dom";
// import {Home} from "../../pages/Home/Home.tsx";
// import {About} from "../../pages/About/About.tsx";
// import {Contact} from "../../pages/Contact/Contact.tsx";
//
// export function MainContent() {
//     return (
//         <div className="main-content">
//             <Routes>
//                 <Route path="/" element={<Home/>}/>
//                 <Route path="/home" element={<Home/>}/>
//                 <Route path="/about" element={<About/>}/>
//                 <Route path="/contact" element={<Contact/>}/>
//             </Routes>
//         </div>
//     );
// }

import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Contact} from "../../pages/Contact/Contact.tsx";
import React from "react";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart.tsx";

export function MainContent() {
    return (
        <div className="flex justify-center items-center min-h-screen p-1 font-serif">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/shopping-cart" element={<ShoppingCart/>}/>
            </Routes>
        </div>
    );
}
