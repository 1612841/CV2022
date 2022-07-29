import React, { useState } from 'react';
import './styles.scss';
import { FaBars } from 'react-icons/fa'

function SideBar() {

    const [active, setActive] = useState(false);

    const activeSideBar = () => {
        setActive(true);
    }

    const deactivationSideBar = () => {
        setActive(false);
    }

  return (
    <div className={`${active? '' : 'none-active'} ${active? 'bg-active' : 'bg-none-active'} sidebar position-fixed l-0 t-0 b-0 w-56vw max-w-420 h-100vh z-index-12 tr-all-ease-in-out-4`}
         onMouseEnter={activeSideBar}
         onMouseLeave={deactivationSideBar}
    >
        <div className='menu'>
            <a onClick={deactivationSideBar} href='#information' className={`${active? '' : 'visibility-hidden opacity-0'} btn text-align-center text-decoration-none`}>
                Information
            </a>
            <a onClick={deactivationSideBar} href='#skills' className={`${active? '' : 'visibility-hidden opacity-0'} btn text-align-center text-decoration-none`}>
                Skills and skillset
            </a>
            <a onClick={deactivationSideBar} href='#education' className={`${active? '' : 'visibility-hidden opacity-0'} btn text-align-center text-decoration-none`}>
                Education
            </a>
            <a onClick={deactivationSideBar} href='#experience' className={`${active? '' : 'visibility-hidden opacity-0'} btn text-align-center text-decoration-none`}>
                Experience
            </a>
            <a onClick={deactivationSideBar} href='#projects' className={`${active? '' : 'visibility-hidden opacity-0'} btn text-align-center text-decoration-none`}>
                Projects
            </a>
        </div>
        <div className='position-absolute r-2 t-50% b-50%' onClick={activeSideBar}>
            <FaBars className='icon-bar' />
        </div>
    </div>
  )
}

export default SideBar