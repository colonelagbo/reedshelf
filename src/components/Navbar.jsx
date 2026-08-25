import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LogoLink } from "./LogoPlaceholder";
import { ThemeToggle } from "./ThemeToggle";

const WEBAPP = import.meta.env.VITE_WEBAPP_URL || "http://localhost:5174";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const landing = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "/#features" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "About", href: "/#about" },
    { label: "Blog", href: "/blog" },
  ];

  const darkNav = landing && !scrolled;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "border-b border-[#ddd8ca] bg-[#f1eee6]/92 py-2.5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-[#0d191b]/92"
        : darkNav
          ? "border-b border-transparent bg-transparent py-5"
          : "border-b border-[#ddd8ca] bg-[#f1eee6]/92 py-3 backdrop-blur-md dark:border-white/10 dark:bg-[#0d191b]/92"
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <LogoLink dark={darkNav} onClick={() => setOpen(false)} />

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) =>
            link.href === "/blog" ? (
              <Link key={link.href} to={link.href} className={`text-sm font-medium transition ${darkNav ? "text-white/70 hover:text-[#d6a84a]" : "text-[#51635f] hover:text-[#007268] dark:text-white/65 dark:hover:text-[#5fc4b8]"}`}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className={`text-sm font-medium transition ${darkNav ? "text-white/70 hover:text-[#d6a84a]" : "text-[#51635f] hover:text-[#007268] dark:text-white/65 dark:hover:text-[#5fc4b8]"}`}>
                {link.label}
              </a>
            )
          )}
          <a href={`${WEBAPP}/register`} className="rounded-full bg-[#009689] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#d6a84a] hover:text-[#0b1619]">
            Get started
          </a>
          <ThemeToggle className={darkNav ? "border-white/20 text-white/80 hover:border-[#d6a84a] hover:text-[#d6a84a]" : "border-[#ddd8ca] text-[#557067] hover:border-[#009689] hover:text-[#009689] dark:border-white/15 dark:text-white/65"} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className={darkNav ? "border-white/20 text-white/80" : "border-[#ddd8ca] text-[#557067] dark:border-white/15 dark:text-white/65"} />
          <button type="button" className={darkNav ? "rounded-lg p-2 text-white" : "rounded-lg p-2 text-[#173033] dark:text-white"} onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[#ddd8ca] bg-[#f1eee6] px-6 py-5 dark:border-white/10 dark:bg-[#0d191b] md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => link.href === "/blog"
              ? <Link key={link.href} to={link.href} onClick={() => setOpen(false)} className="font-medium text-[#51635f] dark:text-white/75">{link.label}</Link>
              : <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-medium text-[#51635f] dark:text-white/75">{link.label}</a>
            )}
            <a href={`${WEBAPP}/register`} onClick={() => setOpen(false)} className="w-fit rounded-full bg-[#009689] px-5 py-2.5 font-semibold text-white">Get started</a>
          </div>
        </div>
      )}
    </header>
  );
};
