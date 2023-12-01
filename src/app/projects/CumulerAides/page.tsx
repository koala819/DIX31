import { Metadata } from "next";
import CumulerLesAides from "@/components/templates/projects/CumulerLesAides";

export const metadata: Metadata = {
  title:
    "Cumuler les Aides - Guide des Aides à la Rénovation Immobilière | DIX31",
  description:
    "Découvrez 'Cumuler les Aides', une plateforme informative créée par DIX31, offrant des conseils et des informations sur les aides disponibles pour la rénovation immobilière. Le projet combine une base de données dynamique, une interface conviviale et une approche stratégique ciblée pour aider les propriétaires et locataires.",
};

export default function Page() {
  return <CumulerLesAides />;
}
