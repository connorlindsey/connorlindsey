import Head from "next/head"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "../styles/theme"

import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children, isHome }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <meta charSet='utf-8' />
        <meta property='og:type' content='website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='content-language' content='en-us' />
        <link rel='shortcut icon' type='image/png' href='/favicon.png' />
        <meta name='theme-color' content='#ffffff' />
        <title>Connor Lindsey</title>
        <meta
          name='description'
          content="Hi, I'm Connor. I design and develop applications, and I’m available for hire. Check out my portfolio and contact me to chat about your next project."
        />
      </Head>
      <PageWrapper>
        <Header isHome={isHome} />
        <main>{children}</main>
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  )
}

const PageWrapper = styled.div`
  background-color: #fff;
`

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    color: ${(props) => props.theme.grey["900"]};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
    font-family: "Nunito Sans", sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.primary["500"]};
  }
  button {
    font-family: "Nunito Sans", sans-serif; 
  }

  a:focus, button:focus {
    outline: 2px solid ${(props) => props.theme.primary["500"]};
  }


	& *::selection {
		background: ${(props) => props.theme.primary["200"]}; /* WebKit/Blink Browsers */
	}
	& *::-moz-selection {
		background: ${(props) => props.theme.primary["200"]}; /* Gecko Browsers */
	}
`
