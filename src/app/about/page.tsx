import type { Metadata } from "next";
import { AssetImage } from "@/components/asset-image";
import { ClosingCta } from "@/components/closing-cta";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow, Section } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.owner} is a New York City construction and compliance professional with more than a decade of experience in permits, filings and violation resolution.`,
};

const experience = [
  ["10+ years", "Construction, permitting and compliance"],
  ["NYC filing representative", "DOB process and agency coordination"],
  ["Citywide", "Supporting property owners across all five boroughs"],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Construction experience. Compliance focus."
        lede={`${site.name} is led by ${site.owner}, serving ${site.serviceArea}.`}
      />

      <Section tone="paper" className="py-16 sm:py-20">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <Reveal>
              <AssetImage
                id="owner-portrait"
                className="aspect-4/5 w-full"
                sizes="(max-width: 1024px) 100vw, 35vw"
                priority
              />
            </Reveal>
            <Reveal delay={80}>
              <Eyebrow>Nasacha Canto</Eyebrow>
              <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] text-ink">
                A practical guide through a complicated city process.
              </h2>
              <div className="mt-7 max-w-2xl space-y-5 text-[1.0625rem] leading-relaxed text-body">
                <p>
                  Nasacha is a New York City construction and compliance
                  professional with more than a decade of experience in project
                  management, architectural coordination, permitting and
                  violation resolution.
                </p>
                <p>
                  Her career began with architectural drawings, field
                  measurements and DOB filings, then expanded into construction
                  management on renovations and ground-up developments across
                  the city. That field experience informs how she reads a notice:
                  against the work, the permits and the records behind it.
                </p>
                <p>
                  Through Canto Violation Solutions, she helps owners research
                  open matters, assemble supporting documentation and navigate
                  the steps needed to bring a property back into compliance.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <dl className="mt-14 grid gap-px border border-rule bg-rule md:grid-cols-3">
              {experience.map(([value, label]) => (
                <div key={value} className="bg-white p-6">
                  <dt className="font-display text-2xl text-ink">{value}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-body">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </Section>

      <Section tone="mist" className="border-y border-rule py-16 sm:py-20">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
              <Eyebrow>Where we work</Eyebrow>
              <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] text-ink">
                New York City property records, rules and agencies.
              </h2>
              <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-body">
                Based in {site.basedIn}, Canto works with DOB, HPD, OATH, DOT
                and FDNY matters across the five boroughs.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <AssetImage id="brooklyn-rowhouses" className="aspect-16/10 w-full" sizes="(max-width: 1024px) 100vw, 50vw" />
            </Reveal>
          </div>
        </Container>
      </Section>

      <ClosingCta />
    </>
  );
}
