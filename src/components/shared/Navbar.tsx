import Link from "next/link";
import { Suspense } from "react";
import { ModeToggle } from "./MobileToggle";
import NavbarAuth from "./NavbarAuth";
import Image from "next/image";
import logo from '../../../public/logo.png'
const navLinks = [
  { name: "All Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/5 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-teal-700 gap-2 dark:text-teal-500 flex items-center">
            <Image src={logo} width={40} height={100} alt="logo"/>
            FixIt<span className="text-amber-500">Now</span>
          </span>
        </Link>

        {/* Middle: Main Navigation (Hidden on small screens) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {navLinks.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className="hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* theme toggle */}
        <div className="flex items-center gap-4">
          {/* Right Side: Auth / Profile */}
          <ModeToggle />
          <Suspense
            fallback={
              <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
            }
          >
            <NavbarAuth />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
