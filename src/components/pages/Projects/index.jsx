import React from 'react';
import './styles.scss';
import { useInView } from 'react-intersection-observer';

function Projects() {

  const [refDass, inViewDass] = useInView({
    threshold: 0.4
  });

  const [refTime, inViewTime] = useInView({
    threshold: 0.8
  });

  return (
    <div id='projects' className='projects w-100vw h-100vh flex-center'>
        <div className='font-size-14 flex-center flex-direction-column'
          ref={refTime}
        >
            <p className='font-weight-bolder font-size-22 border my-2% px-24 py-8 lineh-height-24 border-radius-8'>Company Projects</p>
            <div className='line-first my-8'>
                <div className={`${inViewDass? '' : 'none'} project-first border border-radius-8 px-24 py-16 mx-4 tr-all-ease-in-out-3`}>
                    <p className='font-size-14 font-weight-bolder line-height-24 px-12 py-8'>Dayssaki Spa</p>
                    <p className='line-height-24 px-12 py-4'>09/2021 - 12/2021</p>
                    <p className='line-height-24 px-12 py-4'>Member FE: 2</p>
                    <p className='line-height-24 px-12 py-4'>FrontEnd development</p>
                    <p className='line-height-24 px-12 py-4 border border-radius-8 color-green'>Tech-stack: React-Typescript, Antd, Redux, LESS, Http Request</p>
                </div>
                <div className={`${inViewDass? '' : 'none'} project-second border border-radius-8 px-24 py-16 mx-4 tr-all-ease-in-out-4`}>
                    <p className='font-size-14 font-weight-bolder line-height-24 px-12 py-8'>Studio</p>
                    <p className='line-height-24 px-12 py-4'>01/2022 - 06/2022</p>
                    <p className='line-height-24 px-12 py-4'>Member FE: 8</p>
                    <p className='line-height-24 px-12 py-4'>FrontEnd development</p>
                    <p className='line-height-24 px-12 py-4 border border-radius-8 color-green'>Tech-stack: React-Typescript, Redux Toolkit, SCSS, Node.js, Axios</p>
                </div>
            </div>
            <div className='line-second'
              ref={refDass}
            >
                <div className={`${inViewTime? '' : 'none'} project-first border border-radius-8 px-24 py-16 mx-4 tr-all-ease-in-out-3`}>
                    <p className='font-size-14 font-weight-bolder line-height-24 px-12 py-8'>TimeTracker</p>
                    <p className='line-height-24 px-12 py-4'>04/2022 - 06/2022</p>
                    <p className='line-height-24 px-12 py-4'>Member FE: 3</p>
                    <p className='line-height-24 px-12 py-4'>FrontEnd development</p>
                    <p className='line-height-24 px-12 py-4 border border-radius-8 color-green'>Tech-stack: React-Typescript, Charkra UI, Remix, SCSS, React Query</p>
                </div>
                <div className={`${inViewTime? '' : 'none'} project-second border border-radius-8 px-24 py-16 mx-4 tr-all-ease-in-out-4`}>
                    <p className='font-size-14 font-weight-bolder line-height-24 px-12 py-8'>Klikdokter</p>
                    <p className='line-height-24 px-12 py-4'>05/2022 - 06/2022</p>
                    <p className='line-height-24 px-12 py-4'>Member FE: 1</p>
                    <p className='line-height-24 px-12 py-4'>FrontEnd development</p>
                    <p className='line-height-24 px-12 py-4 border border-radius-8 color-green'>Tech-stack: NextJs, Typescript, AntD, Redux, SCSS, Http Request</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects