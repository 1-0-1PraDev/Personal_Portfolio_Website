import React from 'react';
import { skills } from '../../data/constants';
import { Tilt } from 'react-tilt';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px){
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px){
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};

`;

const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 20px;
    justify-content: center;
`;

const Skill = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: rgba(17,25,40,0.83);
    border: 1px solid rgba(255,255,255,0.125);
    border-radius: 16px;
    padding: 18px 36px;
    @media(max-width: 768px){
        max-width: 400px;
        padding: 10px 35px;
    }

    @media(max-width: 500px){
        max-width: 330px;
        padding: 10px 35px;
    }
`;

const SkillTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};
`;

const SkillList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
`;

const SkillItem = styled.div`
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.text_primary + 80};
    border: 1px solid ${({ theme }) => theme.text_primary + 80};
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;

    @media(max-width: 768px){
        font-size: 14px;
        padding: 8px 12px;
    }
    @media(max-width: 500px){
        font-size: 14px;
        padding: 6px 12px;
    }
`;

const SkillImage = styled.img`
    width: 24px;
    height: 24px;
`;

const Skills = () => {
    return (
        <Container id='Skills'>
            <Wrapper>
                <Title>Skills</Title>
                <Desc>Here are some of technologies that i have using past 2 years.</Desc>

                <SkillsContainer>
                    {skills.map((skill, ind) => (
                        <Tilt key={`skill-${ind}`}>
                            <Skill key={`skill-${ind}`}>
                                <SkillTitle>{skill.title}</SkillTitle>
                                <SkillList>
                                    {skill.skills.map((item, index_x) => (
                                        <SkillItem key={`skill-x-${index_x}`}>
                                            <SkillImage src={item.image} />
                                            {item.name}
                                        </SkillItem>
                                    ))}
                                </SkillList>
                            </Skill>
                        </Tilt>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    )
}

export default Skills;