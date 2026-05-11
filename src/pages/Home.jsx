import { useState, useEffect } from "react";
import personalImg from '../assets/personal_pic.png'
import elementImg from '../assets/figma-icon.png'
import element2Img from '../assets/react.svg'
import element3Img from '../assets/vs-code.svg'
import { FaGithub, FaLinkedin, FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaFacebook, FaLinkedinIn, } from "react-icons/fa6";

export default function Home() {

  const words = ["FFront-end Developer", "wWeb Designer", "UUI Designer"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    const currentWord = words[wordIndex];

    const typing = setInterval(() => {
      if (charIndex < currentWord.length) {
        setText((prev) => prev + currentWord.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setText("");
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 1500);
      }
    }, 120);

    return () => clearInterval(typing);
  }, [wordIndex]);

  return (
    <div className="page">
      <div className="home_content">
        <div className="rot_text">HABIB</div>

        <div className="main_text">
          <span>Welcome to my web world</span>

          <h1>
            Hi I'm Habib <p className="text_red"> Reza</p>
          </h1>

          <h4>
            I'm a <span className='text_red2'>{text}<span className="cursor">|</span></span>
          </h4>

          <p className='paragragh'>
            If you need any kind web consultancy then contact with me
          </p>

          <div className="btn">
            <a target="_blank" href="mailto:habibadnanr18@gmail.com" className='left_btn'>Hire Me</a>
            <a target="_blank" href="https://rb.gy/c066hv" className='right_btn'>
              Download CV <FaRegArrowAltCircleDown />
            </a>
          </div>
        </div>

        <div className="home_image">
          <img src={personalImg} alt="image" />
        </div>

        <div className="home_icons">
          <a target="_blank" href='https://web.facebook.com/md.habib.reza.37'><FaFacebook /></a>
          <a target="_blank" href='https://www.linkedin.com/in/habib-reza-rabbi-1a244b23b/'><FaLinkedin /></a>
          <a target="_blank" href='https://github.com/habibreza98'><FaGithub /></a>
        </div>
      </div>
      <div className="element_img">
        <div className="element1">
          <img src={element3Img} alt="image" />
        </div>
        <div className="element2">
          <img src={elementImg} alt="image" />
        </div>
        <div className="element3">
          <img src={element2Img} alt="image" />
        </div>
      </div>
    </div>
  );
}
