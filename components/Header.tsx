import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold">Sidhu</Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link href="/badges" className="hover:text-blue-400">Badges</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}