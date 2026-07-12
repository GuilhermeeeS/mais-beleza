import Image from "next/image";

export function Logo({ height = 40, white = false }: { height?: number; white?: boolean }) {
  return (
    <Image
      src="/logo.png"
      alt="Mais Beleza · Bem estar e Estética"
      width={1075}
      height={394}
      priority
      className={white ? "brand-logo brand-logo-white" : "brand-logo"}
      style={{ height, width: "auto" }}
    />
  );
}
