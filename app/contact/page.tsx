"use client";

import { useState } from "react";
import { site } from "@/content/site";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Mail,
  Building2,
  Send,
  ShieldCheck,
} from "lucide-react";

const categoryLabels: Record<string, string> = {
  rwa: "Residential Welfare Association (RWA)",
  hotel: "Hotel / Restaurant / Catering",
  hospital: "Hospital / Healthcare Facility",
  canteen: "Defense / Institutional Canteen",
  gaushala: "Gaushala / Cattle Dairy",
  market: "Fruit / Vegetable Wholesale Mandi",
  other: "Other Bulk Organic Generator",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    category: "rwa",
    volume: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.organization.trim()) {
      return;
    }

    const accessKey =
      (typeof window !== "undefined" && (window as unknown as { __WEB3FORMS_KEY?: string }).__WEB3FORMS_KEY) ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    const isKeyConfigured = Boolean(
      accessKey && accessKey.trim() !== "" && accessKey !== "your_access_key_here"
    );

    if (!isKeyConfigured) {
      // Access key is pending in .env.local
      setStatus("error");
      setErrorMessage(
        "Web3Forms access key is pending in .env.local. You can paste your free access key into .env.local for automatic inbox delivery, or click below to transmit immediately via your email app."
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `HW&EM Feedstock Inquiry: ${formData.organization} (${formData.name})`,
          from_name: `${formData.name} - ${formData.organization}`,
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          generator_category: categoryLabels[formData.category] || formData.category,
          estimated_waste_volume: formData.volume || "Not specified",
          message: formData.message || "No additional comments provided.",
          botcheck: false,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          data.message || "Unable to transmit inquiry. Please check your access key or send via email directly."
        );
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        "Network connection issue while communicating with Web3Forms. Please try again or use the email app button below."
      );
    }
  }

  function handleReset() {
    setFormData({
      name: "",
      organization: "",
      email: "",
      category: "rwa",
      volume: "",
      message: "",
    });
    setStatus("idle");
    setErrorMessage("");
  }

  return (
    <>
      <section className="subhero" aria-labelledby="contact-page-title">
        <div className="container">
          <div className="micro">START A CONVERSATION</div>
          <h1 id="contact-page-title">
            Let&apos;s explore what<br />
            <em>we can build together.</em>
          </h1>
          <p>
            For prospective feedstock collaboration, technical inquiries, and stakeholder engagement
            regarding the proposed bioenergy initiative.
          </p>
        </div>
      </section>

      <section className="section content-page" aria-labelledby="contact-heading">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column: Factual Status & Company Details */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="micro text-[#267655] mb-2">COMMUNICATION TRANSPARENCY</div>
                <h2 id="contact-heading" className="text-3xl lg:text-4xl">
                  Connect with the initiative.
                </h2>
                <p className="text-[#5d6e63] text-sm md:text-base leading-relaxed mt-3">
                  Humus Waste &amp; Energy Management (HW&amp;EM) is currently progressing through project feasibility,
                  statutory clearances, and initial stakeholder outreach for the proposed facility.
                </p>
              </div>

              {/* Status Notice Card */}
              <div className="bg-white p-7 rounded-2xl border border-[#d8dfd3] shadow-sm">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-7 h-7 text-[#267655] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-[#123d2c]">Official Project Correspondence</h3>
                    <p className="text-xs text-[#5d6e63] leading-relaxed mt-2">
                      Inquiries for prospective feedstock supply agreements, technical dialogue, and project collaboration
                      are actively received at <strong>{site.contact.email}</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Details */}
              <div className="bg-white p-7 rounded-2xl border border-[#d8dfd3] shadow-sm space-y-4">
                <h3 className="font-bold text-lg text-[#123d2c]">Company Details</h3>
                <div className="flex items-start gap-3 text-sm text-[#1e3026]">
                  <Building2 className="w-5 h-5 text-[#267655] flex-shrink-0 mt-0.5" />
                  <div className="space-y-3">
                    <strong>{site.company.name}</strong>
                    <p className="text-xs text-[#5d6e63]">
                      <strong>CIN:</strong> {site.company.cin}
                    </p>
                    <p className="text-xs text-[#5d6e63]">Incorporated in {site.company.incorporationYear}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#1e3026]">
                  <Mail className="w-5 h-5 text-[#267655] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Project Correspondence:</strong>
                    <p className="text-xs text-[#5d6e63] mt-0.5">
                      <a
                        href={`mailto:${site.contact.email}`}
                        className="text-[#267655] font-semibold hover:underline"
                      >
                        {site.contact.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Stakeholder FAQ Accordions / Highlights */}
              <div className="bg-[#f0f4ec] p-6 rounded-2xl border border-[#d8dfd3]">
                <h4 className="font-bold text-sm text-[#123d2c] uppercase tracking-wider mb-3">
                  Frequently Asked Questions
                </h4>
                <div className="space-y-4 text-xs text-[#1e3026]">
                  <div>
                    <strong className="block text-[#123d2c]">Is the facility operational today?</strong>
                    <p className="text-[#5d6e63] mt-1">
                      No. The project is a proposed facility undergoing pre-development feasibility and statutory clearances.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#d8dfd3]">
                    <strong className="block text-[#123d2c]">Are offtake agreements with gas distribution companies finalized?</strong>
                    <p className="text-[#5d6e63] mt-1">
                      Agreements with gas distribution companies are proposed under a bilateral framework and have not yet been executed.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#d8dfd3]">
                    <strong className="block text-[#123d2c]">What feedstocks are acceptable?</strong>
                    <p className="text-[#5d6e63] mt-1">
                      Segregated kitchen waste, plate leftovers, market fruit/vegetable scraps, and cattle manure from generators within 15 km.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Exploratory Inquiry Form */}
            <div className="lg:col-span-6">
              <div className="bg-white p-8 md:p-10 rounded-[20px] border border-[#d8dfd3] shadow-sm">
                <div className="micro text-[#267655] mb-2">EXPLORATORY ENGAGEMENT</div>
                <h3 className="text-2xl font-bold text-[#123d2c] mb-2">
                  Register Exploratory Interest
                </h3>
                <p className="text-xs text-[#5d6e63] leading-relaxed mb-6">
                  Bulk waste generators interested in potential feedstock sourcing partnerships or technical dialogue
                  can specify their parameters below. Submissions deliver directly to the project inbox.
                </p>

                {status === "success" ? (
                  <div className="bg-[#f1f7ee] border border-[#a6c5a6] rounded-2xl p-7 text-center space-y-5 animate-fade-in">
                    <div className="w-14 h-14 rounded-full bg-[#267655] text-white grid place-items-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="micro text-[#267655] block mb-1">DISPATCHED TO INBOX</span>
                      <h4 className="text-2xl font-bold text-[#123d2c]">
                        Inquiry Transmitted Successfully
                      </h4>
                    </div>
                    <p className="text-xs text-[#5d6e63] leading-relaxed max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Your inquiry from <strong>{formData.organization}</strong> has been submitted successfully.
                    </p>

                    {/* Inquiry parameters recap */}
                    <div className="bg-white/90 border border-[#d8dfd3] rounded-xl p-4 text-left text-xs space-y-2 max-w-md mx-auto">
                      <div className="flex justify-between py-1 border-b border-[#eef2ea]">
                        <span className="text-[#5d6e63]">Contact Person:</span>
                        <strong className="text-[#123d2c]">{formData.name}</strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#eef2ea]">
                        <span className="text-[#5d6e63]">Organization:</span>
                        <strong className="text-[#123d2c]">{formData.organization}</strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#eef2ea]">
                        <span className="text-[#5d6e63]">Email:</span>
                        <strong className="text-[#123d2c]">{formData.email}</strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#eef2ea]">
                        <span className="text-[#5d6e63]">Category:</span>
                        <strong className="text-[#123d2c]">{categoryLabels[formData.category] || formData.category}</strong>
                      </div>
                      {formData.volume && (
                        <div className="flex justify-between py-1 border-b border-[#eef2ea]">
                          <span className="text-[#5d6e63]">Est. Volume:</span>
                          <strong className="text-[#123d2c]">{formData.volume}</strong>
                        </div>
                      )}
                    </div>

                    <p className="text-[11px] text-[#718076] max-w-sm mx-auto leading-normal">
                      The Humus Waste &amp; Energy Management coordination team coordinates with organic waste generators within 15 km of the proposed facility.
                    </p>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="button text-xs py-2.5 px-5"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Anti-spam honeypot */}
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold text-[#123d2c] mb-1">
                          Contact Person *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-2.5 rounded-lg border border-[#d8dfd3] text-sm focus:outline-none focus:border-[#267655] bg-[#fafaf6]"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-org" className="block text-xs font-bold text-[#123d2c] mb-1">
                          Organization / Entity *
                        </label>
                        <input
                          id="contact-org"
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Green Valley RWA"
                          className="w-full px-4 py-2.5 rounded-lg border border-[#d8dfd3] text-sm focus:outline-none focus:border-[#267655] bg-[#fafaf6]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-bold text-[#123d2c] mb-1">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@organization.org"
                          className="w-full px-4 py-2.5 rounded-lg border border-[#d8dfd3] text-sm focus:outline-none focus:border-[#267655] bg-[#fafaf6]"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-category" className="block text-xs font-bold text-[#123d2c] mb-1">
                          Generator Category
                        </label>
                        <div className="relative">
                          <select
                            id="contact-category"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-lg border border-[#d8dfd3] text-sm focus:outline-none focus:border-[#267655] bg-[#fafaf6] appearance-none cursor-pointer"
                          >
                            <option value="rwa">Residential Welfare Association (RWA)</option>
                            <option value="hotel">Hotel / Restaurant / Catering</option>
                            <option value="hospital">Hospital / Healthcare Facility</option>
                            <option value="canteen">Defense / Institutional Canteen</option>
                            <option value="gaushala">Gaushala / Cattle Dairy</option>
                            <option value="market">Fruit / Vegetable Wholesale Mandi</option>
                            <option value="other">Other Bulk Organic Generator</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-[#5d6e63] absolute right-3 top-3 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-volume" className="block text-xs font-bold text-[#123d2c] mb-1">
                        Estimated Daily Organic Waste (Optional)
                      </label>
                      <input
                        id="contact-volume"
                        type="text"
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        placeholder="e.g. 500 kg/day or 2 tons/day"
                        className="w-full px-4 py-2.5 rounded-lg border border-[#d8dfd3] text-sm focus:outline-none focus:border-[#267655] bg-[#fafaf6]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold text-[#123d2c] mb-1">
                        Inquiry Details / Sourcing Notes
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide location details, segregation practices, or specific collaboration questions..."
                        className="w-full px-4 py-2.5 rounded-lg border border-[#d8dfd3] text-sm focus:outline-none focus:border-[#267655] bg-[#fafaf6]"
                      />
                    </div>

                    <div className="disclaimer-box flex items-start gap-2.5 text-xs text-[#5d6e63]">
                      <AlertCircle className="w-4 h-4 text-[#267655] flex-shrink-0 mt-0.5" />
                      <span>
                        For direct correspondence, email the official project desk at <strong>{site.contact.email}</strong>.
                      </span>
                    </div>

                    {status === "error" && (
                      <div className="bg-[#fff4f2] border border-[#f5c6cb] rounded-xl p-4 text-xs space-y-3">
                        <div className="flex items-start gap-2.5 text-[#9f2d20]">
                          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{errorMessage}</span>
                        </div>
                        <div className="pt-1 flex flex-wrap gap-2">
                          <a
                            href={`mailto:${site.contact.email}?subject=${encodeURIComponent(
                              `HW&EM Feedstock Inquiry: ${formData.organization} (${formData.name})`
                            )}&body=${encodeURIComponent(
                              `Contact Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nGenerator Category: ${categoryLabels[formData.category] || formData.category}\nEstimated Waste Volume: ${formData.volume || "Not specified"}\n\nProject / Technical Message:\n${formData.message || "N/A"}`
                            )}`}
                            className="button text-xs py-2 px-3.5 bg-[#9f2d20] border-[#9f2d20] hover:bg-[#85251a]"
                          >
                            Send via Email App (mailto) <ArrowUpRight className="page-arrow" />
                          </a>
                          <button
                            type="button"
                            onClick={() => setStatus("idle")}
                            className="button ghost text-xs py-2 px-3"
                          >
                            Edit Form
                          </button>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="button w-full mt-2 disabled:opacity-75 disabled:cursor-wait"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 ml-1 animate-spin" /> Transmitting Inquiry...
                        </>
                      ) : (
                        <>
                          Transmit Feedstock Inquiry <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
