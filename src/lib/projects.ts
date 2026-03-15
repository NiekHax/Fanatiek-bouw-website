export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Verbouwingen" | "Renovatie" | "Overkappingen";
  description: string;
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: "gevelrenovatie",
    title: "Gevelrenovatie tussenwoning",
    category: "Renovatie",
    description:
      "Complete gevelrenovatie van een tussenwoning, van het strippen van de oude gevel tot en met de nieuwe gevelbekleding.",
    images: [
      { src: "/images/projects/gevelrenovatie-woning-na-oplevering.jpeg", alt: "Afgeronde gevelrenovatie met nieuwe gevelbekleding" },
      { src: "/images/projects/gevelrenovatie-woning-strippen-oude-gevel.jpeg", alt: "Strippen van oude gevelbekleding" },
      { src: "/images/projects/gevelrenovatie-dampdicht-folie-aanbrengen.jpeg", alt: "Aanbrengen van dampdicht folie" },
      { src: "/images/projects/gevelrenovatie-woning-steiger-werkzaamheden.jpeg", alt: "Gevelrenovatie in uitvoering met steiger" },
    ],
  },
  {
    id: "dakopbouw",
    title: "Dakopbouw met gevelbekleding",
    category: "Verbouwingen",
    description:
      "Complete dakopbouw inclusief houtskeletconstructie, daklatten, gevelbekleding en isolatie.",
    images: [
      { src: "/images/projects/dakopbouw-gevelbekleding-buitenaanzicht.webp", alt: "Buitenaanzicht afgeronde dakopbouw met gevelbekleding" },
      { src: "/images/projects/dakopbouw-houtskelet-constructie-bovenaf.webp", alt: "Houtskeletconstructie dakopbouw van bovenaf" },
      { src: "/images/projects/dakopbouw-houtskelet-daklatten-buitenaanzicht.webp", alt: "Daklatten buitenaanzicht dakopbouw" },
      { src: "/images/projects/dakopbouw-gevelbekleding-dakramen-zijaanzicht.webp", alt: "Zijaanzicht dakopbouw met dakramen" },
      { src: "/images/projects/dakopbouw-gevelbekleding-montage-detail.webp", alt: "Detail montage gevelbekleding op hoogte" },
      { src: "/images/projects/zolderrenovatie-isolatie-dampscherm-vakman.webp", alt: "Vakman brengt isolatie en dampscherm aan" },
      { src: "/images/projects/zolderopbouw-houtskelet-constructie.webp", alt: "Houtskeletconstructie zolderopbouw" },
    ],
  },
  {
    id: "woningrenovatie",
    title: "Complete woningrenovatie",
    category: "Renovatie",
    description:
      "Volledige woningrenovatie inclusief sloopwerk, nieuwe trap, keuken en zolderafwerking met stucwerk.",
    images: [
      { src: "/images/projects/zolderrenovatie-slaapkamer-stucwerk-overzicht.jpeg", alt: "Overzicht afgewerkte zolderslaapkamer" },
      { src: "/images/projects/renovatie-sloopwerk-interieur-laser.webp", alt: "Sloopwerk en uitzetten met laser" },
      { src: "/images/projects/woning-renovatie-trap-naar-zolder.webp", alt: "Nieuwe trap naar de zolder" },
      { src: "/images/projects/keuken-montage-kitwerk-vakman.webp", alt: "Vakman bij keukenmontage en kitwerk" },
      { src: "/images/projects/zolderrenovatie-stucwerk-dakraam-cv.jpeg", alt: "Gestucte zolderruimte met dakraam en cv-ketel" },
      { src: "/images/projects/zolderrenovatie-stucwerk-slaapkamer-dakraam.jpeg", alt: "Afgewerkte zolderkamer met stucwerk en dakraam" },
    ],
  },
  {
    id: "badkamerrenovatie",
    title: "Badkamerrenovatie",
    category: "Renovatie",
    description:
      "Complete badkamerrenovatie inclusief isolatie, regelwerk, vloerverwarming en strakke afwerking.",
    images: [
      { src: "/images/projects/badkamer-renovatie-douchehoek-nisjes.jpeg", alt: "Douchehoek met inbouwnis" },
      { src: "/images/projects/badkamer-renovatie-isolatie-en-regelwerk.jpeg", alt: "Badkamerrenovatie met isolatie en regelwerk" },
      { src: "/images/projects/badkamer-renovatie-waterdichte-gipsplaten-leidingwerk.jpeg", alt: "Waterdichte gipsplaten met leidingwerk" },
      { src: "/images/projects/badkamer-renovatie-geberit-inbouwreservoir-toilet.jpeg", alt: "Geberit inbouwreservoir en toiletvoorwand" },
      { src: "/images/projects/badkamer-renovatie-overzicht-vloerverwarming.jpeg", alt: "Overzicht badkamer met vloerverwarming" },
      { src: "/images/projects/badkamer-renovatie-douchewand-nisjes-detail.jpeg", alt: "Detailopname douchewand met nisjes" },
    ],
  },
  {
    id: "aanbouw",
    title: "Aanbouw woning",
    category: "Verbouwingen",
    description:
      "Aanbouw aan woning met houtskeletbouw, volledig op maat gerealiseerd.",
    images: [
      { src: "/images/projects/IMG_2308.jpeg", alt: "Houtskeletbouw werkzaamheden aan aanbouw" },
      { src: "/images/projects/aanbouw-houtskelet-achterzijde-woning.webp", alt: "Aanbouw houtskelet achterzijde woning" },
      { src: "/images/projects/aanbouw-sloopwerk-interieur-stempels.jpeg", alt: "Sloopwerk interieur met stempels bij aanbouw" },
      { src: "/images/projects/aanbouw-woning-steiger-buitenaanzicht.jpeg", alt: "Buitenaanzicht woning met steiger bij aanbouw" },
      { src: "/images/projects/aanbouw-dakopbouw-steiger-werkzaamheden.jpeg", alt: "Dakopbouw werkzaamheden met steiger en folie" },
      { src: "/images/projects/aanbouw-nieuwe-dakpannen-detail.jpeg", alt: "Detail nieuwe dakpannen bij aanbouw" },
    ],
  },
  {
    id: "nieuwbouw-interieur",
    title: "Nieuwbouw interieur",
    category: "Verbouwingen",
    description:
      "Interieurafwerking nieuwbouwwoning met glazen voordeur, houten balken en lattenplafond.",
    images: [
      { src: "/images/projects/nieuwbouw-hal-glazen-voordeur-trap.webp", alt: "Nieuwbouw hal met glazen voordeur en trap" },
      { src: "/images/projects/nieuwbouw-hal-houten-balk-trap.webp", alt: "Nieuwbouw hal met houten balk en trap" },
    ],
  },
  {
    id: "houten-tuinhuis",
    title: "Houten tuinhuis op maat",
    category: "Overkappingen",
    description: "Op maat gebouwd houten tuinhuis met betonnen fundering.",
    images: [
      { src: "/images/projects/houten-tuinhuis-op-maat-gebouwd.jpeg", alt: "Op maat gebouwd houten tuinhuis met betonnen fundering" },
    ],
  },
];

export function getProjectsByCategory(category: string): Project[] {
  if (category === "Alles") return projects;
  return projects.filter((p) => p.category === category);
}
