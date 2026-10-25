import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Check, Compass, Hotel, School, ShieldAlert, Sparkles, UtensilsCrossed } from "lucide-react";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Explore feedstock partnership opportunities for bulk waste generators within a 15 km radius of the proposed Ghitorni bioenergy facility.",
};

const partnerIcons = [
  Building2,
  Hotel,
  UtensilsCrossed,
  School,
  Compass,
  Sparkles,
];

export default function PartnersPage() {
  return (
    <>
      <section className="subhero" aria-labelledby="partners-page-title">
        <div className="container">
          <div className="micro">COLLABORATION</div>
          <h1 id="partners-page-title">
            Every useful resource begins<br />
            <em>somewhere.</em>
          </h1>
          <p>
            We are preparing feedstock partnerships with bulk organic waste generators within a 15 km radius
            of Ghitorni to ensure reliable, clean inputs for the proposed bioenergy facility.
          </p>
        </div>
      </section>

      <section className="section content-page" aria-labelledby="partners-overview">
        <div className="container">
          <div className="simple-columns">
            <div>
              <div className="micro text-[#267655] mb-2">SOURCING PHILOSOPHY</div>
              <h2 id="partners-overview">Why local partnerships matter.</h2>
              <p>
                A continuous 3.5 TPD compressed biogas facility requires a steady, high-quality stream of segregated
                biodegradable feedstock. By partnering directly with bulk waste generators, we can ensure waste is sorted
                at source, preserving its organic energy value while diverting tons of discard away from overflowing landfills.
              </p>
              <p>
                Our collection strategy limits procurement to a <strong>15 km radius</strong> around Ghitorni, New Delhi.
                This regional focus achieves three critical operational advantages:
              </p>
              <ul className="space-y-3 mt-4 text-sm text-[#1e3026]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#267655] flex-shrink-0" />
                  <span><strong>Minimized Transport Emissions:</strong> Shorter hauling routes ensure net-negative carbon balance.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#267655] flex-shrink-0" />
                  <span><strong>Optimal Feedstock Freshness:</strong> Rapid transit prevents premature open-air decay.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#267655] flex-shrink-0" />
                  <span><strong>Reliable Turnaround:</strong> Predictable logistics schedules for local bulk facilities.</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[460px] rounded-[18px] overflow-hidden shadow-lg bg-[#204b38]">
              <Image
                src="/images/plant-seedling.jpeg"
                alt="Hands holding rich organic compost and a vibrant green sprout"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b20]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-sm font-medium">
                Turning everyday kitchen discard into living soil and clean energy.
              </div>
            </div>
          </div>

          {/* Sourcing Categories Grid */}
          <div className="mt-20">
            <div className="micro text-[#267655] mb-2">ELIGIBLE GENERATOR CATEGORIES</div>
            <h2 className="text-3xl lg:text-4xl">Potential Feedstock Partners</h2>
            <p className="text-sm text-[#5d6e63] mt-2 mb-8 max-w-2xl">
              As outlined in the Ghitorni project feasibility study, the following bulk waste generators are
              suitable for structured long-term feedstock supply agreements:
            </p>

            <div className="feedstock-grid">
              {site.partnerSection.sources.map((source, index) => {
                const IconComponent = partnerIcons[index % partnerIcons.length];
                return (
                  <div key={source.category} className="feedstock-item flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#eef3eb] text-[#267655] grid place-items-center flex-shrink-0 mt-1">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <strong>{source.category}</strong>
                      <span>Feedstock: {source.feedstock}</span>
                      <p>{source.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sourcing Framework Steps */}
          <div className="mt-20">
            <div className="micro text-[#267655] mb-2">PARTNERSHIP LIFECYCLE</div>
            <h2 className="text-3xl lg:text-4xl">How Partnership Exploration Works</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl border border-[#d8dfd3]">
                <div className="text-xs font-bold text-[#267655] mb-2 tracking-wider">PHASE 01</div>
                <h4 className="font-bold text-lg text-[#123d2c] mb-2">Stream Audit</h4>
                <p className="text-xs text-[#5d6e63] leading-relaxed">
                  Evaluating daily organic waste volumes, segregation protocols, and moisture profiles to confirm digester suitability.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#d8dfd3]">
                <div className="text-xs font-bold text-[#267655] mb-2 tracking-wider">PHASE 02</div>
                <h4 className="font-bold text-lg text-[#123d2c] mb-2">Logistics Routing</h4>
                <p className="text-xs text-[#5d6e63] leading-relaxed">
                  Mapping route logistics within the 15 km radius to integrate with dedicated closed-container collection vehicles.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#d8dfd3]">
                <div className="text-xs font-bold text-[#267655] mb-2 tracking-wider">PHASE 03</div>
                <h4 className="font-bold text-lg text-[#123d2c] mb-2">Supply Agreement</h4>
                <p className="text-xs text-[#5d6e63] leading-relaxed">
                  Structuring long-term bilateral waste supply agreements with transparent quality metrics and delivery standards.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#d8dfd3]">
                <div className="text-xs font-bold text-[#267655] mb-2 tracking-wider">PHASE 04</div>
                <h4 className="font-bold text-lg text-[#123d2c] mb-2">ESG Reporting</h4>
                <p className="text-xs text-[#5d6e63] leading-relaxed">
                  Providing verified landfill diversion records and carbon reduction metrics for partner sustainability certifications.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Verification Callout */}
          <div className="contact-panel mt-16 max-w-full">
            <div className="flex items-start gap-4">
              <ShieldAlert className="w-6 h-6 text-[#267655] flex-shrink-0 mt-1" />
              <div>
                <strong>Official Partner Onboarding &amp; Verification Notice</strong>
                <p className="text-sm text-[#5d6e63] leading-relaxed mt-1">
                  Humus Waste &amp; Energy Management is currently finalizing corporate registration and formal communication
                  channels. Formal agreements will commence upon execution of statutory project approvals.
                  Prospective bulk generators may register exploratory interest via our contact page.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href="/contact" className="button">
                    Register Exploratory Interest <ArrowUpRight className="page-arrow" />
                  </Link>
                  <Link href="/project" className="button ghost">
                    Review Ghitorni Facility Specs <ArrowUpRight className="page-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
