import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sprout } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Humus Waste & Energy Management's founding mission: converting urban organic waste into clean energy while helping Indian farmers move toward organic agriculture.",
};

export default function AboutPage() {
  return (
    <>
      <section className="subhero" aria-labelledby="about-heading">
        <div className="container">
          <div className="micro">WHO WE ARE</div>
          <h1 id="about-heading">
            Recovering value from<br />
            <em>what we leave behind.</em>
          </h1>
          <p>
            Our mission connects responsible management of biodegradable organic waste with
            cleaner renewable energy and sustainable agricultural soil regeneration.
          </p>
        </div>
      </section>

      <section className="section content-page" aria-labelledby="about-vision">
        <div className="container">
          {/* Feature 1: Mission & The Farmer Story */}
          <div className="simple-columns">
            <div>
              <div className="micro text-[#267655] mb-3">OUR FOUNDING OBJECTIVE</div>
              <h2 id="about-vision">Supporting India&apos;s agricultural future.</h2>
              <p>
                Humus Waste &amp; Energy Management (HW&amp;EM) was established with a clear, transformative purpose:
                to convert urban organic waste into renewable clean energy, and actively support our farmers and our
                country to move towards organic farming by reducing dependence on chemical fertilizers.
              </p>
              <p>
                To achieve this objective, we are initiating a proposed project to convert kitchen waste (municipal
                solid waste organics), fruit-vegetable market residues, and cattle manure into high-grade Compressed
                Biogas (CBG) and organic compost.
              </p>
              <p>
                In urban centers like New Delhi, organic waste constitutes over 50% of the total municipal waste stream.
                When dumped into overflowing landfills, it decomposes anaerobically without containment, releasing potent
                methane into the atmosphere. Our proposed Ghitorni initiative treats this material not as a disposal burden,
                but as a vital feedstock for clean fuel and living soil.
              </p>
            </div>
            <div className="relative h-[500px] rounded-[22px] overflow-hidden shadow-lg bg-[#1a382b]">
              <Image
                src="/images/farmer-field.jpeg"
                alt="Rural Indian farmer standing before vibrant green agricultural fields"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover object-[center_65%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b20]/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-sm font-medium">
                Supporting farmers and healthy soil through circular organic nutrients.
              </div>
            </div>
          </div>

          {/* Three Bioeconomy Pillars */}
          <div className="mt-24">
            <div className="micro text-[#267655] mb-2">THREE PILLARS OF OUR APPROACH</div>
            <h2 className="text-3xl lg:text-4xl">Built on circular bioeconomy principles.</h2>
            <div className="info-grid">
              <div className="info-tile">
                <span className="micro">01 / RESOURCE RECOVERY</span>
                <h3>Divert from Landfills</h3>
                <p>
                  Establish disciplined, segregated collection networks within a 15 km radius to prevent organic waste
                  from reaching open dumpsites, eliminating fugitive methane emissions at source.
                </p>
              </div>
              <div className="info-tile">
                <span className="micro">02 / RENEWABLE FUEL</span>
                <h3>City Gas Substitution</h3>
                <p>
                  Deploy modern mesophilic anaerobic digestion and membrane gas purification to produce high-grade
                  biomethane capable of supplying city gas networks and domestic stoves.
                </p>
              </div>
              <div className="info-tile">
                <span className="micro">03 / SOIL REGENERATION</span>
                <h3>Natural Organic Manure</h3>
                <p>
                  Process post-digestion slurry into Solid Organic Fertilizer (SOF) and Liquid Fermented Organic Manure
                  (LFOM), restoring microbial vitality to depleted agricultural soil.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2: The Living Soil Transformation (using soil-split.jpeg) */}
          <div className="mt-24 bg-[#ffffff] border border-[#d8dfd3] rounded-[24px] p-8 md:p-14 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 relative h-[440px] rounded-[18px] overflow-hidden bg-[#243d2c]">
                <Image
                  src="/images/soil-split.jpeg"
                  alt="Side-by-side comparison of lush fertile green vegetation on the left and cracked arid drought soil on the right"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#f7f8f3f0] text-[#123d2c] px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                  Soil Health Contrast
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#0b2b20]/90 text-white p-3 rounded-lg text-xs">
                  Chemical depletion &amp; drought (right) vs. living soil regenerated by organic matter (left).
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="micro text-[#267655] mb-2">THE SOIL REGENERATION IMPERATIVE</div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#123d2c] mb-4">
                  Why organic bio-fertilizer is irreplaceable.
                </h3>
                <p className="text-sm md:text-base text-[#5d6e63] leading-relaxed mb-4">
                  Over decades of intensive chemical farming, excessive synthetic fertilizers strip topsoil of organic
                  carbon, beneficial mycorrhizal fungi, and earthworm biomes. Soil hardens, losing its natural water-holding
                  capacity and cracking during dry spells.
                </p>
                <p className="text-sm md:text-base text-[#5d6e63] leading-relaxed mb-6">
                  <strong>Humus</strong>—the biological heart of living soil—can only be replenished through organic matter.
                  By refining anaerobic digestate into vermicompost and liquid fermented manure, our proposed facility returns
                  vital micronutrients (NPK + trace minerals) to rural farmlands, dramatically improving moisture retention
                  and crop resilience.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-[#d8dfd3] text-xs">
                  <div>
                    <span className="font-bold text-[#123d2c] block mb-1">Solid Organic Fertilizer (SOF)</span>
                    <p className="text-[#5d6e63]">Aerobic compost &amp; vermicompost for long-term carbon restoration.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#123d2c] block mb-1">Liquid Fermented Manure (LFOM)</span>
                    <p className="text-[#5d6e63]">Bioactive liquid nutrition for rapid foliar and root uptake.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Governance & Commitments */}
          <div className="mt-20 bg-[#ffffff] border border-[#d8dfd3] rounded-[20px] p-8 md:p-12 shadow-sm">
            <div className="max-w-3xl">
              <div className="micro text-[#267655] mb-3">GOVERNANCE &amp; COMMITMENTS</div>
              <h2 className="text-2xl md:text-3xl mb-4">Integrity and factual transparency.</h2>
              <p className="text-sm md:text-base text-[#5d6e63] leading-relaxed mb-6">
                HW&amp;EM operates with strict adherence to environmental planning ethics. We distinguish clearly between
                our engineered planning targets and operational realities:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-[#1e3026]">
                  <CheckCircle2 className="w-5 h-5 text-[#267655] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Proposed Project Status:</strong> The Ghitorni facility is currently in the pre-development and
                    statutory planning phase. It is not currently operational.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#1e3026]">
                  <ShieldCheck className="w-5 h-5 text-[#267655] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Proposed Commercial Offtake:</strong> Offtake arrangements with Indraprastha Gas Limited (IGL)
                    are under commercial and regulatory evaluation as a proposed bilateral agreement; no binding agreement has been signed.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#1e3026]">
                  <Sprout className="w-5 h-5 text-[#267655] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Science-Based Sourcing:</strong> Feedstock plans are restricted to verified segregated organic streams
                    within 15 km to ensure net-negative lifecycle emissions.
                  </span>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/project" className="button">
                  Explore proposed specifications <ArrowUpRight className="page-arrow" />
                </Link>
                <Link href="/partners" className="button ghost">
                  Feedstock collaboration <ArrowUpRight className="page-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
