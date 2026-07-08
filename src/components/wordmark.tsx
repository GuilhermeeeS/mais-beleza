import { site } from "@/lib/site";

// Wordmark tipográfico da Mais Beleza (stand-in até o SVG oficial da logo).
export function Wordmark({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const scale = {
    sm: { nome: "text-lg", script: "text-sm" },
    md: { nome: "text-2xl", script: "text-lg" },
    lg: { nome: "text-3xl", script: "text-2xl" },
  }[size];

  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className={`wordmark ${scale.nome}`}>{site.nome.toUpperCase()}</span>
      <span className={`wordmark-script ${scale.script} self-end -mt-0.5 text-current opacity-70`}>
        {site.tagline}
      </span>
    </span>
  );
}
