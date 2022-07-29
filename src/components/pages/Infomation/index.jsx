import React from 'react';
import './styles.scss';
import { useInView } from 'react-intersection-observer';

function Information(props) {

    const [refName, inViewName] = useInView({
        threshold: 1
    });

    const [refDay, inViewDay] = useInView({
        threshold: 1
    });
    const [refGender, inViewGender] = useInView({
        threshold: 1
    });
    const [refmail, inViewMail] = useInView({
        threshold: 1
    });
    const [refAddress, inViewAddress] = useInView({
        threshold: 0.8
    });

  return (
    <div id='information' className='information position-relative col-xs w-100vw h-100vh flex-center'
        ref={refAddress}
    >
        <div className='back-home'>
            <a href='#home' className='flex-center flex-direction-column color-dark text-decoration-none'>
               
            </a>
        </div>
        <div className='information-bg' />
        <div className='position-absolute title'>
            <p>### My Information {'>>>'} <span></span> </p>
        </div>
        <div className='wrap d-flex justify-content-center flex-direction-column h-60% border-radius-8 px-24 font-size-14'
            ref={refmail}
        >
            <div className={`${inViewName? 'appear-animation' : 'none'} d-flex color-green my-12 tr-all-ease-in-out-4`}

            >
                <p className='w-24% d-flex align-items-center'>
                    Full Name 
                </p>
                <p className='border px-20 py-8 ml-16 w-40% border-radius-4 font-weight-bolder'>
                    Đặng Duy Quốc
                </p>
            </div>
            <div className={`${inViewDay? 'appear-animation' : 'none'} d-flex color-green my-12 tr-all-ease-in-out-4`}
            >
                <p className='w-24% d-flex align-items-center'>
                    Birthday 
                </p>
                <p className='border text-align-center px-20 py-8 ml-16 w-40% border-radius-4'>
                    16/03/1998
                </p>
            </div>
            <div className={`${inViewGender? 'appear-animation' : 'none'} d-flex color-green my-12 tr-all-ease-in-out-4`}
                 ref={refName}
            >
                <p className='w-24% d-flex align-items-center'>
                    Gender 
                </p>
                <span className='text-align-center border px-20 py-8 ml-16 w-40% border-radius-4'>
                    Male
                </span>
            </div>
            <div className={`${inViewGender? 'appear-animation' : 'none'} d-flex color-green my-12 tr-all-ease-in-out-4`}
                 ref={refDay}
            >
                <p className='w-24% d-flex align-items-center'>
                    Phone 
                </p>
                <span className='text-align-center border px-20 py-8 ml-16 w-40% border-radius-4'>
                    +84 354 028885
                </span>
            </div>
            <div className={`${inViewMail? 'appear-animation' : 'none'} d-flex color-green my-12 tr-all-ease-in-out-4`}
                ref={refGender}
            >
                <p className='w-24% d-flex align-items-center'>
                    Mail
                </p>
                <span className='text-align-center border px-20 py-8 ml-16 w-60% border-radius-4'>
                    Duyquoc2018bt@gmail.com
                </span>
            </div>
            <div className={`${inViewAddress? 'appear-animation' : 'none'} d-flex color-green my-12 tr-all-ease-in-out-4`}
            >
                <p className='w-24% d-flex align-items-center'>
                    Address 
                </p>
                <span className='text-align-center border px-20 py-8 ml-16 w-60% border-radius-4'>
                   Binh Thanh district, Ho Chi Minh.
                </span>
            </div>
        </div>
    </div>
  )
}

export default Information