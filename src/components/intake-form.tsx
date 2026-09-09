import Link from "next/link";
import { ArrowRight } from "@/components/ui";

const items = [
  ["Property address", "The street address on the notice."],
  ["Violation or summons number", "Usually printed near the top of the notice."],
  ["Issuing agency", "DOB, HPD, OATH/ECB, DOT, FDNY or another agency."],
  ["Hearing date", "Include it if one is printed on the notice."],
] as const;

/** A deliberately non-submitting intake checklist until an inbox is connected. */
export function IntakeForm() {
  return (
    <div className="document p-6 sm:p-9">
      <p className="field-label text-accent">Prepare your review</p>
      <h2 className="mt-4 text-[clamp(1.65rem,3vw,2.25rem)] text-ink">
        Gather these four details first.
      </h2>
      <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-body">
        Online review requests are not connected to an inbox yet. To protect
        your information, this site does not collect or submit it until that
        connection is in place.
      </p>

      <ol className="mt-8 divide-y divide-rule border-y border-rule">
        {items.map(([title, body], index) => (
          <li key={title} className="grid grid-cols-[2rem_1fr] gap-4 py-5">
            <span className="field-label pt-1 text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-[1.0625rem] font-semibold text-ink">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-body">{body}</p>
            </div>
          </li>
        ))}
      </ol>

      <Link
        href="/lookup"
        className="mt-8 inline-flex items-center gap-2 bg-ink px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-700"
      >
        Open public record tools <ArrowRight />
      </Link>
    </div>
  );
}
