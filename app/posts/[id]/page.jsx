import PostCard from "@/components/PostCard"
import PostsPage from "../page"
import { Suspense } from "react"

async function loadPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return await res.json()
}

async function PostPage({ params}) {
    const post = await loadPost(params.id)
    return <>
        <PostCard key={post.id} post={post} />
        <hr />
        <Suspense fallback="Loading posts...">
            <PostsPage />
        </Suspense>
    </>
}
export default PostPage