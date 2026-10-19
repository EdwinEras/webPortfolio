"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { profile } from "@/lib/content";
import { NAV_LINKS, RESUME_HREF } from "@/lib/site";
import { ResumeButton } from "@/components/ui/action-link";
import { ThemeToggle } from "./theme-toggle";

/** Active links take the accent-tinted pill; the rest stay quiet. */
function navLinkClass(isActive: boolean, size: "desktop" | "mobile"): string {
  return cn(
    "rounded-md font-medium transition-colors duration-200",
    size === "desktop" ? "px-4 py-2.5 text-sm" : "px-4 py-3.5 text-base",
    isActive ? "bg-accent-900 text-accent-200" : "text-tone-300 hover:text-accent-200",
  );
}

/** The three-bar button that becomes an X when the panel is open. */
function MenuIcon({ open }: { open: boolean }) {
  const bar = "block h-0.5 w-[18px] rounded-sm bg-accent";
  return (
    <>
      <span
        aria-hidden
        className={cn(bar, "transition-transform duration-200")}
        style={{ transform: open ? "translateY(7px) rotate(45deg)" : undefined }}
      />
      <span
        aria-hidden
        className={cn(bar, "transition-opacity duration-150")}
        style={{ opacity: open ? 0 : 1 }}
      />
      <span
        aria-hidden
        className={cn(bar, "transition-transform duration-200")}
        style={{ transform: open ? "translateY(-7px) rotate(-45deg)" : undefined }}
      />
    </>
  );
}

export default function Navigation() {
  const pathname = usePathname();

  // A route change should always leave the mobile panel closed, whether the
  // visitor tapped a link in it or navigated some other way. Recording the
  // route the panel was opened on derives that during render, instead of
  // closing it afterwards in an effect.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const menuOpen = openedOn === pathname;
  const toggleMenu = () => setOpenedOn(menuOpen ? null : pathname);

  return (
    <header className="sticky top-0 z-30 border-b border-divider bg-[color-mix(in_srgb,var(--color-bg)_84%,transparent)] backdrop-blur-lg">
      <div className="mx-auto flex max-w-shell items-center justify-between gap-3.5 px-4 py-3 sm:px-6 lg:px-7">
        <Link
          href="/"
          className="flex items-center gap-2.5 whitespace-nowrap text-[clamp(15px,2vw,17px)] font-semibold tracking-[-0.02em]"
        >
          <span
            aria-hidden
            className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[9px] border border-section-ghost bg-section text-[13px] text-accent-200"
          >
            {profile.initials}
          </span>
          {profile.name}
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={navLinkClass(pathname === link.href, "desktop")}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle className="ml-2 h-[38px] w-[38px]" />
          <ResumeButton href={RESUME_HREF} size="sm" className="ml-2">
            Download CV
          </ResumeButton>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle className="h-11 w-11" />
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-md border border-accent"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-divider bg-canvas px-4 pb-[18px] pt-2.5 sm:px-6 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={navLinkClass(pathname === link.href, "mobile")}
            >
              {link.name}
            </Link>
          ))}
          <ResumeButton href={RESUME_HREF} className="mt-1.5 w-full">
            Download CV
          </ResumeButton>
        </nav>
      ) : null}
    </header>
  );
}
