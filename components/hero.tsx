"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function Hero() {
  const [lens, setLens] = useState<"soil" | "contrast">("soil");

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="micro eyebrow">{site.hero.eyebrow}</div>
          <h1 id="hero-title">
            Waste is not<br />
            the end.<br />
            <em>{site.hero.headlineItalic}</em>
          </h1>
          <p className="hero-lede">{site.hero.lede}</p>
          <div className="hero-ctas">
            <Link href={site.hero.primaryCta.href} className="button">
              {site.hero.primaryCta.label}{" "}
              <ArrowUpRight className="page-arrow" aria-hidden="true" />
            </Link>
            <Link href={site.hero.secondaryCta.href} className="button ghost">
              {site.hero.secondaryCta.label}{" "}
              <ArrowUpRight className="page-arrow" aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-foot">
            <div className="dots" aria-hidden="true">
              <b />
              <b />
              <b />
            </div>
            <span>{site.hero.stripWords.join(" · ")}</span>
          </div>
        </div>

        <div className="hero-visual" role="region" aria-label="Hero visual and environmental story">
          {/* Layer 1: Living Soil (Hands cupping compost & seedling) */}
          <div
            className={`hero-img-layer ${
              lens === "soil" ? "active-layer" : "hidden-layer"
            }`}
          >
            <Image
              src="/images/hands-seedling.png"
              alt="Hands cupping rich fertile organic compost and a healthy green seedling"
              fill
              sizes="(max-width: 768px) 92vw, (max-width: 1050px) 48vw, 620px"
              priority
              className="object-cover"
            />
          </div>

          {/* Layer 2: Land Vitality Contrast (Aerial Split: Green vs Drought) */}
          <div
            className={`hero-img-layer ${
              lens === "contrast" ? "active-layer" : "hidden-layer"
            }`}
          >
            <Image
              src="/images/soil-split.jpeg"
              alt="Aerial view contrasting lush regenerated crops on the left with cracked drought-parched earth on the right"
              fill
              sizes="(max-width: 768px) 92vw, (max-width: 1050px) 48vw, 620px"
              className="object-cover"
            />
          </div>

          {/* Perspective Switcher */}
          <div className="hero-lens-switch" role="tablist" aria-label="Hero visual perspective">
            <button
              type="button"
              role="tab"
              aria-selected={lens === "soil"}
              onClick={() => setLens("soil")}
              className={`hero-lens-btn ${lens === "soil" ? "active" : ""}`}
            >
              01 Living Soil
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={lens === "contrast"}
              onClick={() => setLens("contrast")}
              className={`hero-lens-btn ${lens === "contrast" ? "active" : ""}`}
            >
              02 Land Contrast
            </button>
          </div>

          {/* Floating Pill Badge */}
          <div className="photo-label">
            {lens === "soil" ? site.hero.floatingPill : "DROUGHT VS LIVING EARTH"}
          </div>

          {/* Editorial Vertical Label */}
          <div className="visual-vertical" aria-hidden="true">
            {lens === "soil"
              ? site.hero.verticalLabel
              : "ORGANIC CARBON RESTORES DEPLETED SOILS"}
          </div>

          {/* Floating Belief Card */}
          <div className="floating-card">
            <div className="micro">
              {lens === "soil" ? site.hero.beliefCard.eyebrow : "THE CRITICAL NEED"}
            </div>
            <strong>
              {lens === "soil"
                ? site.hero.beliefCard.title
                : "Protecting soil from drought."}
            </strong>
            <p>
              {lens === "soil"
                ? site.hero.beliefCard.description
                : "Decades of intensive chemical farming dry and crack topsoil. Organic humus restores soil moisture and earthworm biology."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
