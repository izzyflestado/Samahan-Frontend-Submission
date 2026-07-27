import Link from "next/link";

const NAV_LINKS = [
  { label: "Product", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Customers", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Now", href: "#" },
  { label: "Contact", href: "#" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-c bg-[#08090a]/85 backdrop-blur-lg">
      <nav
        aria-label="Main"
        className="mx-auto flex h-[72px] max-w-[1470px] items-center justify-between px-5 sm:px-8 lg:px-[94px]"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-sm text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
        >
          <img src="/logomain.svg" alt="" className="h-5.5 w-5.5" />
          <span className="text-[19.5px] font-semibold">Linear</span>
        </Link>

        {/* Right side group: links + divider + auth */}
        <div className="flex items-center gap-1 md:gap-2 lg:gap-4">
          <ul className="hidden items-center gap-0 md:flex md:gap-0 lg:gap-0">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="inline-flex items-center rounded-full px-[12px] py-[6px] text-[13px] text-[#8A8F98] transition-colors hover:bg-[#23252A] hover:text-[#F7F8F8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden h-5 w-px bg-border-c md:block" />

          <div className="hidden items-center gap-1 md:flex lg:gap-3">
            <Link
              href="#"
              className="inline-flex items-center rounded-full px-[10px] py-[6px] text-[13px] text-[#8A8F98] transition-colors hover:bg-[#23252A] hover:text-[#F7F8F8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              Log in
            </Link>
            <Link
              href="#"
              className="rounded-full bg-[#E5E5E6] px-3 py-[6px] text-[13px] font-medium text-[#08090A] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile-only auth + menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <Link
              href="#"
              className="inline-flex items-center rounded-full px-4 py-2.5 text-[13px] text-[#8A8F98] transition-colors hover:bg-[#23252A] hover:text-[#F7F8F8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              Log in
            </Link>
            <Link
              href="#"
              className="rounded-full bg-[#E5E5E6] px-3 py-[6px] text-[13px] font-medium text-[#08090A] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              Sign up
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              className="flex h-8 w-8 items-center justify-center rounded-sm text-[#F7F8F8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 4.5H16M2 9H16M2 13.5H16"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}