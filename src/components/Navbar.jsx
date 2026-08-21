import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Features", href: "/#features" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "About", href: "/#about" },
    { label: "Blog", href: "/blog" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#dfe5dc]/80 bg-[#f8f7f2]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex h-10 w-40 items-center" onClick={() => setOpen(false)}>
          {/* LOGO SPACE: replace this div with your ReedShelf logo later */}
          <div className="h-10 w-40 rounded-lg border border-dashed border-[#cbd5c6] bg-white/40" aria-label="ReedShelf logo placeholder" />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            link.href.startsWith("/") && !link.href.includes("#") ? (
              <Link key={link.href} to={link.href} className="text-sm font-medium text-[#557067] transition hover:text-[#18332b]">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="text-sm font-medium text-[#557067] transition hover:text-[#18332b]">
                {link.label}
              </a>
            )
          ))}
          <a href="/register" className="rounded-full bg-[#18332b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#26483d]">
            Get started
          </a>
        </div>
        <button
          type="button"
          className="rounded-lg p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-[#dfe5dc] bg-[#f8f7f2] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link key={link.href} to={link.href} onClick={() => setOpen(false)} className="font-medium text-[#557067]">
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-medium text-[#557067]">
                  {link.label}
                </a>
              )
            ))}
            <a href="/register" onClick={() => setOpen(false)} className="w-fit rounded-full bg-[#18332b] px-5 py-2.5 font-semibold text-white">
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

