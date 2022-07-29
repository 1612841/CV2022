import React, { useState, useEffect, useMemo } from 'react';
import './styles.scss';
import { useInView } from 'react-intersection-observer';

function Skills() {

    const [ref, inView] = useInView({
        threshold: 0.8
    });

    const [skills, setSkills] = useState({
        softSkills: false,
        workSkills: false
    });
    const [onTime, setOnTime] = useState(false);
    const [onTimeTwo, setOnTimeTwo] = useState(false);
    const [onTimeThree, setOnTimeThree] = useState(false);
    const [onTimeWorkingSkill, setOnTimeWorkingSkill] = useState(false);
    const [onTimeContentWorkingSkill, setOnTimeContentWorkingSkill] = useState(false);

    const handleSoftSkill = () => {
        setOnTime(false);
        setOnTimeTwo(false);
        setOnTimeThree(false);
        setOnTimeWorkingSkill(false);
        setOnTimeContentWorkingSkill(false);
        setSkills({
            ...skills,
            softSkills: true,
            workSkills: false
        })
    };

    const handleWorkSkill = () => {
        setOnTime(false);
        setOnTimeTwo(false);
        setOnTimeThree(false);
        setOnTimeWorkingSkill(false);
        setOnTimeContentWorkingSkill(false)
        setSkills({
            ...skills,
            softSkills: false,
            workSkills: true
        })
    }

    useEffect(() => {
        if (skills.softSkills || skills.workSkills) {
            setTimeout(() => {
                setOnTime(true);
            }, 700);
            if (skills.softSkills) {
                setTimeout(() => {
                    setOnTimeTwo(true)
                },1000)
               setTimeout(() => {
                setOnTimeThree(true)
               }, 1300)
            } else if (skills.workSkills) {
                setTimeout(() => {
                    setOnTimeWorkingSkill(true);
                },1000);
                setTimeout(() => {
                    setOnTimeContentWorkingSkill(true);
                }, 1300)
            }
        }
    }, [skills]);

    useMemo(() => {
        if (!inView) {
            setOnTime(false);
            setOnTimeTwo(false);
            setOnTimeThree(false);
            setOnTimeWorkingSkill(false);
            setOnTimeContentWorkingSkill(false);
            setSkills({
                ...skills,
                softSkills: false,
                workSkills: false
            })
        }
    }, [inView]);

  return (
    <div id='skills' className='skills row position-relative w-100vw h-100vh overflow-x-hidden'
        ref={ref}
    >
        <div className='back-home z-index-10'>
            <a href='#home' className='flex-center flex-direction-column color-dark text-decoration-none'>
               
            </a>
        </div>
        <div className={`menu-skills col-xs z-index-10`}>
            <p className={`${inView? 'softskill' : 'appear-skill'} ${skills.softSkills? 'skill-active' : ''} soft p-8 w-100 cursor border-bottom color-green font-weight-bolder tr-all-ease-in-out-4`}
                onClick={handleSoftSkill}
            >
                Soft Skills
            </p>
            <p className={`${inView? 'workskill' : 'appear-skill'} ${skills.workSkills? 'skill-active' : ''} working w-124 p-8 cursor border-bottom color-green font-weight-bolder tr-all-ease-in-out-6`}
                onClick={handleWorkSkill}
            >
                Working Skills
            </p>
        </div>
        <div className={`wrap-bg w-100% position-absolute t-320 flex-center`}>
            <div className={`wrap-skills-bg position-absolute tr-all-ease-in-out-6 ${(skills.workSkills || skills.softSkills) && !onTime? 'l-50% r-50% w-120' : 'l-10'}`}>
                <p className={`px-12 py-8 font-size-12 text-align-center ${(skills.workSkills || skills.softSkills) && !onTime? 'skill-active' : ''}`}>
                    {(skills.softSkills && !onTime)? 'Soft Skills' : (skills.workSkills && !onTime)? 'Working Skills' : ''}
                </p>
                <div className='skill-bg' />
            </div>
            <div className={`wrap-content-bg tr-all-ease-in-out-6 ${(skills.softSkills || skills.workSkills) && onTime? 'r-10' : 'l-50% r-50% w-120'} position-absolute`}>
                <p className={`px-12 py-8 font-size-12 text-align-center ${(skills.workSkills || skills.softSkills) && onTime? 'skill-active' : ''}`}>
                    {(skills.softSkills && onTime)? 'Soft Skills' : (skills.workSkills && onTime)? 'Working Skills' : ''}
                </p>
                <div className='content-bg' />
            </div>
        </div>
        <div className='content position-absolute w-100% h-100% d-flex justify-content-center col-xs'>
            <div className={`${onTimeTwo? "content-wrap" : "content-wrap-none"} border border-radius-8 w-40% tr-all-ease-in-out-4`}
            >
                <div className={`${onTimeThree? '' : 'wrap'} font-size-14 px-12 py-8 m-4 tr-all-ease-in-out-5`}>
                    <p className='py-8'>Google and Stackoverflow</p>
                    <p className='font-size-10'>Fairly</p>
                    <input value={70} className='collaboration w-80%' type='range' />
                </div>
                <div className={`${onTimeThree? '' : 'wrap'} font-size-14 px-12 py-8 m-4 tr-all-ease-in-out-5`}>
                    <p className='py-8'>Collaboration</p>
                    <p className='font-size-10'>Fairly</p>
                    <input value={70} className='collaboration w-80%' type='range' />
                </div>
                <div className={`${onTimeThree? '' : 'wrap'} font-size-14 px-12 py-8 m-4 tr-all-ease-in-out-5`}>
                    <p className=''>Research</p>
                    <p className='font-size-10'>Fairly</p>
                    <input input value={80} className='research w-80%' type='range' />
                </div>
                <div className={`${onTimeThree? '' : 'wrap'} font-size-14 px-12 py-8 m-4 tr-all-ease-in-out-6`}
                >
                    <p className=''>Problem solving</p>
                    <p className='font-size-10'>Fairly</p>
                    <input input value={80} className='problem w-80%' type='range' />
                </div>
                <div className={`${onTimeThree? '' : 'wrap'} font-size-14 px-12 py-8 m-4 tr-all-ease-in-out-7`}>
                    <p className=''>Working under pressure</p>
                    <p className='font-size-10'>Fairly</p>
                    <input input value={80} className='pressure w-80%' type='range' />
                </div>
            </div>
            <div className={`wrap-content-working position-absolute d-flex justify-content-center`}>
                <div className={`${onTimeWorkingSkill? "content-wrap-FEBE" : "content-wrap-none-FEBE" } border border-radius-8 mx-4 w-44% tr-all-ease-in-out-4`}
                >
                    <div className={`${onTimeContentWorkingSkill? '' : 'wrap'} font-size-14 px-12 py-8 m-4 tr-all-ease-in-out-5`}>
                        <p className='py-8 font-weight-bolder'>FrontEnd</p>
                    </div>
                    <div className={`${onTimeContentWorkingSkill? '' : 'wrap'} font-size-14 px-12 py-8 m-4 tr-all-ease-in-out-5`}>
                        <p className='py-8'>
                            HTML, CSS, Javascript, Typescript, ReactJS
                        </p>
                        <p className='py-8'>
                            Responsive, SCSS, Bootstrap, Material UI, Chakra UI, Antd
                        </p>
                        <p className='font-size-10'>Fairly</p>
                        <input value={70} className='collaboration w-80%' type='range' />
                    </div>
                    <div className={`${onTimeContentWorkingSkill? '' : 'wrap'} font-size-14 px-12 py-8 m-4 tr-all-ease-in-out-5`}>
                        <p className='py-8'>
                            Axios, Http Request, React query
                        </p>
                        <p className='py-8'>
                            Integration by Postman, Browser
                        </p>
                        <p className='font-size-10'>Fairly</p>
                        <input value={70} className='collaboration w-80%' type='range' />
                    </div>
                </div>
                <div className={`${onTimeWorkingSkill? "content-wrap-FEBE" : "content-wrap-none-FEBE" } mx-4 border border-radius-8 w-44% tr-all-ease-in-out-4`}
                >
                    <div className={`${onTimeContentWorkingSkill? '' : 'wrap'} font-size-14 px-12 py-8 m-4 tr-all-ease-in-out-5`}>
                        <p className='py-8'>NextJS, React Native, Redux/ Redux Toolkit</p>
                        <p className='py-8'>
                            Bitbucket, Git && Github, Gitlab, Source tree, Photoshop, Ai, Xd.
                        </p>
                        <p className='font-size-10'>Medium</p>
                        <input value={50} className='collaboration w-80%' type='range' />
                    </div>
                    <div className={`${onTimeContentWorkingSkill? '' : 'wrap'} font-size-14 px-12 py-8 m-4 tr-all-ease-in-out-5`}>
                        <p className='font-weight-bolder'>BackEnd</p>
                    </div>
                    <div className={`${onTimeContentWorkingSkill? '' : 'wrap'} font-size-14 px-12 m-4 tr-all-ease-in-out-5`}>
                        <p className='py-8'>Node.js, Express, Nodemon, Dotenv, JWT</p>
                        <p className='py-8'>
                            MongoDB, PostgreSQL
                        </p>
                        <p className='py-8'>AWS EC2, Docker</p>
                        <p className='font-size-10'>Medium</p>
                        <input value={50} className='collaboration w-80%' type='range' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;