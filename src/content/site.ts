// Practice-level facts. Everything here is taken from the current
// lucianion.co.uk pages. Anything not verifiable from that source is marked
// with the CONFIRM flag and rendered as an annotation, never as a plain claim.

export const CONFIRM = "[LUCIAN TO CONFIRM]";

export const practice = {
  surgeon: "Lucian Ion",
  credentials: "FRCS(Plast)",
  role: "Consultant Plastic and Cosmetic Surgeon",
  addressLines: ["Aveling House", "1B Upper Wimpole Street", "London W1G 6AB"],
  phones: ["0207 486 7757", "0207 486 9040"],
  phoneInternational: "+44 (0) 207 486 7757",
  mapsUrl: "https://maps.google.com/?q=Aveling+House+1B+Upper+Wimpole+Street+London+W1G+6AB",
  company:
    "Aesthetic Plastic Surgery Ltd. Registered in England & Wales 04412624. Registered with the Care Quality Commission under the Health and Social Care Act 2008, certificate number CRT-513367883.",
  // The live site publishes the address as an image-protected mailto link, so the
  // literal address could not be read from the page source.
  emailStatus: "unread-from-source",
};

export type NavChild = { label: string; to: string };
export type NavSection = { label: string; to: string; children: NavChild[] };

export const nav: NavSection[] = [
  {
    label: "Rhinoplasty",
    to: "/rhinoplasty",
    children: [
      { label: "Reduction rhinoplasty", to: "/rhinoplasty/reduction" },
      { label: "Augmentation rhinoplasty", to: "/rhinoplasty/augmentation" },
      { label: "Deviated / crooked nose", to: "/rhinoplasty/deviated-crooked" },
      { label: "Secondary rhinoplasty", to: "/rhinoplasty/secondary" },
      { label: "Ultrasonic rhinoplasty", to: "/rhinoplasty/ultrasonic" },
    ],
  },
  {
    label: "Facial sculpting",
    to: "/facial-sculpting",
    children: [
      { label: "Chin augmentation", to: "/facial-sculpting/chin-augmentation" },
      { label: "Cheek implants", to: "/facial-sculpting/cheek-implants" },
      { label: "Anterior neck lift", to: "/facial-sculpting/anterior-neck-lift" },
      { label: "Buccal fat reduction", to: "/facial-sculpting/buccal-fat-reduction" },
      { label: "Fat transfer", to: "/facial-sculpting/fat-transfer" },
      { label: "Facial liposuction", to: "/facial-sculpting/facial-liposuction" },
      { label: "Otoplasty / pinnaplasty", to: "/facial-sculpting/otoplasty-pinnaplasty" },
    ],
  },
  {
    label: "Face rejuvenation",
    to: "/face-rejuvenation",
    children: [
      { label: "Facelift", to: "/face-rejuvenation/facelift" },
      { label: "Short scar facelift", to: "/face-rejuvenation/short-scar-facelift" },
      { label: "Deep plane neck lift", to: "/face-rejuvenation/deep-plane-neck-lift" },
      { label: "Brow / forehead lift", to: "/face-rejuvenation/brow-forehead-lift" },
      { label: "Blepharoplasty", to: "/face-rejuvenation/blepharoplasty" },
    ],
  },
  {
    label: "Breast surgery",
    to: "/breast-surgery",
    children: [
      { label: "Breast augmentation", to: "/breast-surgery/augmentation" },
      { label: "Breast reduction", to: "/breast-surgery/reduction" },
      { label: "Breast uplift / mastopexy", to: "/breast-surgery/uplift-mastopexy" },
      { label: "Gynaecomastia", to: "/breast-surgery/gynaecomastia" },
    ],
  },
];

export const utilityNav: NavChild[] = [
  { label: "Lucian Ion", to: "/lucian-ion" },
  { label: "Patient cases", to: "/patient-cases" },
  { label: "Contact Us", to: "/contact-us" },
];

export const legalNav: NavChild[] = [
  { label: "Privacy policy", to: "/privacy-policy" },
  { label: "Cookie policy", to: "/cookie-policy" },
  { label: "Site map", to: "/site-map" },
];

// Galleries hosted on the practice's sister site. All four were checked and
// respond 200; they open in a new tab and are labelled as external.
export const externalGalleries: { label: string; href: string }[] = [
  {
    label: "Rhinoplasty gallery",
    href: "https://www.allaboutcosmeticsurgery.co.uk/rhinoplasty/",
  },
  {
    label: "Breast enlargement gallery",
    href: "https://www.allaboutcosmeticsurgery.co.uk/breast-enlargement/",
  },
  {
    label: "Buccal fat pad gallery",
    href: "https://www.allaboutcosmeticsurgery.co.uk/buccal-fat-pad/",
  },
  {
    label: "Facelift gallery",
    href: "https://www.allaboutcosmeticsurgery.co.uk/facelift/",
  },
];
