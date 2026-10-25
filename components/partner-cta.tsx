import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function PartnerCTA() {
  return (
    <section className="partner-section" aria-labelledby="partner-banner-heading">
      <div className="container">
        <div className="partner-banner">
          <div className="partner-content">
            <div className="micro">{site.partnerSection.eyebrow}</div>
            <h2 id="partner-banner-heading">
              {site.partnerSection.title}
              <br />
              <em>{site.partnerSection.titleItalic}</em>
            </h2>
            <p>{site.partnerSection.description}</p>
            <Link href={site.partnerSection.cta.href} className="button white">
              {site.partnerSection.cta.label}{" "}
              <ArrowUpRight className="page-arrow" aria-hidden="true" />
            </Link>
          </div>
          <div className="partner-visual">
            <Image
              src={site.partnerSection.image.src}
              alt={site.partnerSection.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
