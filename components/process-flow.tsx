import { Zap } from "lucide-react";
import { site } from "@/content/site";

export function ProcessFlow() {
  return (
    <section className="section process" aria-labelledby="process-heading">
      <div className="container">
        <div className="process-head">
          <div>
            <div className="micro mb-4">{site.processSection.eyebrow}</div>
            <h2 id="process-heading" className="section-heading">
              {site.processSection.title} <em>{site.processSection.titleItalic}</em>
            </h2>
          </div>
          <p>{site.processSection.subtitle}</p>
        </div>

        <ol className="process-track" aria-label="Conceptual four-stage bioenergy workflow">
          {site.processSection.stages.map((stage) => (
            <li key={stage.num} className="step">
              <div className="step-num">{stage.num}</div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ol>

        <div className="pathway" role="group" aria-label="Two distinct outputs from anaerobic digestion">
          <div>
            <Zap className="w-8 h-8 text-[#d3e9a2] flex-shrink-0" aria-hidden="true" />
            <div>
              <strong>{site.processSection.pathways[0].badge} → {site.processSection.pathways[0].title}</strong>
              <small>{site.processSection.pathways[0].detail}</small>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="w-8 h-8 text-[#d3e9a2] flex-shrink-0"
              aria-hidden="true"
            >
              <path d="M16 27V13m0 6C5 19 5 10 5 6c7 0 11 4 11 13Zm0-5c0-8 5-11 12-11 0 8-3 12-12 13Z" />
            </svg>
            <div>
              <strong>{site.processSection.pathways[1].badge} → {site.processSection.pathways[1].title}</strong>
              <small>{site.processSection.pathways[1].detail}</small>
            </div>
          </div>
        </div>

        <p className="process-note">{site.processSection.note}</p>
      </div>
    </section>
  );
}
