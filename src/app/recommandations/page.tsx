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
      name: "Olivier HOAREAU",
      title: "Fondateur de GoTombola.co (CEO/CTO Founder)",
      description:
        "Ce n’était pas gagné. J’ai misé sur Xavier il y a 3 ans. Motivé, il avait peu d’expérience sur le code. " +
        " Je lui ai proposé d’integrer mon équipe d’apprenti (5), et de développer avec eux un Design System en " +
        " React et Typescript (via Storybook), sous mon apprentissage (300 recrutements, 25 ans de code au quotidien). " +
        " Plus de 600 composants génériques developpé, git rebase, linter et reviews dures avec le code. J’ai levé la " +
        " barre plus haut pour Xavier en lui faisant découvrir les Bonnes Pratiques et la qualité de code : il a souffert " +
        " sur le Software Craftmanship avec moi. Il a buté, il a refait, il a compris." +
        " " +
        " Xavier est posé, avec l’envie de bien faire son travail. Comme beaucoup de personnes aujourd’hui, il a un parcours " +
        " sinueux, mais empreint de détermination." +
        " " +
        " Je pense que Xavier aura sa place (et y sera bien) dans une équipe qui cherche à suivre un cadre, à faire bien les choses, " +
        " et qui est ouverte et à l’envie de partager." +
        " " +
        " React, Typescript, JS, TailwindCSS et NodeJS sont entre autres des sujets qui plaisent à Xavier." +
        " " +
        " Je recommande Xavier, notamment dans une équipe qui a besoin de quelqu’un qui peut s’intégrer rapidement aux pratiques de l’équipe, " +
        " sans avoir envie d’imposer les siennes. Bon vent à toi Xavier.",
      link: "https://www.linkedin.com/in/xavier%F0%9F%92%BB-genolhac-79a98390",
      imageSrc:
        "https://media.licdn.com/dms/image/D4E03AQHdhzD-9aI7jQ/profile-displayphoto-shrink_200_200/0/1666095265881?e=1703116800&v=beta&t=FKVOGcCW62E_B0KAGNhYGpTaVXvvgdFpmgdO2BjCYTw",
    },
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
    {
      name: "Sid-Ahmed CHICKH-BLED",
      title: "CEO & Co-Founder @ KillBills",
      description:
        "Xavier est toujours très professionnel, sérieux et motivé dans ses tâches." +
        " Un plus dans une équipe!",
      link: "https://www.malt.fr/profile/xaviergenolhac",
      imageSrc:
        "https://media.licdn.com/dms/image/D4E03AQGv4YmloaK-eA/profile-displayphoto-shrink_200_200/0/1689258281287?e=1703116800&v=beta&t=EGkTLYKADzrpwpfS9AjQGEIPahxdjN8hTb3w5mhVYUI",
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
    <>
      <header className='grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 p-4'>
        <div className='flex items-center justify-center'>
          <Image
            src='https://www.airbus.com/themes/custom/airbus_web_experience_ui/logo.svg'
            className='bg-[#06193a] rounded-xl p-8 h-full'
            width={150}
            height={150}
            alt='Logo Airbus'
          />
        </div>
        <div className='flex items-center justify-center'>
          <Image
            src='https://loopsider.com/assets/logo.svg'
            className='rounded-xl'
            width={150}
            height={150}
            alt='Logo LoopSider'
          />
        </div>
        <div className='flex items-center justify-center'>
          <Image
            src='https://www.soprasteria.fr/ResourcePackages/Bootstrap4/assets/dist/logos/logo-soprasteria.png'
            className='object-contain rounded-xl'
            width={200}
            height={10}
            alt='Logo SopraSteria'
          />
        </div>
        <div className='flex items-center justify-center'>
          <Image
            src='https://www.club306.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoClub306.3a02f592.png&w=256&q=75'
            className='rounded-xl'
            width={150}
            height={150}
            alt='Logo Club306'
          />
        </div>
        <div className='flex items-center justify-center'>
          <Image
            src='https://a.storyblok.com/f/149852/x/122448b40c/white-logo.svg'
            className='bg-gray-500 rounded-xl p-8'
            width={150}
            height={150}
            alt='Logo KillBills'
          />
        </div>
      </header>

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
    </>
  );
}
