import React, { useState } from 'react';
import Image from 'next/image';
import Calandar from "public/calendar.png"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { LazyMotion, domAnimation, m, motion } from "framer-motion"
import PanelSocial from '../Common/PanelSocial';
import { FaRegCircle, FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from 'next/link';
import ModalCheckMailAddress from '../Common/Modal/ModalCheckMailAddress';


const Zero_To_Hero = () => {
    const [open, setOpen] = useState(false)
    const [formValue, setFormValue] = useState({})
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Vui lòng nhập tên của bạn!'),
            email: Yup.string().email('Email của bạn không đúng').required('Vui lòng nhập email của bạn!'),
        }),
        onSubmit: values => {
            setOpen(true)
            setFormValue({
                name: values.name,
                email: values.email
            })
        },
    });

    const handleCollectionEmail = async (values: any) => {
        try {
            toast.loading('Waiting...');
            const { data } = await axios({
                method: 'post',
                url: 'http://localhost:8888/api/v1/collection-mail-zero-to-hero',
                data:
                    formValue
            })
            if (data.success) {
                setOpen(false)
                formik.resetForm();
                toast.dismiss();
                toast.success('Mình đã gửi cho bạn rồi đó! Bạn kiểm tra mail nhé', { duration: 6000 });
            } else {
                toast.dismiss();
                toast.error('This is an error!');
            }

        } catch (error: any) {
            setOpen(false)
            toast.dismiss();
            toast.error(error.response.data.message.toString(), { duration: 6000 });
        }
    }

    return (
        <div className='w-full min-h-screen h-full bg-[#0b0b0b]'>
            <PanelSocial color='#2B3235' />
            <Toaster position="bottom-center" reverseOrder={false} />
            <div className='w-full min-h-screen h-full relative py-[30px]'>
         
                <div className='text-[White] 1500px:px-[100px] 1000px:px-[80px] px-[50px] 800px:mb-[25px] mb-[10px]'>

                    <LazyMotion features={domAnimation}>
                        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            transition={{ duration: 2, delay: 0.5 }}
                        >
                            <h1 className='1100px:text-[36px] 800px:text-[34px] text-[26px] text-left font-extrabold'>Đăng kí nhận <br /> <span className='hero__major-title'>Tài liệu Lộ Trình Social Media Manager Từ Con Số 0 </span>miễn phí</h1>
                            <div className='flex items-center gap-1 w-fit'>
                                <FaRegCircle size={14} className="sub-icon__RegCircle " />
                                <Link href={"/"} className='text-[14px] text-left font-light w-fit' style={{ borderBottom: "1px solid gray" }}>Nhận các Templates khác Miễn Phí</Link>
                            </div>
                        </m.div>
                    </LazyMotion>
                </div>
                <div className='w-full h-full flex 800px:flex-row flex-col items-center justify-center 800px:justify-start 800px:pr-[50px]'>
                    <motion.div
                        initial={{ height: 1, y: 0 }}
                        animate={{ height: "auto", y: 0 }}
                        transition={{ ease: "easeOut", duration: 2, delay: 1 }}
                    >
                        <div className='w-full max-w-[1100px] relative'>
                            <motion.div
                                initial={{ x: -2000, y: 0 }}
                                animate={{ x: 0 }}
                                transition={{ ease: "easeOut", duration: 1 }}
                            >
                                <div className='absolute 800px:block hidden w-[107%] h-full top-0 left-0 border-[3px] border-[white]' style={{ borderLeft: "none", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}></div>
                            </motion.div>
                            <div className=' relative z-20 w-full 800px:text-[16px] text-[14px] flex flex-col gap-4 text-justify 1500px:px-[100px] 1000px:px-[80px] px-[50px] 800px:py-[30px] py-[20px] text-[white] font-bold'>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                    className=' w-full flex justify-center'
                                >
                                    <div className='max-w-[350px]'>
                                        <Image src={Calandar} alt='Calandar'></Image>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                >
                                    <p>Mình đã tổng hợp <span className='text-[#FC61A7] font-bold'> 2-3 mẫu Content Calendar</span> thông dụng trong quá trình lên plan, schedule lịch đăng dành cho các bạn làm<span className='text-[#FC61A7] font-bold'> Social Media hoặc đơn giản bạn muốn quản lí lịch trình cho kênh của mình.</span></p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1.5 }}
                                >
                                    <p>Template mình tổng hợp có tích hợp cả Excel ở phần <span className='text-[#FC61A7] font-bold'>Draft Date, Published Date và End Date</span> nên bạn vui lòng điền đủ ngày để sử dụng được Calendar nhé!</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 2 }}
                                >
                                    <p>Bạn vui lòng điền đúng thông tin dưới đây, mình sẽ gửi bạn thông tin template ngay lập tức nhé, bạn nhớ check mục <span className='text-[#FC61A7] font-bold'>“Spam”</span> và <span className='text-[#FC61A7] font-bold'>“Promotion”</span> giúp mình nha!</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 2.5 }}
                                >
                                    <p>Bạn <span className='text-[#FC61A7] font-bold'>nhớ check kĩ email trước khi bấm “Đăng kí ”</span> nha, sai email là không nhận được đâu đó!</p>
                                </motion.div>
                            </div>

                        </div>
                    </motion.div>
                    <div className='z-30'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 3 }}
                        >
                            <div className='800px:border-[3px] border-[white] md:bg-[#0b0b0b] bg-transparent py-[30px] px-[30px] w-full rounded-xl'>
                                <form action="" className='flex flex-col gap-[1px] min-w-[300px] w-full' spellCheck="false" onSubmit={formik.handleSubmit}>
                                    <div>
                                        <input type="text"
                                            name='name'
                                            placeholder='Họ và tên của bạn:'
                                            className={`input-ld 800px:text-[18px] text-[16px]`}
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                        />
                                    </div>

                                    <div className="error h-[20px]">
                                        {
                                            formik.touched.name && formik.errors.name ? (
                                                <div className='800px:text-[18px] text-[16px]'>{formik.errors.name}</div>
                                            ) : null
                                        }
                                    </div>
                                    <div className='mt-3'>
                                        <input type="email"
                                            name='email'
                                            placeholder='Nhập email của bạn:'
                                            className={`input-ld 800px:text-[18px] text-[16px]`}
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                        />
                                    </div>

                                    <div className="error h-[2px]">
                                        {
                                            formik.touched.email && formik.errors.email ? (
                                                <div className='800px:text-[18px] text-[16px]'>{formik.errors.email}</div>
                                            ) : null
                                        }
                                    </div>

                                    <div className="flex justify-center mt-[40px]">
                                        {
                                            open && (
                                                <ModalCheckMailAddress open={open} setOpen={setOpen} formValue={formValue} handleCollectionEmail={handleCollectionEmail} />
                                            )
                                        }
                                        <button type='submit' className={`button-ld w-full py-[10px] px-[10px] border-[#2B3235] border-[3px] bg-gradi text-white`}><span className='font-bold'>ĐĂNG KÍ NHẬN TEMPLATE</span></button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className='background-overlay bg-pattern absolute left-0 top-0'></div>
            </div>

        </div>
    );
};

export default Zero_To_Hero;