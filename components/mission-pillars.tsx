import Image from "next/image";
import { site } from "@/content/site";

export function MissionPillars() {
  return (
    <section className="section" aria-labelledby="purpose-title">
      <div className="container intro">
        <div>
          <div className="micro">{site.purpose.eyebrow}</div>
          <h2 id="purpose-title">
            {site.purpose.title} <em>{site.purpose.titleItalic}</em>
          </h2>
          <p className="section-description">{site.purpose.description}</p>
          <div className="intro-pillars">
            {site.purpose.pillars.map((pillar) => (
              <span key={pillar.num}>
                {pillar.num} {pillar.label}
              </span>
            ))}
          </div>
        </div>
        <div className="intro-img">
          <Image
            src={site.purpose.image.src}
            alt={site.purpose.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 550px"
            className="object-cover"
          />
          <div className="intro-img-caption">{site.purpose.image.caption}</div>
        </div>
      </div>
    </section>
  );
}
