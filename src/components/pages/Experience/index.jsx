import React from 'react';
import './styles.scss';
import { useInView } from 'react-intersection-observer';

function Experience() {

    const [refIntern, inViewIntern] = useInView({
        threshold: 1
    });
    const [refFreelance, inViewFreelance] = useInView({
        threshold: 0.6
    });
    const [refFulltime, inViewFulltime] = useInView({
        threshold: 1
    })

  return (
    <div id='experience' className='experience w-100vw h-100vh flex-center'>
        <div className='flex-center w-auto h-58% position-relative'>
            <div className={`wrap-content`}
                ref={refFulltime}
            >
                <div className={`${inViewIntern? 'item' : 'item-none'} tr-all-ease-in-out-4`}>
                    <p className='py-4 font-weight-bolder font-size-14'>Internship</p>
                    <p className='py-4 font-size-12'>FrontEnd Development</p>
                    <p className='py-4 font-size-12'>09/2021 - 11/2021</p>
                    <p className='py-4 font-size-12'>at ITBee Solutions</p>
                </div>
                <div className={`${inViewFreelance? 'item' : 'item-none'} tr-all-ease-in-out-4`}
                    ref={refIntern}
                >
                    <p className='py-4 font-weight-bolder font-size-14'>Freelance</p>
                    <p className='py-4 font-size-12'>FrontEnd Development</p>
                    <p className='py-4 font-size-12'>12/2021 - 04/2022</p>
                </div>
                <div className={`${inViewFulltime? 'item' : 'item-none'} tr-all-ease-in-out-4`}
                    ref={refFreelance}
                >
                    <p className='py-4 font-weight-bolder font-size-14'>Fulltime</p>
                    <p className='py-4 font-size-12'>FrontEnd Development</p>
                    <p className='py-4 font-size-12'>04/2022 - 07/2022</p>
                    <p className='py-4 font-size-12'>at Inapps Technology</p>
                </div>
            </div>
            <div className={`title-content font-size-24 font-weight-bolder h-100%`}>
                <p className='border border-radius-8 mx-32 px-32 py-6 color-dark'>
                    Experience
                </p>
            </div>
        </div>
    </div>
  )
}

export default Experience