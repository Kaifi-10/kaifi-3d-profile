import React from 'react'
import {Link} from 'react-router-dom'
import {arrow} from '../../assets/icons'
const InfoBox = ({text, link, txtBtn}) =>(
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {txtBtn}
      <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
  </div>
)

const renderContent = {
  1:(
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semibold'>Kaifi</span>👋
      <br/>
      A Front End Developer
    </h1>
  ),
  2:(
    <InfoBox 
      text='Worked with Companiese and picked up many skills along the way'
      link="/about"
      txtBtn="Know more"
    />
  ),
  3:(
    <InfoBox 
      text='Developed multiple Pojects which you can visit '
      link="/projects"
      txtBtn="Visit my portfolio"
    />
  ),
  4:(
    <InfoBox 
      text="Looking for a Front End Developer to join your team? I'm just a few keystrokes away"
      link="/contact"
      txtBtn="Let's Talk"
    />
  ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo