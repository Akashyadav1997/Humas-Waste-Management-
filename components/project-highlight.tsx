import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function ProjectHighlight() {
  return (
    <section className="section project" aria-labelledby="project-preview-title">
      <div className="container project-grid">
        <div className="project-graphic">
          <div className="project-stamp">
            ILLUSTRATIVE CONCEPT — NOT THE ACTUAL FACILITY
          </div>
          <svg
            viewBox="0 0 540 490"
            role="img"
            aria-label="Conceptual engineering line drawing of anaerobic digesters and gas processing equipment"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="topGrad" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#a6c5a6" />
                <stop offset="1" stopColor="#6da284" />
              </linearGradient>
              <linearGradient id="baseGrad" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#3f8062" />
                <stop offset="1" stopColor="#1e5a43" />
              </linearGradient>
            </defs>
            <g stroke="#92b299" strokeWidth="1" opacity=".32">
              <path d="M0 70H540M0 110H540M0 150H540M0 190H540M0 230H540M0 270H540M0 310H540M0 350H540M0 390H540M0 430H540M0 470H540" />
              <path d="M30 0V490M70 0V490M110 0V490M150 0V490M190 0V490M230 0V490M270 0V490M310 0V490M350 0V490M390 0V490M430 0V490M470 0V490M510 0V490" />
            </g>
            <ellipse cx="260" cy="391" rx="217" ry="44" fill="#aec6a6" opacity=".6" />
            <g>
              <path
                d="M70 216q0-36 91-36t91 36v118q0 40-91 40t-91-40Z"
                fill="url(#baseGrad)"
                stroke="#235941"
                strokeWidth="2"
              />
              <ellipse cx="161" cy="217" rx="91" ry="38" fill="url(#topGrad)" stroke="#356c53" strokeWidth="2" />
              <ellipse cx="161" cy="215" rx="75" ry="27" fill="none" stroke="#d1e1c4" strokeWidth="1.5" />
              <path
                d="M274 242q0-40 89-40t89 40v102q0 39-89 39t-89-39Z"
                fill="url(#baseGrad)"
                stroke="#235941"
                strokeWidth="2"
              />
              <ellipse cx="363" cy="242" rx="89" ry="39" fill="url(#topGrad)" stroke="#356c53" strokeWidth="2" />
              <ellipse cx="363" cy="240" rx="72" ry="27" fill="none" stroke="#d1e1c4" strokeWidth="1.5" />
            </g>
            <path
              d="M250 265h28v-20h14m-73-24v-39h75v43m-29 70h-33m173-85v-34h65v80"
              fill="none"
              stroke="#e5eee0"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M250 265h28v-20h14m-73-24v-39h75v43m-29 70h-33m173-85v-34h65v80"
              fill="none"
              stroke="#346d56"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <g fill="#f5f8ed" stroke="#66947c" strokeWidth="2">
              <rect x="304" y="325" width="103" height="65" rx="4" />
              <rect x="378" y="303" width="82" height="87" rx="3" />
              <rect x="286" y="352" width="22" height="38" rx="2" />
            </g>
            <g fill="#588970">
              <rect x="325" y="346" width="18" height="14" rx="2" />
              <rect x="350" y="346" width="18" height="14" rx="2" />
              <rect x="404" y="329" width="15" height="22" rx="1" />
              <rect x="428" y="329" width="15" height="22" rx="1" />
            </g>
            <g stroke="#42694f" fill="none" strokeWidth="1.3" strokeDasharray="4 4">
              <path d="M151 161V79h-62M372 198V134h67M396 385v40h61" />
            </g>
            <g fill="#245a42" fontSize="10" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">
              <text x="26" y="74">ANAEROBIC</text>
              <text x="26" y="87">DIGESTER 01</text>
              <text x="445" y="127">DIGESTER 02</text>
              <text x="445" y="423">UPGRADING</text>
            </g>
          </svg>
        </div>

        <div>
          <div className="micro">{site.projectSection.eyebrow}</div>
          <h2 id="project-preview-title">{site.projectSection.title}</h2>
          <p className="section-description">{site.projectSection.description}</p>
          <div className="project-facts">
            {site.projectSection.facts.slice(0, 3).map((fact) => (
              <div key={fact.label}>
                <b>{fact.label}</b>
                <span>{fact.value}</span>
              </div>
            ))}
          </div>
          <Link href={site.projectSection.cta.href} className="button">
            {site.projectSection.cta.label}{" "}
            <ArrowUpRight className="page-arrow" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
