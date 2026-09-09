import Link from "next/link";
import { AgencyIndex } from "@/components/agency-index";
import { ArrowRight, Button, Container, Eyebrow } from "@/components/ui";
import { NoticeAnatomy } from "@/components/notice-anatomy";
import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";

const quickStarts = [
  ["01", "Find your record", "Use the official DOB public tools to locate the property record."],
  ["02", "Read the notice", "Confirm the agency, address, violation number and any hearing date."],
  ["03", "Plan the response", "Get a clear explanation of the correction path before work begins."],
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "linear-gradient(135deg, transparent 0 42%, rgb(135 200 244 / 0.18) 42% 43%, transparent 43% 100%)",
          }}
          aria-hidden="true"
        />
        <Container size="wide" className="relative">
          <div className="py-14 sm:py-20 lg:py-24">
            <div className="max-w-4xl">
              <p className="field-label animate-rise text-accent-300">
                Canto Violation Solutions · New York City
              </p>
              <h1
                className="animate-rise mt-5 text-[clamp(2.8rem,7vw,5.4rem)] text-white"
                style={{ animationDelay: "70ms" }}
              >
                NYC building violations.
                <br />
                <span className="text-dim">Clear answers. A practical path forward.</span>
              </h1>
              <p
                className="animate-rise mt-7 max-w-2xl text-lg leading-relaxed text-dim sm:text-xl"
                style={{ animationDelay: "140ms" }}
              >
                {site.owner} helps property owners understand notices, organize
                the response, and move toward a clean record.
              </p>
              <div
                className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row"
                style={{ animationDelay: "200ms" }}
              >
                <Button href="/lookup" variant="secondary">
                  Look up a public record <ArrowRight />
                </Button>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2.5 border border-ink-700 px-6 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors hover:border-accent-300"
                >
                  See services <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-rule bg-white py-10 sm:py-14">
        <Container size="wide">
          <div className="grid gap-px border border-rule bg-rule md:grid-cols-3">
            {quickStarts.map(([number, title, body]) => (
              <div key={number} className="bg-white p-6 sm:p-7">
                <p className="field-label text-accent">{number}</p>
                <h2 className="mt-3 text-xl text-ink">{title}</h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-16 sm:py-20">
        <Container size="wide">
          <Reveal>
            <div className="grid gap-8 border-b border-rule pb-8 lg:grid-cols-[1fr_25rem] lg:items-end">
              <div>
                <Eyebrow>Know what you are looking at</Eyebrow>
                <h2 className="mt-4 text-[clamp(2rem,4.8vw,3.3rem)] text-ink">
                  The four details that matter first.
                </h2>
              </div>
              <p className="text-[0.9375rem] leading-relaxed text-body">
                Agency, violation number, property address and hearing date.
                That is enough to begin the right conversation.
              </p>
            </div>
          </Reveal>
          <div className="mt-10">
            <NoticeAnatomy />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container size="wide">
          <Reveal>
            <div className="flex flex-col gap-5 border-b border-rule pb-7 md:flex-row md:items-end md:justify-between">
              <div>
                <Eyebrow>Services</Eyebrow>
                <h2 className="mt-4 text-[clamp(2rem,4.8vw,3.3rem)] text-ink">
                  Find the name on your notice.
                </h2>
              </div>
              <Link href="/services" className="font-semibold text-accent underline underline-offset-4">
                View all services
              </Link>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-2"><AgencyIndex /></div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink py-16 text-white sm:py-20">
        <Container size="wide">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_25rem] lg:items-end">
              <div>
                <Eyebrow tone="light">About Canto</Eyebrow>
                <h2 className="mt-4 text-[clamp(2rem,4.8vw,3.3rem)] text-white">
                  One NYC compliance specialist from review through closeout.
                </h2>
              </div>
              <div>
                <p className="text-[1.0625rem] leading-relaxed text-dim">
                  More than a decade across construction management, DOB filings,
                  permitting and violation resolution.
                </p>
                <Link href="/about" className="mt-5 inline-flex items-center gap-2 font-semibold text-white underline decoration-accent-300 decoration-2 underline-offset-4">
                  Meet {site.owner.split(" ")[0]} <ArrowRight />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
