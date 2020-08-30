import Head from "next/head"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "../styles/theme"

import Header from "./Header"

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>Connor Lindsey</title>
        <meta name='description' content='' />
        <meta property='og:type' content='website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <link rel='shortcut icon' type='image/png' href='/favicon.png' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <PageWrapper>
        <Header />
        <Inner>{children}</Inner>
      </PageWrapper>
    </ThemeProvider>
  )
}

const PageWrapper = styled.div`
  background-color: #fff;
`

const Inner = styled.main`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.8;
    font-family: "Nunito Sans", sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.primary["500"]};
  }
  button {
    font-family: "Nunito Sans", sans-serif; 
  }


	& *::selection {
		background: ${(props) => props.theme.primary["300"]}; /* WebKit/Blink Browsers */
	}
	& *::-moz-selection {
		background: ${(props) => props.theme.primary["300"]}; /* Gecko Browsers */
	}
`
