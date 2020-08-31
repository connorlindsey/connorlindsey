import Link from "next/link"
import styled from "styled-components"

const Header = ({ isHome }) => {
  return (
    <StyledHeader isHome={isHome}>
      <Link href='/'>
        <a className='main-link'>Connor Lindsey</a>
      </Link>
      <div>
        <Link href='/contact'>
          <a className='link'>Contact</a>
        </Link>
      </div>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  height: 60px;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;

  a {
    letter-spacing: 5%;
    font-size: 1.6rem;
    transition: ${(props) => props.theme.transition};
  }

  .main-link {
    font-weight: 600;
    color: ${(props) => (props.isHome ? "#FFF" : props.theme.primary["500"])};

    &:hover {
      color: ${(props) => (props.isHome ? props.theme.primary["200"] : props.theme.primary["600"])};
    }
  }

  .link {
    color: ${(props) => (props.isHome ? props.theme.grey["100"] : props.theme.grey["700"])};

    &:hover {
      color: ${(props) => (props.isHome ? props.theme.grey["200"] : props.theme.grey["900"])};
    }
  }
`
