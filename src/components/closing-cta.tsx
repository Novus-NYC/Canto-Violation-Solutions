import { Reveal } from "@/components/reveal";
import { ArrowRight, Button, Container, Eyebrow, Section } from "@/components/ui";

export function ClosingCta({
  eyebrow = "Start with the record",
  title = "Find the property record first.",
  body = "The City’s public tools can help you locate the property, permit and Stop Work Order information connected to your notice.",
  href = "/lookup",
  actionLabel = "Open public record tools",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  href?: string;
  actionLabel?: string;
}) {
  return (
    <Section tone="mist" className="border-t border-rule">
      <Container size="wide">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow tone="signal">{eyebrow}</Eyebrow>
              <h2 className="mt-6 text-[clamp(2rem,4.6vw,3.25rem)] text-ink">
                {title}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
                {body}
              </p>
            </div>
            <Button href={href} className="shrink-0">
              {actionLabel}
              <ArrowRight />
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
