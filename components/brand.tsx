import Link from "next/link";
import { site } from "@/content/site";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={`${site.brand.fullName} home`}
      className={`brand ${light ? "brand-light" : ""}`}
    >
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M16 27V13m0 6C5 19 5 10 5 6c7 0 11 4 11 13Zm0-5c0-8 5-11 12-11 0 8-3 12-12 13Z" />
        </svg>
      </span>
      <span className="brand-copy">
        <strong>{site.brand.shortName}</strong>
        <small>{site.brand.name}</small>
      </span>
    </Link>
  );
}
