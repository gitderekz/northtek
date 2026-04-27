import React, { useRef, useState } from 'react'
import './Achievement.css'
import { FaAward, FaDiagramProject, FaUsersLine } from 'react-icons/fa6';
import ReactOdometer from 'react-odometerjs';
import { GiTeamIdea } from 'react-icons/gi';
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Achievement = () => {
    const[clients,setCLients] = useState(0)
    const[projects,setProjects] = useState(0)
    const[team,setTeam] = useState(0)
    const[awards,setAwards] = useState(0)
    const container = useRef(null)


    const updateData = ()=>{
        const timeout = setTimeout(() => {
            setCLients(20);
            setProjects(11);
            setTeam(30);
            setAwards(3);
        }, 500)
        return ()=>clearTimeout(timeout);
    }
    const resetData = ()=>{
        setCLients(0);
        setProjects(0);
        setTeam(0);
        setAwards(0);
    }

    useGSAP(()=>{
        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger:container.current,
                start:'top bottom',
                end:'bottom top',
                scrub: 4,
                onEnter:updateData,
                onLeaveBack:resetData
            }
        });
        return ()=>timeline.revert();
    },{scope:container})


  return (
    <section id="achievement">
        <div className="achievement__container" ref={container}>
            <div className="container">
                {/* Start achievements */}
                <div className="achievement">
                    <div className="icon__container"><FaUsersLine/></div>
                    <div className="details">
                        <div className="row">
                            <ReactOdometer value={clients} className='title'/>
                            <h1 className="sub__title">+</h1>
                        </div>
                        <small className="text__muted">Happy Clients</small>
                    </div>
                </div>
                {/* Start projects */}
                <div className="achievement">
                    <div className="icon__container"><FaDiagramProject/></div>
                    <div className="details">
                        <div className="row">
                            <ReactOdometer value={projects} className='title'/>
                            <h1 className="sub__title">+</h1>
                        </div>
                        <small className="text__muted">Completed Projects</small>
                    </div>
                </div>
                {/* Start team */}
                <div className="achievement">
                    <div className="icon__container"><GiTeamIdea/></div>
                    <div className="details">
                        <div className="row">
                            <ReactOdometer value={team} className='title'/>
                            <h1 className="sub__title">+</h1>
                        </div>
                        <small className="text__muted">Expert team</small>
                    </div>
                </div>
                {/* Start awards */}
                <div className="achievement">
                    <div className="icon__container"><FaAward/></div>
                    <div className="details">
                        <div className="row">
                            <ReactOdometer value={awards} className='title'/>
                            <h1 className="sub__title">+</h1>
                        </div>
                        <small className="text__muted">Awards won</small>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Achievement;