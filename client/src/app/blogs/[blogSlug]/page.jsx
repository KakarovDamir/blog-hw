'use client';
import { NextSeo } from 'next-seo';
import { usePathname } from 'next/navigation';
import data from '../../data/posts.json';

export default function BlogPage() {
    const pathname = usePathname();
    const slug = decodeURIComponent(pathname.split('/').pop());
    const post = data.find(p => p.slug === slug);

    if (!post) return <p className="text-red-500 text-center mt-4">Post not found</p>;

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <NextSeo
                title={post.title}
                description={post.description}
                openGraph={{
                    title: post.title,
                    description: post.description,
                }}
            />
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <h2 className="text-xl text-gray-700 mb-2">By {post.author}</h2>
            <p className="text-base text-gray-800 mb-4">{post.description}</p>
            
        </div>
    );
}
