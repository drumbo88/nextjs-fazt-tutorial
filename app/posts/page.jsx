import PostCard from "@/components/PostCard"
import "./Posts.css"

async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await res.json()
}

async function PostsPage() {
    const posts = await loadPosts()
    return <div className="grid">
        { posts.map(post => (
            <PostCard key={post.id} post={post} />
        ))}
    </div>
}
export default PostsPage