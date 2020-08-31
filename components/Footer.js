import styled from "styled-components"

import { FaCodepen, FaGithub, FaLinkedinIn, FaDribbble } from "react-icons/fa"

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0 1rem 0;
  margin-top: -70px;
  background-color: ${(props) => props.theme.primary["600"]};
  color: #fff;
`

const Spacer = styled.hr`
  display: block;
  width: 100%;
  background-color: ${(props) => props.theme.primary["200"]};
`

const Icon = styled.a`
  .icon {
    background-color: transparent;
    height: 47px;
    width: 47px;
    padding: 4px;
    margin: 1rem 0.8rem;
    border-radius: 100%;
    color: ${(props) => props.theme.primary["200"]};
    border: 2px solid ${(props) => props.theme.primary["200"]};
    transition: all 0.2s linear;

    &:hover {
      color: ${(props) => props.theme.primary["500"]};
      border-radius: 50%;
      background-color: #fff;
      border: 1px solid #fff;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className='socialIcons'>
        <Icon
          href='https://codepen.io/Ibaeni/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label="View Connor Lindsey's Codepen">
          <FaCodepen className='icon' />
        </Icon>
        <Icon
          href='https://github.com/connorlindsey'
          target='_blank'
          rel='noopener noreferrer'
          aria-label="View Connor Lindsey's Github">
          <FaGithub className='icon' />
        </Icon>
        <Icon
          href='https://www.linkedin.com/in/connor-lindsey-b7608914a/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label="View Connor Lindsey's Linkedin profile">
          <FaLinkedinIn className='icon' />
        </Icon>
        <Icon
          href='https://dribbble.com/cblindsey3'
          target='_blank'
          rel='noopener noreferrer'
          aria-label="View Connor Lindsey's Dribbble account">
          <FaDribbble className='icon' />
        </Icon>
      </div>
      <Spacer />
      <div>handcrafted by me</div>
    </StyledFooter>
  )
}

export default Footer
