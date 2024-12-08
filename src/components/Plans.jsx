import React from 'react'
import { plans } from '../assets/assets'
import { motion } from 'framer-motion'

const Plans = () => {
    return (
        <div className='bg-[#151515] py-24 sm:py-32' id='plan'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='mx-auto max-w-2xl lg:text-center'>
                    <h2 className="text-base/7 font-semibold text-[#00ff21]">Our Plan</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
                        Choose your pricing plan
                    </p>
                </motion.div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                        {
                            plans.map((item) => (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    key={item._id} className="relative p-8 w-full border cursor-pointer border-gray-700 
                                text-white shadow-lg transform -skew-y-3 group hover:bg-white transition-colors duration-300">
                                    <div className="transform skew-y-3">
                                        <h2 className="text-3xl font-bold text-center my-3 group-hover:text-black transition-colors duration-300">{item.name}</h2>
                                        <h3 className="text-6xl font-bold text-center text-[#00ff21] mt-6 mb-3">${item.price}</h3>
                                        <p className="text-sm text-center mb-4 group-hover:text-gray-800 transition-colors duration-300">{item.class}</p>

                                        <ul className="text-center space-y-2 mb-6 text-[15px] text-gray-400 py-4">
                                            {
                                                item.desc.map((pln, index) => (
                                                    <li key={index} className='group-hover:text-black transition-colors duration-300 py-1 font-mulish'>{pln}</li>
                                                ))
                                            }

                                        </ul>

                                        <div className="flex justify-center my-4">
                                            <button className="bg-gray-700 hover:bg-gray-800 group-hover:bg-[#00ff21] transition-colors duration-300 px-6 py-2 rounded uppercase font-semibold">
                                                Enroll Now
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        }


                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Plans