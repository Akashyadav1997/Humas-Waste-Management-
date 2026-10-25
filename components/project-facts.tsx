import { site } from "@/content/site";

export function ProjectFacts() {
  return (
    <>
      <div className="flow-strip" role="region" aria-label="Circular bioenergy pathway">
        <div className="container flow-inner">
          <div className="flow-title">
            Organic waste <i>→</i> Clean energy <i>→</i> Living soil
          </div>
          <div className="flow-badge">
            {site.flowStrip.badge}{" "}
            <svg
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="w-7 h-7"
              aria-hidden="true"
            >
              <path d="M16 27V13m0 6C5 19 5 10 5 6c7 0 11 4 11 13Zm0-5c0-8 5-11 12-11 0 8-3 12-12 13Z" />
            </svg>
          </div>
        </div>
      </div>

      <section className="metrics" aria-label="Key proposed project parameters">
        <dl className="container metrics-grid">
          {site.metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <dt className="micro">{metric.label}</dt>
              <dd className="my-1">
                <strong>{metric.value}</strong>
              </dd>
              <dd>
                <p>{metric.note}</p>
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
