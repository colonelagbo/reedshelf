import OweeLogo from '../assets/Owee.svg';

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
        <path d="M13.5 21v-7.75h2.6l.39-3.02h-3v-1.93c0-.87.24-1.47 1.5-1.47h1.6V4.14C15.86 4.06 14.96 4 13.9 4c-2.2 0-3.7 1.34-3.7 3.8v2.43H7.6v3.02h2.6V21h3.3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/reedshelf/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4.5 w-4.5">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@reedshelf",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
        <path d="M16.6 5.82c-.9-.62-1.53-1.6-1.7-2.72h-3v13.1a2.6 2.6 0 1 1-1.83-2.48V10.6a5.6 5.6 0 1 0 4.83 5.54c0-.09 0-.18-.01-.27V9.4a6.9 6.9 0 0 0 4.11 1.34V7.65c-.85 0-1.68-.28-2.4-.83z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
        <path d="M6.94 8.5H4.06V20h2.88V8.5zM5.5 4c-.97 0-1.75.79-1.75 1.75S4.53 7.5 5.5 7.5s1.75-.79 1.75-1.75S6.47 4 5.5 4zM20 13.28c0-3.15-1.68-4.61-3.92-4.61-1.81 0-2.62 1-3.07 1.7V8.5H10.13c.04.85 0 11.5 0 11.5H13v-6.43c0-.34.02-.69.13-.94.28-.69.92-1.42 1.99-1.42 1.4 0 1.96 1.07 1.96 2.63V20H20v-6.72z" />
      </svg>
    ),
  },
];

export const Footer = () => (
  <footer className="border-t border-white/10 bg-[#0b1619] px-6 py-10 lg:px-8">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 sm:flex-row sm:items-center">
      {/* Far Left: Connect with us & social handles */}
      <div className="flex flex-col items-center gap-3 sm:items-start">
        <span className="text-sm font-semibold text-white">Connect with us</span>
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white/60 transition hover:border-[#d6a84a] hover:text-[#d6a84a]"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Center: All rights reserved */}
      <div className="text-center">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} ReedShelf. All rights reserved.
        </p>
      </div>

      {/* Far Right: Powered by */}
      <div className="flex items-center gap-3 sm:flex-col sm:items-end">
        <span className="text-sm font-medium text-white/40">Powered by</span>
        
          <img
            src={OweeLogo}
            alt="Owee Innovations"
            className="h-20 w-auto object-contain"
          />
      
      </div>
    </div>
  </footer>
);

