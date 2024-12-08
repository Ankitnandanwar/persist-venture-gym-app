import React from 'react'
import { motion } from 'framer-motion'
import { features } from '../assets/assets';


const Features = () => {
    return (
        <div className='py-24 sm:py-32 bg-black' id='feature'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='mx-auto max-w-2xl lg:text-center'>
                    <h2 className="text-base/7 font-semibold text-[#00ff21]">FEATURES</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
                        Discover our app's key features
                    </p>
                    <p className="mt-6 text-lg/8 text-white font-mulish">
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                        pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    </p>
                </motion.div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
                        {
                            features.map((item) => (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    key={item._id} className="w-full h-full py-4 cursor-pointer group">
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="w-20 h-20 bg-gray-800 rounded-full flex justify-center 
                                        items-center transition-colors duration-300 group-hover:bg-[#00ff21]">
                                            <item.featicon className="text-[#00ff21] text-4xl transition-colors 
                                            duration-500 group-hover:text-gray-800" />
                                        </div>
                                        <h1 className="text-white my-3 text-xl font-semibold">{item.name}</h1>
                                        <p className="text-gray-400 leading-6 text-center font-mulish text-sm">{item.desc}</p>
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

export default Features