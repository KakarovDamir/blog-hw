import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/">
                    <p className="text-2xl font-bold">Blog App</p>
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link href="/" passHref>
                        <p className="hover:text-gray-300">Home</p>
                    </Link>
                    <Link href="/about" passHref>
                        <p className="hover:text-gray-300">About</p>
                    </Link>
                    <Link href="/blogs" passHref>
                        <p className="hover:text-gray-300">Blogs</p>
                    </Link>
                </div>
                <div className="md:hidden">
                    {/* Mobile menu button */}
                    <button className="text-gray-300 hover:text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
