import { Metadata } from "next";
import MemoryGame from "@/components/templates/projects/MemoryGame";

export const metadata: Metadata = {
  title: "Memory Game - Jeu Éducatif en JavaScript par DIX31",
  description:
    "Découvrez 'Memory Game', un jeu interactif et éducatif créé par DIX31 pour enseigner l'utilisation de la souris aux enfants tout en renforçant les compétences en JavaScript. Le jeu combine une interface utilisateur attrayante avec des concepts de programmation fondamentaux, offrant une expérience d'apprentissage amusante et engageante.",
};

export default function Page() {
  return <MemoryGame />;
}
