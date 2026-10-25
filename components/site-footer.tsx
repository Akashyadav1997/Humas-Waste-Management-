import Link from "next/link";
import { site } from "@/content/site";
import { Brand } from "./brand";

export function SiteFooter() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand light />
            <p className="footer-about">{site.footer.tagline}</p>
          </div>
          <div>
            <div className="micro">Discover</div>
            <div className="footer-links">
              <Link href="/about">About us</Link>
              <Link href="/project">Our project</Link>
              <Link href="/process">How it works</Link>
            </div>
          </div>
          <div>
            <div className="micro">Get involved</div>
            <div className="footer-links">
              <Link href="/partners">Partnerships</Link>
              <Link href="/contact">Contact</Link>
              <a
                href="mailto:humuswasteandenergy@gmail.com"
                className="text-[#d0dfd2] hover:text-white transition-colors truncate"
              >
                humuswasteandenergy@gmail.com
              </a>
            </div>
          </div>
          <div>
            <div className="micro">Location</div>
            <div className="footer-links">
              <span>Ghitorni</span>
              <span>New Delhi, India</span>
              <span className="text-[#89a893] text-xs">Proposed project site</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{site.footer.copyright}</span>
          <span>{site.footer.disclaimer}</span>
        </div>
      </div>
    </footer>
  );
}
