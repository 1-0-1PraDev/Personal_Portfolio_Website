import React from 'react';
import styled from 'styled-components';
import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import avatar from '../../assets/pranay-avatar.jpg';
import { headContentAnimation, headTextAnimation } from '../../utils/motion';

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  /* background: red; */

  @media(max-width: 960px){
    padding: 66px 11px;
  }

  @media(max-width: 640px){ 
    padding: 32px 16px;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 40px;
  max-width: 1100px;

  @media (max-width: 960px){
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  /* background: #86ff15; */
  
  @media(max-width: 960px){
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
  }
`;


const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  text-align: right;
  
  @media(max-width: 960px){
    order: 1;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700px;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px){
    text-align: center;
  }

  @media (max-width: 960px){
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px){
    text-align: center;
  }

  @media (max-width: 640px){
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  color: ${({ theme }) => theme.text_primary + 95};
  margin-bottom: 42px;

  @media (max-width: 960px){
    text-align: center;
  }

  @media (max-width: 640px){
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  appearance: button;
  text-decoration: none;
  background : linear-gradient(45deg, red , cyan);
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  cursor: pointer;
  border-radius: 20rem;
  font-size: 18px;
  font-weight: 700;

  &:hover{
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 640px){
    padding: 12px 0;
    font-size: 18px;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;

  @media (max-width: 640px){
    max-width: 280px;
    max-height: 280px;
  }
`;



const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <motion.div {...headContentAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <Title>
                Hi, I am <br /> {Bio.name}
              </Title>
              <motion.div {...headTextAnimation}>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>
              <motion.div {...headContentAnimation}>
              <SubTitle>{Bio.description}</SubTitle>
              </motion.div>
              <ResumeButton target="_blank" href="https://drive.google.com/file/d/1xz_3fvYH-F2PVeFTYWpJLJ57RYsmCfx9/view?usp=sharing">Check Resume</ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
              <Tilt>
                <Img src={avatar} alt='pranay image'></Img>
              </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>

        </motion.div>
      </HeroContainer>
    </div>
  )
}

export default Hero;