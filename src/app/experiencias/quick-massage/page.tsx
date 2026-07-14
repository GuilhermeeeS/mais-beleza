import { ExperienciaPage } from "@/components/experiencia-page";
import { getExperiencia } from "@/lib/experiencias";

const exp = getExperiencia("quick-massage")!;

export const metadata = { title: `${exp.nome} | Mais Beleza` };

export default function Page() {
  return <ExperienciaPage exp={exp} />;
}
