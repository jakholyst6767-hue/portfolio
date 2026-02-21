import Link from "next/link";

const links = [
    { href: "/", label: "HOME" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "CONTACT" },
    { href: "/login", label: "LOGIN" }
];

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
            {/* Logo / Portfolio */}
            <Link href="/" className="text-2xl font-bold hover:text-indigo-400 transition-colors">
                PORTFOLIO
            </Link>

            {/* Menu links */}
            <ul className="flex space-x-6">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.href}
                            className="text-lg font-medium hover:text-indigo-400 transition-colors"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}