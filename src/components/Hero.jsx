import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Hero = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const slideContentAnimation = {
        initial: { x: '100%', opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 1.5 } },
        exit: { x: '100%', opacity: 0, transition: { duration: 1.5 } },
    };

    const slideContentAnimation2 = {
        initial: { x: '-100%', opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 1.5 } },
        exit: { x: '100%', opacity: 0, transition: { duration: 1.5 } },
    };

    return (
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="max-w-full max-h-screen" id='home'>

            <SwiperSlide className='swiperSlide relative'>
                <img src={assets.banner1} className='w-full md:h-full object-cover h-96' />
                {
                    activeIndex === 0 && (
                        <motion.div
                            key="slide1"
                            variants={slideContentAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className='absolute md:top-1/4 md:right-0 md:w-1/2 w-full text-center md:text-start top-10 right-0'>
                            <p className='text-lg text-white italic font-semibold font-garmond mb-6'>Special Occasion Workout</p>
                            <h2 className='md:text-5xl text-xl text-white uppercase tracking-widest md:my-2 font-semibold font-josefin'>Be Strong Training</h2>
                            <h2 className='md:text-5xl text-xl text-white uppercase tracking-widest font-semibold'>Hard</h2>
                            <p className='md:w-4/5 w-screen mt-5 text-white text-[14px] leading-6 tracking-wider font-poppins'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sed totam, magnam necessitatibus dolorem.</p>
                            <div className='mt-10 flex gap-4 justify-center md:justify-normal'>
                                <button className='border px-5 py-2 text-lg font-garmond font-medium rounded-sm text-black italic bg-white hover:bg-transparent hover:text-white transition-all ease-in-out duration-500'>Get Info</button>
                                <button className='border px-5 py-2 text-lg font-garmond font-medium rounded-sm text-white italic hover:bg-white hover:text-black transition-all ease-in-out duration-500'>Read More</button>
                            </div>
                        </motion.div>
                    )
                }

            </SwiperSlide>

            <SwiperSlide className='swiperSlide relative'>
                <img src={assets.banner3} className='w-full md:h-full object-cover h-96' />
                {
                    activeIndex === 1 && (
                        <motion.div
                            key="slide2"
                            variants={slideContentAnimation2}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className='absolute md:top-1/4 md:left-16 md:w-1/2 w-full text-center md:text-start top-10 left-0'>
                            <p className='text-lg text-white italic font-semibold font-garmond mb-6'>Special Occasion Workout</p>
                            <h2 className='md:text-5xl text-xl text-white uppercase tracking-widest md:my-2 font-semibold font-josefin'>Be Strong Training</h2>
                            <h2 className='md:text-5xl text-xl text-white uppercase tracking-widest font-semibold'>Hard</h2>
                            <p className='md:w-4/5 w-screen mt-5 text-white text-[14px] leading-6 tracking-wider font-poppins'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sed totam, magnam necessitatibus dolorem.</p>
                            <div className='mt-10 flex gap-4 justify-center md:justify-normal'>
                                <button className='border px-5 py-2 text-lg font-garmond font-medium rounded-sm text-black italic bg-white hover:bg-transparent hover:text-white transition-all ease-in-out duration-500'>Get Info</button>
                                <button className='border px-5 py-2 text-lg font-garmond font-medium rounded-sm text-white italic hover:bg-white hover:text-black transition-all ease-in-out duration-500'>Read More</button>
                            </div>
                        </motion.div>
                    )
                }

            </SwiperSlide>

            <SwiperSlide className='swiperSlide relative'>
                <img src={assets.banner4} className='w-full md:h-full object-cover h-96' />
                {
                    activeIndex === 2 && (
                        <motion.div
                            key="slide3"
                            variants={slideContentAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className='absolute md:top-1/4 md:right-0 md:w-1/2 w-full text-center md:text-start top-10 right-0'>
                            <p className='text-lg text-white italic font-semibold font-garmond mb-6'>Special Occasion Workout</p>
                            <h2 className='md:text-5xl text-xl text-white uppercase tracking-widest md:my-2 font-semibold font-josefin'>Be Strong Training</h2>
                            <h2 className='md:text-5xl text-xl text-white uppercase tracking-widest font-semibold'>Hard</h2>
                            <p className='md:w-4/5 w-screen mt-5 text-white text-[14px] leading-6 tracking-wider font-poppins'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sed totam, magnam necessitatibus dolorem.</p>
                            <div className='mt-10 flex gap-4 justify-center md:justify-normal'>
                                <button className='border px-5 py-2 text-lg font-garmond font-medium rounded-sm text-black italic bg-white hover:bg-transparent hover:text-white transition-all ease-in-out duration-500'>Get Info</button>
                                <button className='border px-5 py-2 text-lg font-garmond font-medium rounded-sm text-white italic hover:bg-white hover:text-black transition-all ease-in-out duration-500'>Read More</button>
                            </div>
                        </motion.div>
                    )
                }

            </SwiperSlide>
        </Swiper>
    )
}

export default Hero