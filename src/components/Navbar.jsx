import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { MenuRounded } from '@mui/icons-material';
import { Bio } from '../data/constants';

const Nav = styled.div`
    background-color: ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    padding: 0 2rem;
    z-index: 10;
`;

const NavbarContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
    justify-content: space-between;
    font-size: 1rem;
`;

const NavbarText = styled(Link)`
    text-decoration: none;
    color: inherit;
    padding: 0 6px;

    p{
        font-weight: 700;
        font-size: 2rem;
        color: ${({ theme }) => theme.text_primary};
    }
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    font-size: 1.1rem;
    &:hover{
        color: ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;
    /* background: red; */
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const GithubButton = styled.a`
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    border-radius: 20px;
    padding: 6px 20px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.6s ease-in-out;
    &:hover{
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.text_primary};
    }
`;

const MobileIcon = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    color: ${({ theme }) => theme.text_primary};
    display: none;
    @media screen and (max-width: 768px){
        display: flex;
    }
`;

const MobileMenu = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light + 99};
    position: absolute;
    top: 80px;
    right: 0;
    transition:all 0.4s ease-in-out;
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    return (
        <Nav>
            <NavbarContainer>
                <NavbarText to='/'>
                    <p>PraDev</p>
                </NavbarText>

                <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                    <MenuRounded style={{ color: 'inherent' }} />
                </MobileIcon>

                <NavItems>
                    <NavLink href="#About">About</NavLink>
                    <NavLink href="#Skills">Skills</NavLink>
                    <NavLink href="#Experience">Experience</NavLink>
                    <NavLink href="#Projects">Projects</NavLink>
                    <NavLink href="#Education">Education</NavLink>
                </NavItems>

                    <MobileMenu isOpen={isOpen}>
                        <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">About</NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">Skills</NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">Experience</NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">Projects</NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">Education</NavLink>
                        <GithubButton href={Bio.github} target="_Blank" style={{
                            background: theme.primary,
                            color: theme.text_primary
                        }}>Github Profile</GithubButton>
                    </MobileMenu>

                <ButtonContainer>
                    <GithubButton href={Bio.github} target="_Blank">Github Profile</GithubButton>
                </ButtonContainer>
            </NavbarContainer>
        </Nav>

    )
}

export default Navbar;