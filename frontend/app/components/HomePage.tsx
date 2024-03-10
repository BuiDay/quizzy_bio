import React from 'react';
import Image from 'next/image';
import { LazyMotion, domAnimation, m, motion } from "framer-motion"
import PanelSocial from './Common/PanelSocial';
import Link from 'next/link';
import Quizzy from '../../public/quizzy-removebg.webp'

const HomePage = () => {

    return (
        <div className='w-full min-h-screen h-full bg-[#0b0b0b] flex flex-col items-center'>
            <PanelSocial color='white' />
            <div className='w-full min-h-screen h-full flex 1100px:flex-row flex-col gap-[30px] relative px-[20px]'>
                <div className='background-overlay bg-pattern absolute left-0 top-0'></div>
                <div className='1100px:w-[50%] 1100px:min-h-screen h-full md:flex justify-center items-center 1100px:px-[70px] md:px-[30px] md:pt-[100px] pt-[30px]'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='1100px:h-[250px] 1100px:w-[250px] md:h-[200px] md:w-[200px] h-[200px] w-[200px] rounded-full border-[3px] overflow-hidden'>
                            <Image className='object-cover scale-125' src={Quizzy} alt='quizzy' width={500} height={1000}></Image>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='md:text-[38px] text-[30px] font-extrabold hero__major-title text-center'>Quizzy Học Marketing</h1>
                        </div>
                        <div className='1100px:px-[0px] px-[30px] md:text-[18px] text-[16px]'>
                            <ul className='list-disc flex flex-col gap-[10px] text-white'>
                                <li>2,5+ năm kinh nghiệm trong lĩnh vực Social Media Marketing/Personal Branding</li>
                                <li>Sỡ hữu hệ sinh thái đa nền tảng hơn 150.000 followers</li>
                                <li>Founder QCC Mastery Hub - khoá học dạy trực tiếp online Social Media & Content Foundation</li>
                                <li>Social Media Manager & Project Manager tại Futur Creators/Futur Growth</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='1100px:w-[50%] flex justify-center items-center 1100px:px-[50px] md:px-[40px] px-[30px] pb-[30px]'>
                    <div className='flex flex-col gap-10 w-full items-center justify-center'>
                        <Link href={'/zero-to-hero'} className='module-border-wrap rounded-xl items-shadow cursor-pointer flex items-center py-[10px] px-10 w-[100%] justify-center gap-5'>
                            <div className=''>
                                <h2 className=' text-[white] text-center font-medium md:text-[18px] text-[14px] p-3'>Nhận tài liệu Lộ Trình Social Media Manager Từ Con Số 0 Miễn Phí</h2>
                            </div>
                        </Link>
                        <Link href={'/content-calendar'} className='module-border-wrap rounded-xl items-shadow cursor-pointer flex items-center py-[10px] px-4 w-[100%] justify-center gap-5'>
                            <div className='module'>
                                <h2 className=' text-[white] text-center font-medium md:text-[18px] text-[14px] p-3'>Nhận Template Content Calendar Miễn Phí</h2>
                            </div>
                        </Link>
                        <Link href={'/content-creation'} className='module-border-wrap rounded-xl items-shadow cursor-pointer flex items-center py-[10px] px-4 w-[100%] justify-center gap-5'>
                            <div className='module'>
                                <h2 className=' text-[white] text-center font-medium md:text-[18px] text-[14px] p-3'>Nhận Template Content Creation Miễn Phí</h2>
                            </div>
                        </Link>
                        <Link href={'/action-cta'} className='module-border-wrap rounded-xl items-shadow cursor-pointer flex items-center py-[10px] px-4 w-[100%] justify-center gap-5'>
                            <div className='module'>
                                <h2 className=' text-[white] text-center font-medium md:text-[18px] text-[14px] p-3'>Nhận CTA Template Miễn Phí</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;