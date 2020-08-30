import Link from "next/link"

const Posts = ({ posts }) => {
  return (
    <section>
      <h2>Writing</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`} href={`/posts/[slug]`}>
              <a>{post.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Posts
