import styled from "styled-components"

// MDX Posts
import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils"

// Components
import Intro from "../components/Intro"
import Experiences from "../components/Experiences"
import Projects from "../components/Projects"
import Posts from "../components/Posts"

export default function Index({ posts }) {
  return (
    <>
      <Intro />
      <Inner>
        <Experiences />
        <Projects />
        <Posts posts={posts} />
        {/* ActionCard */}
        <div style={{ marginBottom: "70px" }}>Hey</div>
      </Inner>
    </>
  )
}

export function getStaticProps() {
  let posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  // Sort posts by publish date. Must sort as strings because
  // Next doesn't support serializing Date objects from front-matter
  posts.sort((a, b) => {
    if (a.data.date < b.data.date) return 1
    if (a.data.date > b.data.date) return -1
    return 0
  })

  return { props: { posts } }
}

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 3rem;
`
