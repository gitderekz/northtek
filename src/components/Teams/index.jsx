import React from 'react'
import './Teams.css'
import { Link } from 'react-router-dom'
import { teams } from '../../data'

const Teams = () => {
  return (
    <section id='team'>
        <div className="container">
            <h1 className="title">Our <span className="g-text">Clients</span></h1>
            {/* <p className="text__muted description">
                We collaborate with a network of trusted partners to deliver high-quality products, solutions and exceptional service to our clients.
                Meet our diverse team of creative minds, and strategists project's success the driving force behind every project's success
            </p> */}
            <div className="team__container">
                {
                    teams.map((team, index)=>(
                        <div className="team__card" key={index}>
                            <div className="profile__container">
                                <img src={team.profile} alt={team.name} />
                            </div>
                            {/* <div className="details">
                                <h3 className="name">{team.name}</h3>
                                <p className="text__muted">{team.title}</p>
                            </div> */}
                            {/* <div className="social__container">
                                {
                                    team.social.map((item, i)=>(
                                        <Link href={item.url||''} target='_blank' className='icon__container' key={i}>
                                            {item.icon}
                                        </Link>
                                    ))
                                }
                            </div> */}
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Teams