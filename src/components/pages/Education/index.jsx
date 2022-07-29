import React from 'react';
import './styles.scss';
import { useInView } from 'react-intersection-observer';

function Educations() {

    const [refOne, inViewOne] = useInView({
        threshold: 1
    });
    const [refTwo, inViewTwo] = useInView({
        threshold: 0.9
    });
    const [refThree, inViewThree] = useInView({
        threshold: 1
    });

  return (
    <div id='education' className='education position-relative w-100vw h-100vh flex-center flex-direction-column font-size-14'>
        <h2 className='px-12 py-8 my-24'>Education</h2>
        <div className='wrap d-flex justify-content-center flex-direction-column color-green font-style-italic'
             ref={refThree}
        >
            <div className={`${inViewOne? '' : 'disappear'} px-24 py-8 mx-auto my-12 w-260 border border-radius-8 bg-light tr-all-ease-in-out-3`}>
                <p className='p-4'>*** 2020-2021</p>
                <p className='p-4'># Major Fullstack Web With React</p>
                <p className='p-4'># Coursera-KHUST</p>
            </div>
            <div className={`${inViewTwo? '' : 'disappear'} px-24 py-8 mx-auto my-12 w-260 border border-radius-8 bg-light tr-all-ease-in-out-3`}
                ref={refOne}
            >
                <p className='p-4'>*** 2021-2022</p>
                <p className='p-4'># Major Web Development</p>
                <p className='p-4'># PluralSight - Microsoft</p>
            </div>
            <div className={`${inViewThree? '' : 'disappear'} px-24 py-8 mx-auto my-12 w-260 border border-radius-8 bg-light tr-all-ease-in-out-3`}
                 ref={refTwo}
            >
                <p className='p-4'>*** 2016-2021</p>
                <p className='p-4'># Major Petroleum</p>
                <p className='p-4'># HCMUT</p>
            </div>
        </div>
    </div>
  )
}

export default Educations