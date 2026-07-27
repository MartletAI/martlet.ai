import { Icon } from "@/components/icon";
import type { IconProps } from "@/components/icon";

interface Verdict {
  label: string;
  code: string;
  name: string;
  reason: string;
  icon: IconProps["name"];
  chip: string;
  text: string;
  border: string;
}

const VERDICTS: Verdict[] = [
  {
    label: "Supported",
    code: "E11.42 → HCC 37",
    name: "Diabetes with chronic complications",
    reason: "evidence sentence linked, page 4",
    icon: "badge-check",
    chip: "bg-[#ecfdf3]",
    text: "text-[#067647]",
    border: "border-[#a6f4c5]",
  },
  {
    label: "Routed to review",
    code: "I50.22 → HCC 226",
    name: "Heart failure, chronic systolic",
    reason: "signature not found on the record",
    icon: "message-notification",
    chip: "bg-[#fffaeb]",
    text: "text-[#b45309]",
    border: "border-[#fedf89]",
  },
  {
    label: "Flagged for deletion",
    code: "F33.1 → HCC 155",
    name: "Major depressive disorder",
    reason: "not addressed at this encounter",
    icon: "brackets-check",
    chip: "bg-[#fef3f2]",
    text: "text-[#b42318]",
    border: "border-[#fecdca]",
  },
];

/**
 * Verdicts - the three outcomes every code lands in, shown as the artifact
 * rather than described. Static by design: the page already carries two
 * animations, and this is meant to be scanned, not watched.
 */
export function Verdicts() {
  return (
    <div className="max-w-[1100px] mx-auto">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none p-0 m-0">
        {VERDICTS.map((verdict) => (
          <li
            key={verdict.label}
            className={`rounded-2xl border bg-white p-5 ${verdict.border}`}
          >
            <div
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-4 ${verdict.chip}`}
            >
              <Icon
                name={verdict.icon}
                className={`w-4 h-4 ${verdict.text}`}
                aria-hidden
              />
              <span className={`text-[13px] font-bold ${verdict.text}`}>
                {verdict.label}
              </span>
            </div>
            <div className="evidence-mono text-sm text-muted mb-1">
              {verdict.code}
            </div>
            <div className="text-[15px] font-semibold text-[#0a0a12] leading-snug mb-2">
              {verdict.name}
            </div>
            <div className="evidence-mono text-xs text-muted">
              {verdict.reason}
            </div>
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted-light text-center mt-4 mb-0">
        All patient data shown is synthetically generated for illustration.
      </p>
    </div>
  );
}
