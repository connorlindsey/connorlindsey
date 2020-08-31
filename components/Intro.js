import Link from "next/link"
import styled from "styled-components"

const Intro = () => {
  return (
    <Section>
      <div className='content'>
        <h1>Hi, I'm Connor</h1>
        <p>
          I design and develop applications, and I’m available for hire. Check out my work or{" "}
          <Link href='/contact'>
            <a>contact me</a>
          </Link>{" "}
          to talk about your next project.
        </p>
      </div>
    </Section>
  )
}

export default Intro

const Section = styled.section`
  padding: calc(min(15vw, 14rem) + 60px) 0rem;
  background-image: url("/assets/hero.png");
  background-size: cover;
  margin-top: -60px;
  border-bottom-left-radius: 45% 10%;
  border-bottom-right-radius: 45% 10%;
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.15), 0 2px 12px rgba(0, 0, 0, 0.12);

  .content {
    max-width: ${(props) => props.theme.maxWidth};
    margin: 0 auto;
    padding: 0 3rem;

    h1 {
      font-size: 4rem;
      line-height: 0;
      font-weight: 400;
      color: #fff;
    }

    p {
      max-width: 450px;
      font-size: 1.6rem;
      color: ${(props) => props.theme.grey["100"]};
    }

    a {
      color: inherit;
      border-bottom: 1px solid ${(props) => props.theme.grey["100"]};
      padding-bottom: -0.4rem;
      transition: ${(props) => props.theme.transition};

      &:hover {
        color: ${(props) => props.theme.primary["200"]};
        border-bottom: 1px solid ${(props) => props.theme.primary["200"]};
      }
    }
  }
`
