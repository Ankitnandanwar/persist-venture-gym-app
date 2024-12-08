import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { faq } from '../assets/assets';
import { motion } from 'framer-motion'


const Faq = () => {

    const [expand, setExpand] = useState(null)

    const toggleExpand = (id) => {
        setExpand((prevId) => (prevId === id ? null : id));
      };

    return (
        <div className='py-24 sm:py-32 bg-[#151515]' id='faq'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <motion.div 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mx-auto max-w-2xl lg:text-center'>
                    <h2 className="text-base/7 font-semibold text-[#00ff21]">FAQs</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
                        Find answers to your questions
                    </p>
                </motion.div>

                <div className='my-6'>

                    {
                        faq.map((item) => (
                            <div key={item._id} className='shadow rounded border border-gray-700 mt-3'>
                                <div className='p-4 text-xl relative font-medium'>
                                    <div className='lg:w-5/6 w-full text-white'>
                                        <h2>{item.quest}</h2>
                                    </div>
                                    <button aria-label='question-expander'
                                        className='text-xl absolute top-0 right-0 p-4 focus:outline-none'
                                        onClick={() => toggleExpand(item._id)}>
                                        {
                                            expand === item._id ?
                                                <IoIosArrowUp className='w-5 text-white' /> :
                                                <IoIosArrowDown className='w-5 text-white' />
                                        }
                                    </button>
                                </div>
                                <div className={`p-4 font-mulish text-gray-300 transition-all duration-500 ease-in-out ${expand ===  item._id ?'block': 'hidden'}`}>
                                    {item.ans}
                                </div>
                            </div>
                        ))
                    }







                </div>
            </div>
        </div>
    )
}

export default Faq