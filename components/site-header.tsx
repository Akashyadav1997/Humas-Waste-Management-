"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { Brand } from "./brand";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    function onPointer(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    const desktop = window.matchMedia("(min-width: 769px)");
    function onResize() {
      if (desktop.matches) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <>
      <header className="navbar" ref={headerRef}>
        <div className="container nav-inner">
          <Brand />
          <nav className="nav-links" aria-label="Primary navigation">
            {site.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? "active" : ""}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link href={site.navigationCta.href} className="button nav-cta">
            {site.navigationCta.label}{" "}
            <ArrowUpRight className="page-arrow" aria-hidden="true" />
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="hamburger"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mobile-menu-drawer"
          >
            {site.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? "active" : ""}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              );
            })}
            <Link
              href={site.navigationCta.href}
              className="button mt-2"
              onClick={() => setOpen(false)}
            >
              {site.navigationCta.label}{" "}
              <ArrowUpRight className="page-arrow" aria-hidden="true" />
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
