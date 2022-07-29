import './styles.scss';
import React, { useState, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

function Home (props) {

    const [refHomeName, inViewHomeName] = useInView({
        threshold: 0.8
    });
    const [refHomeCaption, inViewHomeCaption] = useInView({
        threshold: 0.6
    });
    //state 

    const [isShowMenu, setIsShowMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);

    // handle function

    const showMenu = () => {
        setIsShowMenu(true);
    };

    const closeMenu = () => {
        setIsShowMenu(false)
    }

    useMemo(() => {
        if (isShowMenu) {
            setTimeout(() => {
                setActiveMenu(true);
            }, 100)
        } else {
            setActiveMenu(false)
        }
    }, [isShowMenu]);

    useMemo(() => {
        if (!inViewHomeName) {
            closeMenu()
        }
    }, [inViewHomeName]);

    return (
        <div id='home' className='home col-xs position-relative flex-center w-100vw h-100vh' 
            ref={refHomeCaption}
        >
            <div className={`avatar ${activeMenu? 'avatar-active' : ''} tr-all-ease-in-out-3`} />
            <div className='position-absolute w-100vw h-100vh' 
                onClick={closeMenu}
                ref={refHomeName}
            />
            <div className={`${activeMenu? 'name-active' : ''} position-absolute d-flex align-items-center flex-direction-column cursor z-index-2 tr-all-ease-in-out-3`}
                onMouseEnter={showMenu}
            >
                <h1 className={`line-height-32 ${inViewHomeName? 'home-animation' : 'home-none'}  tr-all-ease-in-out-3`}>DANG DUY QUOC</h1>
                <p className={`line-height-32 py-8 color-green ${inViewHomeName? 'home-animation' : 'home-none'}  tr-all-ease-in-out-3 color-green`}>Frontend Development</p>
                <div className={`${activeMenu? 'wrap-caption-active' : 'wrap-caption'} ${inViewHomeCaption? 'caption-animation' : 'caption-none'} position-absolute tr-all-ease-in-out-3 bg-gray-100 w-100% px-12 py-8 border-radius-4`}
                >
                    <p className='font-style-italic font-size-12 text-align-center'>The rain will never cover a sunny sky</p>
                </div>
            </div>
            <div className='z-index-1 flex-center w-90% h-54% border-radius-50%'
                onMouseLeave={closeMenu}
            >
                <a href='#information' className={`${activeMenu? 'menu-one-active' : 'menu-one'} position-absolute text-align-center px-16 py-8 border-radius-8 flex-center tr-all-ease-in-out-3 cursor border font-weight-bold text-decoration-none`}
                >
                    Information
                </a>
                <a href='#skills' className={`${activeMenu? 'menu-two-active' : 'menu-two'} position-absolute text-align-center px-16 py-8 border-radius-8 flex-center tr-all-ease-in-out-3 cursor border font-weight-bold text-decoration-none`}>
                    Skills and Skill Set
                </a>
                <a href='#education' className={`${activeMenu? 'menu-three-active' : 'menu-three'} position-absolute text-align-center px-16 py-8 border-radius-8 flex-center tr-all-ease-in-out-3 cursor border font-weight-bold text-decoration-none`}>
                    Education
                </a>
                <a href='#experience' className={`${activeMenu? 'menu-four-active' : 'menu-four'} position-absolute text-align-center px-16 py-8 border-radius-8 flex-center tr-all-ease-in-out-3 cursor border font-weight-bold text-decoration-none`}>
                    Experience
                </a>
                <a href='#projects' className={`${activeMenu? 'menu-five-active' : 'menu-five'} position-absolute text-align-center px-16 py-8 border-radius-8 flex-center tr-all-ease-in-out-3 cursor border font-weight-bold text-decoration-none`}>
                    Projects
                </a>
            </div>
        </div>
    )
};

export default Home;