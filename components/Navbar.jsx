import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <h1>Navbar</h1>
            <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/tienda">Tienda</Link></li>
                <li><Link href="/posts">Posts</Link></li>
                <li><Link href="/">...</Link></li>
            </ul>
        </nav>
    )
}