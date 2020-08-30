import Link from "next/link"
import styled from "styled-components"

const Header = () => {
  return (
    <StyledHeader>
      <Link href='/'>
        <a>Connor Lindsey</a>
      </Link>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  padding: 1rem 2rem;
`
