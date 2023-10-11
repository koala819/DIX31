"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Recommandation } from "@/types/models";
import { Tooltip } from "@nextui-org/react";

export default function Page() {
  const [shuffledSections, setShuffledSections] = useState<Recommandation[]>(
    []
  );

  const sections = [
    {
      name: "Pascal BESNARD",
      title: "Président du Club306",
      description:
        "Xavier est devenu un développeur fullstack talentueux qui a joué un rôle" +
        " essentiel dans la création de notre site internet du club. Sa contribution" +
        " exceptionnelle a transformé notre vision en une réalité numérique époustouflante." +
        " De plus, il a su créer un site internet qui non seulement répond à nos besoins, mais" +
        " qui dépasse largement nos attentes. Sa maîtrise du développement front-end et back-end" +
        " lui a permis de concevoir une expérience utilisateur fluide et conviviale." +
        " " +
        "Son attitude positive et son dévouement en font un atout précieux pour toute équipe" +
        " de développement. Nous avons tous pu travailler avec lui et il a su s'adapter à nos différentes" +
        " approches, demandes, et personnalité. Par conséquent, sa capacité à travailler en équipe a" +
        " également été un atout précieux, collaborant efficacement avec d'autres membres de l'équipe" +
        " pour atteindre nos objectifs communs." +
        " " +
        "Le Club306, son staff, et ses membres sont ravi de recommander Xavier pour vos projets. nous" +
        " ne vous cacherons pas que le travail de Xavier a été crucial dans la mise en place d'une" +
        " stratégie virtuelle de notre club.",
      link: "https://www.linkedin.com/in/xavier%F0%9F%92%BB-genolhac-79a98390",
      imageSrc:
        "https://media.licdn.com/dms/image/C5603AQE-VbifCXTwyw/profile-displayphoto-shrink_200_200/0/1574721536542?e=1702512000&v=beta&t=Fl2n5ulBU1gP6PomhsdFsr56I_bvCt3kuFP5llhrMlU",
    },
    {
      name: "Ousama Ben Younes",
      title: "AWS Devops - YellowLabTools Evangelist",
      description:
        "J'ai eu la chance de suivre la reconversion de carrière de" +
        " Xavier en tant que developpeur. Une personne motivée, passionnée et" +
        " impliquée. Que ce soit au niveau humain ou sur le plan technique," +
        " c'est un plaisir d'échanger avec lui. Je suis convaincu" +
        " que Xavier fera un merveilleux parcours car il sait faire de la" +
        " veille, partager, et travailler en équipe. Il est le genre de dev" +
        " qui sort du lot de part sa grande motivation :), un dev ++ qui" +
        " j'en suis convaincu ira loin. Je vous le recommande donc" +
        " chaudement et je tiens vraiment à remercier Olivier Hoareau de" +
        " l'avoir pris à ses côtés.",
      link: "https://www.linkedin.com/in/xavier%F0%9F%92%BB-genolhac-79a98390",
      imageSrc:
        "https://media.licdn.com/dms/image/C4E03AQHwG_y-wypwOw/profile-displayphoto-shrink_200_200/0/1608131183814?e=1701907200&v=beta&t=VQVLniwB8AgcgqRFRhcCjCLOtvFFB2jl4bxyZUzSiuo",
    },
    {
      name: "Sandrine PELLISER",
      title: "Animation numérique de territoire",
      description:
        "Nous avons apprécié son professionnalisme et sa motivation. Xavier" +
        " est un technicien développeur compétent qui a su se rendre" +
        " disponible aux moments ou nous en avons eu besoin. C'est avec" +
        " une confiance évidente que nous pourrions lui confier de nouvelles" +
        " missions. Son charisme et ses qualités humaines sont un plus dans" +
        " ces relations de travail.",
      link: "https://www.linkedin.com/in/xavier%F0%9F%92%BB-genolhac-79a98390",
      imageSrc:
        "https://media.licdn.com/dms/image/C4E03AQE495Jzmbqrgw/profile-displayphoto-shrink_200_200/0/1662454533049?e=1701907200&v=beta&t=pIYmQja6P7UrJ_XMIFz06nIbq2xiW7Glrr_8y8tsDdw",
    },
    {
      name: "Jorge Bravo Bertoglio",
      title: "CTO @Loopsider",
      description:
        "Nous avons eu la chance de réaliser une mission avec Xavier. Très" +
        " responsable, travail de grande qualité et technique, nous avons été" +
        " satisfaits et conseillons pour d'autres missions.",
      link: "https://www.linkedin.com/in/xavier%F0%9F%92%BB-genolhac-79a98390",
      imageSrc:
        "https://media.licdn.com/dms/image/C4E03AQFj_QXgRnp_rQ/profile-displayphoto-shrink_200_200/0/1613247706156?e=1701907200&v=beta&t=We5_r-OcHp31wIMMv3yq6jkyvhmGl_NhqzbiJkO_gEc",
    },
    {
      name: "Amandine Werlé",
      title: "Directrice Artistique",
      description:
        "Je recommande Xavier pour son sérieux et sa capacité à développer" +
        " des solutions parfaitement adaptées à la demande de notre" +
        " association.",
      link: "https://www.malt.fr/profile/xaviergenolhac",
      imageSrc:
        "https://dam.malt.com/ad194889-8488-4940-9902-f2444623aded?gravity=face&func=face&face_margin=70&w=440&h=440&force_format=webp",
    },
  ];

  useEffect(() => {
    async function shuffleArray(array: any[]) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      setShuffledSections(array);
    }
    shuffleArray(sections);
  }, []);

  return (
    <div className='flex flex-col items-center '>
      <div className='flex flex-col items-center '>
        {shuffledSections.map((section, index) => (
          <section
            key={index}
            className='max-w-md py-4 px-8 bg-white dark:bg-slate-600 shadow-lg rounded-lg my-20'
          >
            <div className='flex justify-center md:justify-end -mt-16'>
              <Image
                className='w-20 h-20 object-cover rounded-full border-2 border-indigo-500 dark:border-cyan-400'
                alt={`avatar ${section.name}`}
                src={section.imageSrc}
                width={100}
                height={100}
              />
            </div>
            <div>
              <h2 className='text-gray-800 dark:text-sky-500 text-3xl font-semibold'>
                {section.title}
              </h2>
              <p className='mt-2 text-gray-600 dark:text-gray-200'>
                {section.description}
              </p>
            </div>
            <div className='flex justify-end mt-4'>
              <Tooltip
                content={
                  section.link.includes("linkedin")
                    ? "Témoignage publié sur ma page de recommandations de mon profil LinkedIn"
                    : " Jetez un œil à cette recommandation figurant dans la section 'Recommandations' de mon profil Malt"
                }
                color={section.link.includes("linkedin") ? "primary" : "danger"}
              >
                <Link
                  href={section.link}
                  className='text-xl font-medium text-indigo-500 dark:text-cyan-400'
                  target='_blank'
                >
                  {section.name}
                </Link>
              </Tooltip>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
