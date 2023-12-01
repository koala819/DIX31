import { Metadata } from "next";
import Club306 from "@/components/templates/projects/Club306";

export const metadata: Metadata = {
  title: "Club 306 - La Communauté des Passionnés de Peugeot 306 | DIX31",
  description:
    "Découvrez le Club 306, un site web dédié aux passionnés de la Peugeot 306. Ce projet unique par DIX31 utilise Next.js, Tailwind, TypeScript, et Supabase pour créer une expérience communautaire interactive et engageante, mettant en avant la passion pour cette voiture emblématique.",
};

export default function Page() {
  return <Club306 />;
}
