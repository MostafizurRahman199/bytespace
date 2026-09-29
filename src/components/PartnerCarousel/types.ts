export interface PartnerLogo {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
  href?: string;
}

export const PARTNER_LOGOS: PartnerLogo[] = [
  {
    id: "logo-1",
    name: "Logoipsum Wave",
    src: "/images/landingpage/carousel/partner_logo_1.svg",
    width: 167,
    height: 41,
  },
  {
    id: "logo-2",
    name: "Logoipsum Sun",
    src: "/images/landingpage/carousel/partner_logo_2.svg",
    width: 168,
    height: 41,
  },
  {
    id: "logo-3",
    name: "Logoipsum Flash",
    src: "/images/landingpage/carousel/partner_logo_3.svg",
    width: 170,
    height: 41,
  },
  {
    id: "logo-4",
    name: "Logoipsum Clover",
    src: "/images/landingpage/carousel/partner_logo_4.svg",
    width: 170,
    height: 41,
  },
  {
    id: "logo-5",
    name: "Logoipsum Circles",
    src: "/images/landingpage/carousel/partner_logo_5.svg",
    width: 169,
    height: 42,
  },
];
