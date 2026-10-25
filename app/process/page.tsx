import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Flame, Layers, Sparkles, Sprout, Truck, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Explore the custom responsive process diagram showing organic waste collection, preparation, anaerobic digestion, biomethane upgrading, and organic fertilizer recovery.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="subhero" aria-labelledby="process-page-title">
        <div className="container">
          <div className="micro">PROCESS ARCHITECTURE</div>
          <h1 id="process-page-title">
            From organic material to<br />
            <em>useful resources.</em>
          </h1>
          <p>
            A proposed continuous bioenergy process combining mechanical feedstock conditioning, mesophilic
            anaerobic digestion, two-stage membrane gas upgrading, and comprehensive digestate manure recovery.
          </p>
        </div>
      </section>

      <section className="section content-page" aria-labelledby="process-diagram-heading">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <div className="micro text-[#267655] mb-2">INTEGRATED WORKFLOW</div>
            <h2 id="process-diagram-heading">One input stream. Two high-value outputs.</h2>
            <p>
              The proposed Ghitorni facility is engineered for continuous 24/7 operation throughout the year.
              Every batch of segregated organic waste collected from bulk urban generators undergoes precise
              pre-treatment before biological conversion into clean energy and soil regenerators.
            </p>
          </div>

          {/* Interactive Responsive Process Flow Diagram */}
          <div className="bg-[#0b2b20] text-white p-6 md:p-12 rounded-[24px] border border-[#204b38] shadow-xl">
            <div className="flex items-center justify-between border-b border-[#204b38] pb-6 mb-10 flex-wrap gap-4">
              <div>
                <span className="text-[#d3e9a2] text-xs font-bold tracking-widest uppercase">
                  CUSTOM PROCESS SCHEMATIC
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-1 text-white">
                  Organic Resource Recovery Cycle
                </h3>
              </div>
              <span className="text-xs bg-[#204b38] text-[#ccebcf] px-4 py-2 rounded-full font-medium">
                Continuous Mesophilic Digestion
              </span>
            </div>

            {/* Stages 1 to 3: Feedstock to Digestion */}
            <div className="grid md:grid-cols-3 gap-6 relative">
              {/* Stage 1 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#d3e9a2] text-xs font-bold tracking-widest">STAGE 01</span>
                    <Truck className="w-5 h-5 text-[#d3e9a2]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Collection &amp; Receipt</h4>
                  <p className="text-xs text-[#b7d0c2] leading-relaxed">
                    Segregated kitchen waste, vegetable/fruit scraps, and cattle manure gathered within a 15 km radius
                    from bulk generators (RWAs, hotels, army canteens, institutional kitchens).
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#ccebcf]">
                  • Max 15 km logistics radius<br />• Dedicated segregated intake
                </div>
              </div>

              {/* Stage 2 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#d3e9a2] text-xs font-bold tracking-widest">STAGE 02</span>
                    <Layers className="w-5 h-5 text-[#d3e9a2]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Conditioning &amp; Mixing</h4>
                  <p className="text-xs text-[#b7d0c2] leading-relaxed">
                    2nd stage manual and metal detection segregation, heavy-duty waste shredder, and vertical agitator
                    mixing tank blending food waste with carbon sources to maintain ideal C:N ratio and pre-hydrolyzation.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#ccebcf]">
                  • Metal detection &amp; shredding<br />• Hydrolyzation tank balance
                </div>
              </div>

              {/* Stage 3 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#d3e9a2] text-xs font-bold tracking-widest">STAGE 03</span>
                    <Waves className="w-5 h-5 text-[#d3e9a2]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Mesophilic Digestion</h4>
                  <p className="text-xs text-[#b7d0c2] leading-relaxed">
                    Biological digestion in two primary digesters (22 m diameter × 9 m cylindrical height; ~3,421 m³ gross
                    volume each). Anaerobic bacteria break down organic solids, producing raw biogas and nutrient slurry.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#ccebcf]">
                  • 2 × 3,421 m³ digesters<br />• Controlled 37°C mesophilic zone
                </div>
              </div>
            </div>

            {/* Branching Connector Indicator */}
            <div className="my-10 text-center relative">
              <div className="inline-flex items-center gap-2 bg-[#204b38] text-[#d3e9a2] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#396350]">
                <span>Anaerobic Digestion Split</span>
                <ArrowDown className="w-4 h-4" />
                <span>Two Independent Pathways</span>
              </div>
            </div>

            {/* Stage 4: Dual Pathways */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pathway A: Biogas Upgrading */}
              <div className="bg-[#123d2c] border-2 border-[#d3e9a2]/40 rounded-2xl p-8 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#204b38] text-[#d3e9a2] grid place-items-center">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#d3e9a2] font-bold tracking-widest uppercase block">
                      PATHWAY A · RENEWABLE ENERGY
                    </span>
                    <h4 className="text-xl font-bold text-white">Biogas Upgrading &amp; Grid Injection</h4>
                  </div>
                </div>
                <p className="text-sm text-[#b7d0c2] leading-relaxed mb-6">
                  Raw biogas passes into two 2,500 m³ gas holders (5,000 m³ total storage). It is then purified
                  through two-stage hollow-fibre membrane gas filters to strip CO2, moisture, and H2S. The resulting
                  biomethane is compressed to meet pipeline standards for household stoves.
                </p>
                <div className="bg-[#0b2b20] p-4 rounded-xl border border-white/10 space-y-2 text-xs text-[#d0dfd2]">
                  <div className="flex justify-between">
                    <span>Target Output:</span>
                    <strong className="text-white">3.5 TPD CBG (180.46 MMBTU/day)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Purification:</span>
                    <strong className="text-white">Two-stage hollow-fibre membranes</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Storage:</span>
                    <strong className="text-white">Two holders (5,000 m³ total)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Offtake Destination:</span>
                    <strong className="text-[#d3e9a2]">Proposed IGL network injection</strong>
                  </div>
                </div>
              </div>

              {/* Pathway B: Living Soil */}
              <div className="bg-[#123d2c] border-2 border-[#9ccb68]/40 rounded-2xl p-8 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#204b38] text-[#9ccb68] grid place-items-center">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#9ccb68] font-bold tracking-widest uppercase block">
                      PATHWAY B · SUSTAINABLE AGRICULTURE
                    </span>
                    <h4 className="text-xl font-bold text-white">Digestate Dewatering &amp; Compost</h4>
                  </div>
                </div>
                <p className="text-sm text-[#b7d0c2] leading-relaxed mb-6">
                  Digestate slurry from the bottom of the digesters is transferred to a Solid-Liquid Separation (SLS)
                  unit. The dewatered solids are converted into Solid Organic Fertilizer (SOF / vermicompost / aerobic compost),
                  while the liquid fraction is conditioned into Liquid Fermented Organic Manure (LFOM).
                </p>
                <div className="bg-[#0b2b20] p-4 rounded-xl border border-white/10 space-y-2 text-xs text-[#d0dfd2]">
                  <div className="flex justify-between">
                    <span>Separation Unit:</span>
                    <strong className="text-white">SLS dewatering system</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Solid Output:</span>
                    <strong className="text-white">Solid Organic Fertilizer (SOF)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Liquid Output:</span>
                    <strong className="text-white">Liquid Fermented Organic Manure</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Agricultural Impact:</span>
                    <strong className="text-[#9ccb68]">Chemical fertilizer replacement</strong>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-[#89a893] mt-8 italic">
              Simplified conceptual engineering flow; exact parameters subject to final engineering configuration and regulatory approvals.
            </p>
          </div>

          {/* Feedstock Yield Science Section */}
          <div className="mt-20">
            <div className="micro text-[#267655] mb-2">FEEDSTOCK SCIENCE &amp; EFFICIENCY</div>
            <h2 className="text-3xl lg:text-4xl">Why Food Waste Delivers Superior Biogas Yields</h2>
            <p className="text-sm text-[#5d6e63] mt-3 mb-8 max-w-3xl leading-relaxed">
              As documented in project research, municipal kitchen food scraps and vegetable market organics have
              a significantly higher biomethane yield per metric ton than conventional cattle-only dung or crop residues,
              owing to their high volatile solids content, readily digestible starches, and optimal moisture.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-7 rounded-xl border border-[#d8dfd3]">
                <Sparkles className="w-6 h-6 text-[#267655] mb-3" />
                <h4 className="font-bold text-lg text-[#123d2c]">High Caloric Biomethane</h4>
                <p className="text-xs text-[#5d6e63] leading-relaxed mt-2">
                  Kitchen and restaurant food waste produces up to 3 to 4 times more cubic meters of biogas per wet ton
                  compared to agricultural biomass alone.
                </p>
              </div>
              <div className="bg-white p-7 rounded-xl border border-[#d8dfd3]">
                <Layers className="w-6 h-6 text-[#267655] mb-3" />
                <h4 className="font-bold text-lg text-[#123d2c]">Balanced Co-Substrate</h4>
                <p className="text-xs text-[#5d6e63] leading-relaxed mt-2">
                  Blending kitchen scraps with cattle manure and horticulture waste provides the optimal Carbon-to-Nitrogen
                  (C:N) ratio of 25:1 to 30:1, preventing digester acidification.
                </p>
              </div>
              <div className="bg-white p-7 rounded-xl border border-[#d8dfd3]">
                <Sprout className="w-6 h-6 text-[#267655] mb-3" />
                <h4 className="font-bold text-lg text-[#123d2c]">Bioactive Digestate</h4>
                <p className="text-xs text-[#5d6e63] leading-relaxed mt-2">
                  Food waste slurry retains abundant macro- and micronutrients (NPK), making the resulting vermicompost
                  and LFOM exceptionally fertile for organic crop farming.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <Link href="/project" className="button">
              View Project Specifications <ArrowUpRight className="page-arrow" />
            </Link>
            <Link href="/partners" className="button ghost">
              Become a Feedstock Partner <ArrowUpRight className="page-arrow" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
