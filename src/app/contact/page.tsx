import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { IntakeForm } from "@/components/intake-form";
import {
  Container,
  Eyebrow,
  PlaceholderValue,
  Section,
} from "@/components/ui";
import { site, PLACEHOLDER } from "@/content/site";

export const metadata: Metadata = {
  title: "Prepare your review",
  description:
    "Prepare the property address, violation number and agency details needed for an NYC building-violation review.",
};

export default function ContactPage() {
  const { contact } = site;

  return (
    <>
      <PageHero
        eyebrow="Prepare your review"
        title="Start with the details on the notice."
        lede="Gather the property address, violation number, agency and any hearing date. Online submissions will be added once the business inbox is connected."
      />

      <Section tone="paper">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[1fr_340px] lg:gap-16">
            <Reveal>
              <IntakeForm />
            </Reveal>

            <aside className="space-y-10">
              <Reveal delay={100}>
                <div>
                  <Eyebrow>Business contact</Eyebrow>
                  <dl className="mt-6 space-y-6 border-t border-rule pt-6 text-[0.9375rem]">
                    <div>
                      <dt className="text-muted">Phone</dt>
                      <dd className="mt-2">
                        {contact.phone === PLACEHOLDER ? (
                          <PlaceholderValue label="phone number" />
                        ) : (
                          <a href={`tel:${contact.phoneHref}`} className="text-ink">
                            {contact.phone}
                          </a>
                        )}
                      </dd>
                    </div>
                    <div className="border-t border-rule-soft pt-6">
                      <dt className="text-muted">Email</dt>
                      <dd className="mt-2">
                        {contact.email === PLACEHOLDER ? (
                          <PlaceholderValue label="email address" />
                        ) : (
                          <a href={`mailto:${contact.email}`} className="text-ink">
                            {contact.email}
                          </a>
                        )}
                      </dd>
                    </div>
                    <div className="border-t border-rule-soft pt-6">
                      <dt className="text-muted">Hours</dt>
                      <dd className="mt-2">
                        {contact.hours === PLACEHOLDER ? (
                          <PlaceholderValue label="business hours" />
                        ) : (
                          <span className="text-ink">{contact.hours}</span>
                        )}
                      </dd>
                    </div>
                    <div className="border-t border-rule-soft pt-6">
                      <dt className="text-muted">Service area</dt>
                      <dd className="mt-2 text-ink">{site.serviceArea}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="bg-mist p-7">
                  <Eyebrow tone="signal">If there&rsquo;s a hearing date</Eyebrow>
                  <p className="mt-5 text-[0.9375rem] leading-relaxed text-body">
                    A hearing date on your notice is the most time-sensitive
                    thing in this whole process. Failing to appear generally
                    produces a default at a higher penalty than the original
                    charge. Keep that date with the rest of your notice details
                    so it is ready when review requests are connected.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div>
                  <Eyebrow>Once review requests are live</Eyebrow>
                  <ol className="mt-6 space-y-4 border-t border-rule pt-6 text-[0.9375rem] leading-relaxed text-body">
                    <li className="flex gap-4">
                      <span className="field-label pt-1 text-muted">01</span>
                      <span>The record is reviewed against your notice.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="field-label pt-1 text-muted">02</span>
                      <span>
                        You receive a plain-English explanation and next steps.
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <span className="field-label pt-1 text-muted">03</span>
                      <span>
                        Pricing, where needed, follows the case review.
                      </span>
                    </li>
                  </ol>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
