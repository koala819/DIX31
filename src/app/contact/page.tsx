import Contact from "@/components/templates/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez DIX31 - Votre Expert en Développement Web",
  description:
    "Prenez contact avec DIX31 pour discuter de vos besoins en développement web et découvrir comment nous pouvons transformer vos idées en réalité.",
};

export default function Page() {
  return <Contact />;
}
