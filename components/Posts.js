import Link from "next/link"
import styled from "styled-components"

const Posts = ({ posts }) => {
  return (
    <section>
      <h2>Writing</h2>
      <ul>
        {posts.map((post) => (
          <PostCard key={post.filePath}>
            <Link as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`} href={`/posts/[slug]`}>
              <a>{post.data.title}</a>
            </Link>
          </PostCard>
        ))}
      </ul>
    </section>
  )
}

export default Posts

const PostCard = styled.li`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`
