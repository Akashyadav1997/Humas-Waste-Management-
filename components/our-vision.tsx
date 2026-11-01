import { Flame, Sprout } from "lucide-react";
import { site } from "@/content/site";

const outcomeIcons = [Flame, Sprout];

export function OurVision() {
  const { vision } = site;

  return (
    <section id="vision" className="section vision" aria-labelledby="vision-title">
      <div className="container vision-grid">
        <div className="vision-copy">
          <div className="micro eyebrow">{vision.eyebrow}</div>
          <h2 id="vision-title" className="section-heading">
            {vision.title} <em>{vision.titleItalic}</em>
          </h2>
          <p className="section-description">{vision.description}</p>
          <div className="vision-outcomes">
            {vision.outcomes.map((outcome, index) => {
              const Icon = outcomeIcons[index];
              return (
                <div className="vision-outcome" key={outcome.title}>
                  <span className="vision-icon"><Icon size={22} aria-hidden="true" /></span>
                  <div>
                    <h3>{outcome.title}</h3>
                    <p>{outcome.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="vision-opportunity" aria-labelledby="vision-opportunity-title">
          <div className="micro">{vision.opportunity.eyebrow}</div>
          <h3 id="vision-opportunity-title">{vision.opportunity.title}</h3>
          <p className="vision-context">{vision.opportunity.context}</p>
          <dl className="vision-inputs">
            {vision.opportunity.inputs.map((input) => (
              <div key={input.label}>
                <dt>{input.label}</dt>
                <dd><strong>{input.value}</strong><span>{input.unit}</span></dd>
              </div>
            ))}
          </dl>
          <div className="vision-recovery">
            <p className="micro">{vision.opportunity.recoveryLabel}</p>
            <dl className="vision-outputs">
              {vision.opportunity.outputs.map((output) => (
                <div key={output.label}>
                  <dt>{output.label}</dt>
                  <dd>{output.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="vision-note">{vision.opportunity.note}</p>
        </aside>
      </div>
    </section>
  );
}
