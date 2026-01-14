import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold tracking-tighter">
        MyPortfolio
      </Link>
      <div className="flex gap-6 font-medium">
        <Link href="/" className="hover:text-blue-600 transition">Work</Link>
        <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
      </div>
    </nav>
  );
}