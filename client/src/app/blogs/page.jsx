import Link from 'next/link';
import data from '../data/posts.json';
import Head from "next/head";

export default function Blogs() {
    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>Blog Posts | My Blog</title>
                <meta name="description" content="List of blog posts"/>
                <meta name="keywords" content="blog, posts, articles"/>
                <meta name="author" content="Your Name"/>
            </Head>
            <h1 className="text-3xl font-bold mb-4">Posts</h1>
            <div className="grid gap-4">
                {data.map(post => (
                    <div key={post.id} className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                        <Link href={`/blogs/${encodeURIComponent(post.slug)}`}>
                            <p className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</p>
                        </Link>
                        <p className="text-sm text-gray-700 mt-2">by {post.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
