import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <>
            <footer className='bg-black py-20 sm:py-32 lg:py-0' id='contact'>
                <div className='mx-auto py-14 lg:px-4 px-12'>
                    <div className='grid md:grid-cols-12 grid-cols-1 gap-7'>
                        <div className='xl:col-span-4 md:col-span-12 col-span-12'>
                            <img className='h-12 xl:pl-14 w-100 lg' src={assets.logo}
                                alt='logo' />
                            <p className='mt-3 xl:pr-14 xl:pl-14 leading-7 text-[14px] sm:flex-wrap text-white tracking-wide font-medium font-mulish'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna
                            </p>
                        </div>


                        <div className='xl:col-span-2 md:col-span-6 col-span-12'>
                            <h5 className='text-white font-bold text-xl uppercase'>Useful links</h5>
                            <ul className='list-none mt-5 space-y-3 text-[14px] font-mulish text-gray-400 cursor-pointer'>
                                <li>
                                    About
                                </li>
                                <li>
                                    Blog
                                </li>
                                <li>
                                    Classes
                                </li>
                                <li>
                                    Contact
                                </li>
                            </ul>
                        </div>

                        <div className='xl:col-span-2 md:col-span-6 col-span-12'>
                            <h5 className='text-white font-bold text-xl uppercase'>Support</h5>
                            <ul className='list-none mt-5 space-y-3 text-[14px] font-mulish text-gray-400 cursor-pointer'>
                                <li>
                                    Login
                                </li>
                                <li>
                                    My account
                                </li>
                                <li>
                                    Subscribe
                                </li>
                                <li>
                                    Contact
                                </li>
                            </ul>
                        </div>


                        <div className='xl:col-span-4 md:col-span-6 col-span-12'>
                            <h5 className='tracking-wide text-dark-100 font-bold text-white uppercase'>Contact Details</h5>
                            <ul className='list-none mt-5 space-y-3 text-[14px] cursor-pointer font-mulish text-gray-400'>
                                <li>
                                    <h6 className='tracking-wide'>
                                        abcgymcompany@gmail.com
                                    </h6>
                                </li>
                                <li>
                                    <h6 className='tracking-wide'>
                                        +999999999
                                    </h6>
                                </li>
                                <li>
                                    <h6 className='tracking-wide'>
                                        123 Main St, Springfield, IL 62704, <br /> Opp. Berry Hill, United States
                                    </h6>
                                </li>
                            </ul>

                        </div>


                    </div>
                    <hr className='mt-10' />
                    <div className='grid md:grid-cols-12 grid-cols-12 mt-5 text-white'>
                        <div className='lg:col-span-4 col-span-12'>
                            <h1 className='lg:pl-20 pt-3 font-medium cursor-pointer tracking-wide'>Terms & Conditions</h1>
                        </div>
                        <div className='lg:col-span-4 col-span-12'>
                            <h1 className='lg:pl-20 pt-3 font-medium cursor-pointer tracking-wide'>All rights reserved {new Date().getFullYear()}@allstates</h1>
                        </div>
                        <div className='lg:col-span-4 col-span-12'>
                            <h1 className='lg:pl-20 pt-3 font-medium cursor-pointer tracking-wide'>Developed by Gym Influencer</h1>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer