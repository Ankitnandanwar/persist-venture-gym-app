import React from 'react'
import { testimonial } from '../assets/assets'
import { motion } from 'framer-motion'


const Testimonial = () => {
    return (
        <div className='py-24 sm:py-32 bg-black'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='mx-auto max-w-2xl lg:text-center'>
                    <h2 className="text-base/7 font-semibold text-[#00ff21]">TESTIMONIALS</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
                        What our users say
                    </p>
                </motion.div>


                <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                    {
                        testimonial.map((item) => (
                            <motion.article
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                key={item._id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime="2020-03-16" className="text-[#00ff21]">
                                        {item.date}
                                    </time>
                                </div>
                                <div className="group relative">
                                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-200 font-mulish">{item.desc}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img alt="" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="size-10 rounded-full bg-gray-50" />
                                    <div className="text-sm/6">
                                        <p className="font-semibold text-gray-200">
                                            <span className="absolute inset-0" />
                                            {item.auth_name}
                                        </p>
                                        <p className="text-gray-500">{item.role}</p>
                                    </div>
                                </div>
                            </motion.article>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default Testimonial