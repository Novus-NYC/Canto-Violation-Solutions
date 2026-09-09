import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ArrowRight, Container, Eyebrow, Section } from "@/components/ui";
import { publicRecordTools } from "@/content/portal";

export const metadata: Metadata = {
  title: "Public record lookup",
  description:
    "Start your NYC building record search through the City’s DOB NOW, BIS and Stop Work Order public portals.",
};

export default function LookupPage() {
  return (
    <>
      <PageHero
        eyebrow="Public records"
        title="Find the record. Know your next step."
        lede="Use the official City tools below to locate a property record. No information is collected or stored on this site."
      />

      <Section tone="paper" className="py-14 sm:py-20">
        <Container size="wide">
          <div className="max-w-3xl border-l-4 border-accent bg-mist p-6 sm:p-8">
            <Eyebrow>Start with the address</Eyebrow>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-body">
              If you have a violation or summons number, keep it handy. The
              City’s tools can help locate the public record; keep the notice
              with the record details for a future case review.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {publicRecordTools.map((tool) => (
              <article key={tool.title} className="document flex flex-col p-7">
                <p className="field-label text-accent">{tool.label}</p>
                <h2 className="mt-4 text-2xl text-ink">{tool.title}</h2>
                <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-body">
                  {tool.description}
                </p>
                <a
                  href={tool.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
                >
                  Open City tool <ArrowRight />
                </a>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted">
            These are third-party City of New York websites. Canto Violation
            Solutions is not affiliated with, endorsed by, or able to modify
            the records in these portals.
          </p>
        </Container>
      </Section>
    </>
  );
}
