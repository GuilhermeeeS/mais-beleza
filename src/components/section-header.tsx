import { Reveal } from "./reveal";

/** Marca decorativa minimalista (glifo dentro de um círculo). */
function Mark({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full border ${
        light ? "border-porcelana/30" : "border-linha"
      }`}
    >
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden className="text-bronze">
        <path
          d="M12 2c.6 3.8 2.2 5.4 6 6-3.8.6-5.4 2.2-6 6-.6-3.8-2.2-5.4-6-6 3.8-.6 5.4-2.2 6-6Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
}) {
  const center = align === "center";
  const light = tone === "light";

  return (
    <Reveal>
      <div className={center ? "mx-auto max-w-xl text-center" : "max-w-xl"}>
        <div className={center ? "" : "inline-block"}>
          <Mark light={light} />
        </div>
        {eyebrow && (
          <p
            className={`mt-5 text-xs font-semibold uppercase tracking-[0.22em] ${
              light ? "text-porcelana/60" : "text-neutro"
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={`mt-4 text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-[3.25rem] ${
            light ? "text-porcelana" : "text-cafe"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-5 text-base leading-relaxed ${
              center ? "mx-auto max-w-md" : "max-w-md"
            } ${light ? "text-porcelana/70" : "text-neutro"}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
