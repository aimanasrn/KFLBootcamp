// import React from 'react';
import { useState } from 'react';
import { navLinks } from '../constants'
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [active, setActive] = useState("Utama");
    const [toggle, setToggle] = useState(false);
  return(
    <nav className="w-full flex py-6 justify-between items-center navbar">
        {/* <img src={logo} alt="kflbootcamp" className="w-[124px] h-[32px]" /> */}
        <h3>Logo</h3>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`} onClick={() => setActive(nav.title)}>
                    <a href={`${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
            <button className="object-contain" onClick={() => setToggle(!toggle)}>
                {toggle ? <X size={28} /> : <Menu size={28} />}
            </button>
            <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-slate-300 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                    {navLinks.map((nav,index) => (
                        <li key={nav.id} className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length -1 ? "mb-0" : "mb-4"}`} onClick={() => setActive(nav.title)}>
                            <a href={`${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar