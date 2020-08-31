import App from "next/app"
import Layout from "../components/Layout"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const isHome = Component.name === "Index"
    return (
      <Layout isHome={isHome}>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
