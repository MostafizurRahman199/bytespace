import React from "react";
import Link from "next/link";

interface LinkItem {
  label: string;
  href: string;
}

interface LinkGroup {
  id: string;
  links: LinkItem[];
}

const FOOTER_LINK_GROUPS: LinkGroup[] = [
  {
    id: "col-1",
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/categories" },
      { label: "Business", href: "/courses?category=business" },
      { label: "IT", href: "/courses?category=it" },
      { label: "Design", href: "/courses?category=design" },
    ],
  },
  {
    id: "col-2",
    links: [
      { label: "Development", href: "/courses?category=development" },
      { label: "Marketing", href: "/courses?category=marketing" },
      { label: "Photography", href: "/courses?category=photography" },
      { label: "Finance", href: "/courses?category=finance" },
      { label: "Sport", href: "/courses?category=sport" },
    ],
  },
  {
    id: "col-3",
    links: [
      { label: "Become a Creator", href: "/creators" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

export default function FooterNavLinks() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 w-full lg:w-auto">
      {FOOTER_LINK_GROUPS.map((group) => (
        <ul key={group.id} className="flex flex-col space-y-3.5 sm:space-y-4 lg:space-y-[22px]">
          {group.links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                style={{ fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif" }}
                className="font-satoshi font-normal text-[#242528] hover:text-[#003BE2] text-[14px] leading-normal transition-colors duration-150 inline-block"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
