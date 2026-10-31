import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, ArrowUpRight, Factory, FileText, MapPin } from "lucide-react";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Project",
  description:
    "Comprehensive engineering specifications and planning details for the proposed 3.5 TPD compressed biogas facility in Ghitorni, New Delhi.",
};

export default function ProjectPage() {
  return (
    <>
      <section className="subhero" aria-labelledby="project-title">
        <div className="container">
          <div className="micro">PROPOSED GHITORNI FACILITY</div>
          <h1 id="project-title">
            A cleaner energy future,<br />
            <em>planned in New Delhi.</em>
          </h1>
          <p>
            Detailed engineering parameters, site requirements, and proposed technology configuration
            for the 3.5 TPD compressed biogas and organic fertilizer initiative in Ghitorni.
          </p>
        </div>
      </section>

      <section className="section content-page" aria-labelledby="project-details-heading">
        <div className="container">
          <div className="simple-columns">
            <div>
              <div className="micro text-[#267655] mb-3">FACILITY OVERVIEW</div>
              <h2 id="project-details-heading">Purpose-built for urban resource recovery.</h2>
              <p>
                The proposed project involves the establishment of a state-of-the-art Compressed Biogas (CBG)
                production facility utilizing segregated kitchen waste, fruit and vegetable scraps, and cattle manure
                as primary feedstocks.
              </p>
              <p>
                The facility has been conceptualized in line with the Government of India&apos;s biofuel promotion
                initiatives to reduce fossil fuel dependence, improve urban environmental sanitation, and advance
                the circular bioeconomy.
              </p>
              <p>
                The plant will comprise segregated waste receiving and handling systems, pre-processing and feed
                preparation units, two mesophilic anaerobic digesters, modern hollow-fibre membrane gas purification,
                and digestate dewatering for vermicompost and liquid organic manure.
              </p>
              <div className="project-facts mt-6">
                <div>
                  <b>Project Status</b>
                  <span className="text-[#267655] font-semibold">Proposed; subject to feasibility, approvals, and agreements</span>
                </div>
                <div>
                  <b>Proposed Location</b>
                  <span>Ghitorni, New Delhi</span>
                </div>
                <div>
                  <b>Target Output</b>
                  <span>3.5 TPD CBG (180.46 MMBTU/day / 1,277 T/year PNG)</span>
                </div>
                <div>
                  <b>Indicative Land</b>
                  <span>Approx. 4 acres</span>
                </div>
                <div>
                  <b>Feedstock Radius</b>
                  <span>Planned within 15 km radius</span>
                </div>
                <div>
                  <b>Offtake Framework</b>
                  <span>Proposed bilateral agreements with gas distribution companies — not signed</span>
                </div>
              </div>
            </div>

            <div className="project-graphic h-[480px]">
              <div className="project-stamp">
                CONCEPTUAL TECHNICAL SCHEMATIC
              </div>
              <svg
                viewBox="0 0 540 490"
                role="img"
                aria-label="Conceptual engineering line drawing of anaerobic digesters and gas processing equipment"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient id="topGradProj" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#a6c5a6" />
                    <stop offset="1" stopColor="#6da284" />
                  </linearGradient>
                  <linearGradient id="baseGradProj" x1="0" y1="0" x2="1" y2="1">
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
                    fill="url(#baseGradProj)"
                    stroke="#235941"
                    strokeWidth="2"
                  />
                  <ellipse cx="161" cy="217" rx="91" ry="38" fill="url(#topGradProj)" stroke="#356c53" strokeWidth="2" />
                  <ellipse cx="161" cy="215" rx="75" ry="27" fill="none" stroke="#d1e1c4" strokeWidth="1.5" />
                  <path
                    d="M274 242q0-40 89-40t89 40v102q0 39-89 39t-89-39Z"
                    fill="url(#baseGradProj)"
                    stroke="#235941"
                    strokeWidth="2"
                  />
                  <ellipse cx="363" cy="242" rx="89" ry="39" fill="url(#topGradProj)" stroke="#356c53" strokeWidth="2" />
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
          </div>

          {/* Strategic Location Details */}
          <div className="mt-20">
            <div className="micro text-[#267655] mb-2">LOCATION RATIONALE</div>
            <h2 className="text-3xl lg:text-4xl">Why Ghitorni, New Delhi?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-7 rounded-xl border border-[#d8dfd3]">
                <MapPin className="w-8 h-8 text-[#267655] mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#123d2c]">Bulk Waste Proximity</h3>
                <p className="text-sm text-[#5d6e63] leading-relaxed">
                  Located within reach of extensive bulk waste generators across South Delhi, including major institutional kitchens,
                  Army canteens, residential welfare associations, and catering clusters.
                </p>
              </div>
              <div className="bg-white p-7 rounded-xl border border-[#d8dfd3]">
                <Factory className="w-8 h-8 text-[#267655] mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#123d2c]">Infrastructure Readiness</h3>
                <p className="text-sm text-[#5d6e63] leading-relaxed">
                  Direct transport connectivity, road access for waste trucks, and reliable water and industrial power availability
                  essential for continuous 24/7 mesophilic digestion operation.
                </p>
              </div>
              <div className="bg-white p-7 rounded-xl border border-[#d8dfd3]">
                <FileText className="w-8 h-8 text-[#267655] mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#123d2c]">Gas Grid Offtake Proximity</h3>
                <p className="text-sm text-[#5d6e63] leading-relaxed">
                  Strategic proximity to city gas distribution infrastructure under the proposed
                  grid injection framework with gas distribution companies, minimizing compression and pipeline extension costs.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="mt-20">
            <div className="micro text-[#267655] mb-2">ENGINEERING BLUEPRINT</div>
            <h2 className="text-3xl lg:text-4xl">Planned Technical Specifications</h2>
            <p className="text-sm text-[#5d6e63] mt-2 mb-6 max-w-2xl">
              Extracted directly from project planning documentation. All equipment parameters represent design specifications
              for the proposed continuous-operation facility.
            </p>

            <table className="specs-table" aria-label="Technical specifications table">
              <thead>
                <tr>
                  <th scope="col">Plant Component</th>
                  <th scope="col">Proposed Engineering Parameter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Site Concept</td>
                  <td>{site.technicalSpecs.site}</td>
                </tr>
                <tr>
                  <td>Feedstock Collection Radius</td>
                  <td>{site.technicalSpecs.collectionRadius}</td>
                </tr>
                <tr>
                  <td>Design CBG Output Capacity</td>
                  <td>
                    <strong>3.5 TPD CBG</strong> (equivalent to 180.46 MMBTU/day daily pipeline dispatch; 1,277 T/year annual PNG throughput)
                  </td>
                </tr>
                <tr>
                  <td>Feedstock Segregation</td>
                  <td>{site.technicalSpecs.segregation}</td>
                </tr>
                <tr>
                  <td>Pre-processing &amp; Conditioning</td>
                  <td>{site.technicalSpecs.preparation}</td>
                </tr>
                <tr>
                  <td>Pre-digestion System</td>
                  <td>{site.technicalSpecs.predigestion}</td>
                </tr>
                <tr>
                  <td>Anaerobic Digestion Configuration</td>
                  <td>
                    <strong>{site.technicalSpecs.digesters.count}</strong>
                    <br />
                    • {site.technicalSpecs.digesters.dimensions}
                    <br />
                    • {site.technicalSpecs.digesters.grossVolume}
                    <br />
                    • {site.technicalSpecs.digesters.workingVolume}
                  </td>
                </tr>
                <tr>
                  <td>Gas Upgrading Technology</td>
                  <td>{site.technicalSpecs.gasUpgrading}</td>
                </tr>
                <tr>
                  <td>Biogas Storage Capacity</td>
                  <td>{site.technicalSpecs.gasStorage}</td>
                </tr>
                <tr>
                  <td>Grid Compression Unit</td>
                  <td>{site.technicalSpecs.compression}</td>
                </tr>
                <tr>
                  <td>Digestate Dewatering</td>
                  <td>{site.technicalSpecs.dewatering}</td>
                </tr>
                <tr>
                  <td>Fertilizer By-Products</td>
                  <td>{site.technicalSpecs.fertilizerOutputs}</td>
                </tr>
                <tr>
                  <td>Offtake &amp; Commercialization</td>
                  <td>{site.technicalSpecs.offtake}</td>
                </tr>
              </tbody>
            </table>

            {/* Factual Transparency Note */}
            <div className="disclaimer-box flex items-start gap-3 mt-6">
              <AlertCircle className="w-5 h-5 text-[#267655] flex-shrink-0 mt-0.5" />
              <div>
                <strong>Owner Verification Flag:</strong> {site.technicalSpecs.discrepancyNote}
              </div>
            </div>
          </div>

          {/* Offtake Status Callout */}
          <div className="mt-16 bg-[#ffffff] border border-[#d8dfd3] rounded-[18px] p-8 md:p-10">
            <div className="micro text-[#267655] mb-2">COMMERCIAL OFFTAKE FRAMEWORK</div>
            <h3 className="text-2xl font-bold text-[#123d2c] mb-3">
              Proposed Bilateral Agreements with Gas Distribution Companies
            </h3>
            <p className="text-sm md:text-base text-[#5d6e63] leading-relaxed mb-4">
              To ensure long-term commercial bankability and revenue certainty, bilateral agreements are proposed to be entered
              into with gas distribution companies for the offtake and marketing of Compressed Biogas under applicable
              regulatory and commercial frameworks.
            </p>
            <p className="text-sm text-[#5d6e63] leading-relaxed mb-6">
              The upgraded biomethane will be compressed to meet applicable gas quality, pressure, and safety requirements
              specified by gas distribution companies for injection into city gas distribution networks serving household kitchen stoves across the
              National Capital. These arrangements remain proposed and subject to pipeline connectivity, gas testing certification,
              and mutually executed contracts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/process" className="button">
                Review How It Works <ArrowUpRight className="page-arrow" />
              </Link>
              <Link href="/partners" className="button ghost">
                Feedstock Partner Opportunities <ArrowUpRight className="page-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
