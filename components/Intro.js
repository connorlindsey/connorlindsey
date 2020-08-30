import Link from "next/link"
const Intro = () => {
  return (
    <section>
      <h1>Hi, I'm Connor</h1>
      <p>
        I design and develop mobile and web applications, and I’m available for hire. Check out my
        work below or{" "}
        <Link href='/contact'>
          <a>contact me</a>
        </Link>{" "}
        to talk about your next project.
      </p>
    </section>
  )
}

export default Intro
