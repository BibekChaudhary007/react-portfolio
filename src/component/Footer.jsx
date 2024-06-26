import React from 'react'
import img1 from "../assets/favpic.jpg"
import { AiFillGithub, AiFillInstagram, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
   <footer>
     <div>
        <img src={img1} alt="Founder" />
        <h2>Bibek Kumar Chaudhary</h2>
        <p>We do not have to be smarter than the rest, we have to be more disciplined than the rest.</p>
      
    </div>

    <aside>
        <h2> Social Media</h2>
        <a href="https://www.instagram.com/_bibek___007/" target={'blank'}>
        <AiFillInstagram/>
        </a>
          <a href="https://github.com/BibekChaudhary007" target={'blank'}>
        <AiFillGithub/>
        </a>

    </aside>

    <a href="#home"><AiOutlineArrowUp/></a>
   </footer>
  )
}

export default Footer
