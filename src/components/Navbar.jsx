import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    let Links = [
        { name: 'HOME', link: '#home' },
        { name: 'FEATURES', link: '#feature' },
        { name: 'DIET PLAN', link: '#dietplan' },
        { name: 'WORKOUT PLANS', link: '#plan' },
        { name: 'BLOGS', link: '#blog' },
        { name: 'FAQS', link: '#faq' },
        { name: 'CONTACT', link: '#contact' },

    ]

    const handleLinkClick = (e, link) => {
        e.preventDefault()
        const targetElement = document.querySelector(link)
        if(targetElement){
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
        setMobileMenuOpen(false)
    }



    return (

        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='md:flex items-center justify-between bg-black py-4 px-7 md:px-10'>
                <img src={assets.logo} alt="logo" className='w-36 cursor-pointer' />
                <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='text-2xl text-white cursor-pointer absolute right-8 top-6 md:hidden'>
                    {
                        mobileMenuOpen ? <IoMdClose className='text-white' /> : <RiMenu3Fill className='text-white' />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black
                md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in
                ${mobileMenuOpen ? 'top-16 opacity-100' : 'top-[-490px]'} md:opacity-100`}>
                    {
                        Links.map((item) => (
                            <li key={item.name} className='md:ml-8 relative text-[12px] md:my-0 my-7'>
                                <a href={item.link} className='text-white hover:text-[#00ff21] duration-500 
                                tracking-widest font-medium' onClick={(e)=> handleLinkClick(e, item.link)}>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>

                <div className='md:block hidden'>
                    <div className='flex items-center gap-6'>
                        <button className='bg-white px-2 py-1 rounded-sm hover:bg-[#00ff21] hover:text-gray-800 transition-all duration-300'>Get Started</button>
                        <button className='bg-white px-2 py-1 rounded-sm hover:bg-[#00ff21] hover:text-gray-800 transition-all duration-300'>Login</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Navbar