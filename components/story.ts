// Définition du type pour un événement de l'histoire pour plus de clarté et de sécurité
type StoryEvent = {
  date: string;
  title: string;
  description: string;
  imageUrls: string[];
  objectPosition?: string;
  grayscale?: boolean;
};

export const storyEvents: StoryEvent[] = [
    {
        date: 'Juillet 2022',
        title: 'Pampelune, une rencontre',
        description: "Parfois, le destin a besoin d'un petit coup de pouce. Après des semaines d'échanges, nous nous sommes enfin rencontrés au cœur des fêtes de San Fermin. Ce qui n'était qu'une simple mise en contact s'est transformé en une véritable étincelle.",
        imageUrls: ['/images/LH_PremierJour.jpg', '/images/Fermin%20(2).jpg'],
    },
    {
        date: 'Automne 2022',
        title: "Le mal du pays... et d'elle",
        description: "De retour en France, la tristesse s'est installée. Une seule pensée m'obsédait : la retrouver au plus vite.",
        imageUrls: [
            '/images/triste1.jpg',
            '/images/triste2.jpg'
        ],
        grayscale: true, // Applique l'effet noir et blanc
    },
    {
        date: 'Mes visites en Espagne',
        title: 'Le bonheur sous le soleil',
        description: "Je venais la voir et il faisait toujours un temps magnifique. J'étais heureux, simplement parce que j'étais en Espagne, auprès d'elle. Chaque visite était une bouffée d'air frais et de joie.",
        imageUrls: [
            '/images/HulerichBalcon.jpg',
            '/images/HulerichPullNike.jpg',
            '/images/HulerichGlace.jpg',
        ],
    },
    {
        date: 'Nos escapades',
        title: 'Amour et plages espagnoles',
        description: "Nous aimions particulièrement les plages espagnoles. Ces moments d'évasion, entre le soleil et la mer, sont devenus notre petit rituel pour nous retrouver et rêver ensemble.",
        imageUrls: [
            '/images/LH_Plage.jpg',
            '/images/LH_Plage2.jpg',
        ],
    },
    {
        date: 'Notre passion commune',
        title: 'Le sport pour nous unir',
        description: "Que ce soit à la salle ou en plein air, nous avons découvert que notre amour pour le sport était une autre force qui nous unissait. Un esprit d'équipe qui se reflète dans chaque aspect de notre vie.",
        imageUrls: ['/images/sport.jpg'],
        objectPosition: 'center 30%',
    },
    {
        date: 'Un jour à Barcelone',
        title: 'Souvenirs catalans',
        description: "Une journée mémorable passée à explorer les rues de Barcelone, un autre souvenir précieux de notre histoire espagnole.",
        imageUrls: ['/images/HulerichBarcelone.jpg'],
        objectPosition: 'center 80%',
    },
    {
        date: 'Rayonnante',
        title: 'La lumière de l\'amour',
        description: "Devant un parterre de fleurs jaunes, son sourire illuminait tout. C'était la preuve éclatante que l'amour la rendait rayonnante.",
        imageUrls: ['/images/LyneBelleFleurJaune.jpg'],
    },
    {
        date: 'Nos différences, notre force',
        title: 'Deux mondes, un amour',
        description: 'Elle, camerounaise ayant grandi en Espagne ; moi, camerounais du Cameroun. Nos parcours, nos valeurs, parfois si différents, sont devenus le ciment de notre relation et notre plus grande force.',
        imageUrls: ['/images/Fermin%20(3).jpg'],
    },
    {
        date: '20 Juin 2026',
        title: 'Le Grand Jour',
        description: "Aujourd'hui, nous sommes prêts à unir nos deux histoires pour n'en former qu'une. Le début d'un nouveau chapitre, que nous avons hâte d'écrire avec vous.",
        imageUrls: ['/images/Bague.jpg'],
    },
];