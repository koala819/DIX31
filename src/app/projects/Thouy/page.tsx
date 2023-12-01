import { Metadata } from "next";
import Thouy from "@/components/templates/projects/Thouy";

export const metadata: Metadata = {
  title: "Gîtes de Thouy - Location de Gîtes dans le Tarn | Projet de DIX31",
  description:
    "Découvrez 'Gîtes de Thouy', un site de location de gîtes personnalisé conçu pour offrir une expérience unique dans le Tarn. Ce projet illustre l'expertise de DIX31 en création de sites vitrines axés sur le tourisme, combinant esthétique et fonctionnalité pour une expérience utilisateur optimale.",
};

export default function Page() {
  return <Thouy />;
}
