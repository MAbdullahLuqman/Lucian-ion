import { CONFIRM } from "./site";

/**
 * Procedure content.
 *
 * Written in plain UK English to a fixed structure:
 *   concern -> approach -> consultation -> limitations -> alternatives ->
 *   risks -> recovery considerations -> questions to ask -> related pages
 *
 * Editorial rules applied throughout:
 *  - No prices, no recovery timescales, no success rates, no testimonials.
 *  - No claim about training, membership, technique preference or aftercare
 *    that could not be read from the current lucianion.co.uk pages.
 *  - Anything awaiting Lucian's sign-off carries a `confirm` entry, which the
 *    page renders as a visible annotation rather than hiding.
 */

export type Link = { label: string; to?: string; href?: string };

export type Procedure = {
  slug: string; // route path without leading slash, e.g. "rhinoplasty/reduction"
  section: SectionSlug;
  title: string;
  nav: string;
  metaTitle: string;
  metaDescription: string;
  standfirst: string;
  image: string;
  imageAlt: string;
  concern: string[];
  approach: string[];
  consultation: string[];
  limitations: string[];
  alternatives: Link[];
  risks: string[];
  recovery: string[];
  questions: string[];
  related: string[];
  confirm: string[];
};

export type SectionSlug =
  "rhinoplasty" | "facial-sculpting" | "face-rejuvenation" | "breast-surgery";

export type Section = {
  slug: SectionSlug;
  title: string;
  metaTitle: string;
  metaDescription: string;
  standfirst: string;
  intro: string[];
  image: string;
  imageAlt: string;
};

export const sections: Section[] = [
  {
    slug: "rhinoplasty",
    title: "Rhinoplasty and nose reshaping",
    metaTitle: "Rhinoplasty in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Rhinoplasty and nose reshaping with Lucian Ion, consultant plastic surgeon, Upper Wimpole Street, London. Reduction, augmentation, crooked nose, secondary and ultrasonic rhinoplasty.",
    standfirst:
      "Nose reshaping asks for precision, careful planning and attentive follow-up. Each nose sits in a face, so the work is as much about balance as it is about the nose itself.",
    intro: [
      "Rhinoplasty covers a wide range of work, from softening a profile to rebuilding a nose that has been operated on before. The categories below share a great deal of technique, and most operations draw on more than one of them.",
      "Planning uses photography and computer simulation to make the conversation concrete. A simulation is a way of agreeing a direction together; it is not a promise of a result, because skin, cartilage and healing all have a say.",
      "Ultrasonic instruments are part of the practice and are described on their own page, because they change how the nasal bones can be shaped rather than what the aim of the operation is.",
    ],
    image: "nose-01.jpg",
    imageAlt: "Black and white editorial portrait, profile of a nose in raking light",
  },
  {
    slug: "facial-sculpting",
    title: "Facial sculpting",
    metaTitle: "Facial sculpting in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Facial sculpting with Lucian Ion in London: chin and cheek proportion, jawline and neck contour, buccal fat reduction, fat transfer, facial liposuction and ear surgery.",
    standfirst:
      "Changes to facial proportion — the chin, the cheeks, the jawline, the neck — read as a whole rather than as separate features.",
    intro: [
      "Sculpting procedures adjust the framework and the soft tissue that sits over it. Small changes to the chin or the cheek can alter how the nose, the jawline and the neck are read, which is why these operations are so often planned together.",
      "Because the aim is proportion rather than size, assessment matters more here than anywhere else. Photographs and 3D imaging are used to describe the shape of a face in measurable terms and to test a plan before anything is agreed.",
      "Some of this work is surgical and some is not. Where a non-surgical option is a reasonable alternative it is named on the relevant page.",
    ],
    image: "sculpting-01.jpg",
    imageAlt: "Black and white editorial portrait, jawline and neck in profile",
  },
  {
    slug: "face-rejuvenation",
    title: "Face and neck rejuvenation",
    metaTitle: "Facelift and face rejuvenation in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Face and neck rejuvenation with Lucian Ion in London: deep plane facelift, short scar facelift, deep plane neck lift, brow lift and eyelid surgery.",
    standfirst:
      "Rejuvenation surgery repositions tissue that has descended and restores volume that has been lost, without changing who a face belongs to.",
    intro: [
      "The face ages in layers — skin, fat, deeper support and bone — and each layer needs a different answer. A plan usually combines more than one procedure because a single one rarely addresses everything a patient has noticed.",
      "The intention is a face that looks rested rather than altered. That means accepting some limits: surgery does not stop ageing, and skin quality sets part of the ceiling on what is achievable.",
      "Where a non-surgical treatment would serve a patient better, or would serve them well enough for now, it is worth saying so at the consultation.",
    ],
    image: "rejuvenation-01.jpg",
    imageAlt: "Black and white editorial portrait, face turned to the light",
  },
  {
    slug: "breast-surgery",
    title: "Breast and torso surgery",
    metaTitle: "Breast surgery in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Breast surgery with Lucian Ion in London: breast augmentation, breast reduction, breast uplift or mastopexy, and gynaecomastia surgery for men.",
    standfirst:
      "Breast and torso surgery works on proportion, position and shape — for women and for men.",
    intro: [
      "Size is only one part of the picture. Position, footprint on the chest, skin quality and symmetry all decide whether a result sits comfortably with the rest of the body.",
      "Most patients arrive with a photograph of an outcome they like. That is a useful starting point, and the consultation is where it meets the reality of their own tissue.",
      "Several of these operations are often combined — an uplift with a small implant, for example — and the trade-offs of combining them are discussed on the individual pages.",
    ],
    image: "breasts-01.jpg",
    imageAlt: "Black and white editorial study of the torso, soft studio light",
  },
];

export const sectionBySlug = (slug: string) => sections.find((s) => s.slug === slug);

/* ---------------------------------------------------------------------------
 * Shared building blocks. Kept general and non-numeric on purpose.
 * ------------------------------------------------------------------------- */

const generalRisks = [
  "Bleeding, infection and delayed healing are possible after any operation.",
  "Scars are permanent. Their position is planned; how they mature varies between people and cannot be promised.",
  "Swelling and bruising settle unevenly, so an early appearance is not the final one.",
  "Numbness or altered sensation near the operated area is common early on and can occasionally persist.",
  "Asymmetry exists in every face and body before surgery and can still be visible afterwards.",
  "A result may fall short of what was hoped for, and revision surgery is sometimes considered.",
  "Anaesthetic carries its own risks, which the anaesthetist discusses separately.",
];

const generalRecovery = [
  "Arrange time away from work and from driving, and someone to be with you for the first days at home.",
  "Plan for follow-up appointments, dressing or suture changes and the review photographs that go with them.",
  "Expect a period when exercise, heavy lifting and alcohol are restricted.",
  "Swelling is worse in the mornings and after being upright for long spells; this is normal and eases.",
  "Ask about smoking, vaping and any medicines or supplements you take well before a date is set.",
];

const generalQuestions = [
  "Am I a good candidate for this operation, and what makes you say so?",
  "What would you expect this to change, and what would it leave unchanged?",
  "Which alternatives would you consider for someone in my position?",
  "Where will the scars be and how will they be cared for?",
  "What does your follow-up involve, and who do I contact if I am worried?",
  "What happens, practically and financially, if a revision is needed?",
];

const confirmDefaults = (what: string) => [
  `${CONFIRM} clinical detail and wording for ${what}, including anaesthetic, admission and follow-up arrangements.`,
  `${CONFIRM} whether any specific technique should be named on this page.`,
];

type Draft = Omit<Procedure, "risks" | "recovery" | "questions" | "confirm"> & {
  risks?: string[];
  recovery?: string[];
  questions?: string[];
  confirm?: string[];
};

const build = (d: Draft): Procedure => ({
  ...d,
  risks: [...(d.risks ?? []), ...generalRisks],
  recovery: [...(d.recovery ?? []), ...generalRecovery],
  questions: [...(d.questions ?? []), ...generalQuestions],
  confirm: [...(d.confirm ?? []), ...confirmDefaults(d.nav.toLowerCase())],
});

/* ---------------------------------------------------------------------------
 * Rhinoplasty
 * ------------------------------------------------------------------------- */

const rhinoplasty: Procedure[] = [
  build({
    slug: "rhinoplasty/reduction",
    section: "rhinoplasty",
    title: "Reduction rhinoplasty",
    nav: "Reduction rhinoplasty",
    metaTitle: "Reduction rhinoplasty in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Reduction rhinoplasty with Lucian Ion in London: reducing projection, length or width of the nose while keeping the result natural and the airway working.",
    standfirst:
      "The most frequent reason people ask about nose surgery: a nose that feels too prominent, too long or too wide for the face around it.",
    image: "nose-02.jpg",
    imageAlt: "Black and white profile study of a nose against a plain ground",
    concern: [
      "Reduction can mean any of several things — less projection at the tip, a shorter nose, a narrower bridge, a softer hump on the profile, or a combination. Most people describe it as wanting the nose to stop being the first thing they see.",
      "It is worth separating what bothers you from what you have been told bothers other people. A clear, specific description of your own concern is the most useful thing you can bring to a consultation.",
    ],
    approach: [
      "Reduction is rarely subtraction alone. Taking away support can narrow the airway or let the tip drop over time, so structure is usually rebuilt as the size comes down.",
      "Planning uses standard photographs and 3D images with computer simulation, so the direction of change can be agreed before the day. A simulation shows an intention; soft tissue thickness and healing decide how closely it can be met.",
    ],
    consultation: [
      "Expect an examination of the outside and the inside of the nose, including how well you breathe through each side, and a discussion of anything you have been treated for before.",
      "Photographs and imaging are taken so that the plan can be described in specific terms rather than adjectives, and so that follow-up can be compared fairly.",
    ],
    limitations: [
      "Skin does not shrink to order. Thicker skin hides fine changes in the underlying framework.",
      "A nose cannot be reduced beyond what its support and the airway will tolerate.",
      "The result changes for many months as swelling resolves, and the tip settles last.",
      "Perfect symmetry is not an achievable aim, in the nose or anywhere else.",
    ],
    alternatives: [
      {
        label: "Ultrasonic rhinoplasty, where bone reshaping is the main task",
        to: "/rhinoplasty/ultrasonic",
      },
      {
        label: "Chin augmentation, where profile balance is the real concern",
        to: "/facial-sculpting/chin-augmentation",
      },
      {
        label: "Deciding not to have surgery, which is always a reasonable option",
        to: "/contact-us",
      },
    ],
    risks: [
      "Changes to breathing, which may improve or occasionally worsen.",
      "Irregularities that become visible once swelling settles.",
      "Small residual asymmetries of the tip or bridge.",
    ],
    recovery: [
      "Plan for a period of visible swelling and bruising around the nose and eyes.",
      "Ask about sleeping position, nose blowing, glasses and contact sports before your date.",
    ],
    questions: [
      "Which parts of my nose would you change, and which would you leave alone?",
      "How would this affect my breathing?",
      "How long before the shape I see is close to the final one?",
    ],
    related: [
      "rhinoplasty/ultrasonic",
      "rhinoplasty/secondary",
      "facial-sculpting/chin-augmentation",
    ],
    confirm: [],
  }),
  build({
    slug: "rhinoplasty/augmentation",
    section: "rhinoplasty",
    title: "Augmentation rhinoplasty",
    nav: "Augmentation rhinoplasty",
    metaTitle: "Augmentation rhinoplasty in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Augmentation rhinoplasty with Lucian Ion in London: adding height, projection and definition to an under-projected nose, including ethnic rhinoplasty.",
    standfirst:
      "Adding height or definition where the nose is under-projected — often, though not only, in patients of Asian, African or Middle Eastern heritage.",
    image: "nose-03.jpg",
    imageAlt: "Black and white three-quarter portrait study",
    concern: [
      "A flat bridge, a tip that lacks definition or a profile that reads as short can make the rest of the face look heavier than it is. The aim is usually more structure rather than a different identity.",
      "Patients frequently want to keep the character of their features. Saying that plainly at the start shapes the whole plan.",
    ],
    approach: [
      "Augmentation depends on adding support, and where that support comes from is the central decision of the operation. The options and their trade-offs are discussed individually.",
      "Because added structure must be stable for decades, this is a conversation about durability as much as about shape.",
    ],
    consultation: [
      "Assessment covers skin thickness, existing cartilage, the airway and the shape of the surrounding face.",
      "Imaging is used to show how much projection suits your face rather than how much is technically possible.",
    ],
    limitations: [
      "Thicker skin softens definition, however carefully the framework is built.",
      "Added structure can shift or become visible over time.",
      "There is a limit to how much a given skin envelope will safely stretch.",
    ],
    alternatives: [
      {
        label: "Reduction and refinement, where the bridge is not the issue",
        to: "/rhinoplasty/reduction",
      },
      {
        label: "Chin augmentation, where the profile reads short overall",
        to: "/facial-sculpting/chin-augmentation",
      },
    ],
    risks: [
      "Visibility, movement or asymmetry of added support over time.",
      "Additional recovery from a second site if material is taken from elsewhere.",
    ],
    recovery: ["Recovery may involve a second site as well as the nose."],
    questions: [
      "What would you use to build support in my case, and why that rather than the alternatives?",
      "How much projection would suit my face?",
      "How stable is this likely to be in ten or twenty years?",
    ],
    related: ["rhinoplasty/reduction", "rhinoplasty/secondary", "rhinoplasty/ultrasonic"],
    confirm: [
      `${CONFIRM} which graft materials should be described on this page and in what terms.`,
    ],
  }),
  build({
    slug: "rhinoplasty/deviated-crooked",
    section: "rhinoplasty",
    title: "Deviated and crooked nose",
    nav: "Deviated / crooked nose",
    metaTitle: "Deviated and crooked nose surgery in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Surgery for a deviated or crooked nose with Lucian Ion in London, addressing both the appearance and the function of the nose, including after injury.",
    standfirst:
      "A nose that sits off the midline, whether it grew that way or was injured, usually involves both appearance and breathing.",
    image: "nose-04.jpg",
    imageAlt: "Black and white frontal portrait study in soft light",
    concern: [
      "Crookedness may be in the bones, the septum, the cartilage of the tip, or all three, and the face behind it is often slightly asymmetric too. That combination is what makes these operations demanding.",
      "Many patients notice the breathing before the shape, or only realise how much they had adapted once it is corrected.",
    ],
    approach: [
      "Straightening means releasing what is holding the nose off-centre and then supporting it in its new position, which is why correction and reconstruction happen in the same operation.",
      "The septum is usually part of the work, because the outside and the inside of the nose share the same framework.",
    ],
    consultation: [
      "Examination includes the septum and the airway on each side, and photographs that record the asymmetry of the face as well as the nose.",
      "Any history of injury, previous surgery or nasal treatment is relevant and worth bringing details of.",
    ],
    limitations: [
      "A nose has a memory: some drift back towards the original position can occur.",
      "Facial asymmetry behind the nose is not corrected by nose surgery and can still be visible.",
      "Improved breathing is an aim, not a guarantee, and allergy or lining problems are separate issues.",
    ],
    alternatives: [
      { label: "Ultrasonic rhinoplasty for precise bone work", to: "/rhinoplasty/ultrasonic" },
      {
        label: "Treating the airway alone, where appearance is not a concern",
        to: "/contact-us",
      },
    ],
    risks: [
      "Residual or recurrent deviation.",
      "Breathing that does not improve as much as hoped.",
      "Septal complications, which are discussed individually.",
    ],
    recovery: ["Internal healing continues after the outside looks settled."],
    questions: [
      "Is my crookedness in the bone, the septum, the cartilage, or a combination?",
      "How much straighter is realistic in my case?",
      "Will this be a functional operation as well as an aesthetic one?",
    ],
    related: ["rhinoplasty/ultrasonic", "rhinoplasty/secondary", "rhinoplasty/reduction"],
    confirm: [
      `${CONFIRM} how septal surgery and any functional element should be described, including insurance or referral routes if relevant.`,
    ],
  }),
  build({
    slug: "rhinoplasty/secondary",
    section: "rhinoplasty",
    title: "Secondary rhinoplasty",
    nav: "Secondary rhinoplasty",
    metaTitle: "Secondary and revision rhinoplasty in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Secondary or revision rhinoplasty with Lucian Ion in London, for patients unhappy with the shape or breathing after previous nose surgery.",
    standfirst:
      "Also called revision rhinoplasty: among the most demanding operations in cosmetic surgery, and the one where expectations need the most care.",
    image: "nose-05.jpg",
    imageAlt: "Black and white profile study, close crop",
    concern: [
      "Patients come after previous surgery with a shape they dislike, breathing that has worsened, or both. Scarring, missing support and unpredictable tissue make a second operation a different proposition from a first.",
      "It is common to arrive tired of the process. Taking time over the assessment, rather than moving quickly to a date, tends to serve people better.",
    ],
    approach: [
      "Secondary work is mostly about restoring structure before refining shape. What is missing has to be replaced, and only then can the outside be adjusted.",
      "Previous operation notes and pre-operative photographs, if you can obtain them, genuinely change how a plan is made.",
    ],
    consultation: [
      "Expect a longer assessment, careful examination of the airway, and a frank conversation about what a second operation can and cannot reach.",
      "Timing since your last surgery is part of the discussion, and waiting is sometimes the right advice.",
    ],
    limitations: [
      "Scarred tissue is less predictable and heals less evenly.",
      "Support that has been removed can only be replaced, not recovered.",
      "Aims are usually improvement rather than an ideal result, and further surgery is more likely than after a first operation.",
    ],
    alternatives: [
      { label: "Waiting longer before deciding", to: "/contact-us" },
      {
        label: "Addressing breathing only, where the shape is acceptable",
        to: "/rhinoplasty/deviated-crooked",
      },
    ],
    risks: [
      "A higher chance of needing further surgery than after a first rhinoplasty.",
      "Less predictable healing and scarring inside the nose.",
      "Recovery from a second site if support has to be taken from elsewhere.",
    ],
    recovery: [
      "Recovery is often longer than after a first operation and may involve a second site.",
    ],
    questions: [
      "What do you think was done before, and what is missing now?",
      "What is realistically improvable, and what is not?",
      "How long should I wait, and what would waiting change?",
    ],
    related: ["rhinoplasty/reduction", "rhinoplasty/augmentation", "rhinoplasty/deviated-crooked"],
    confirm: [
      `${CONFIRM} policy on revision cases operated elsewhere, including notes required and any waiting interval advised.`,
    ],
  }),
  build({
    slug: "rhinoplasty/ultrasonic",
    section: "rhinoplasty",
    title: "Ultrasonic rhinoplasty",
    nav: "Ultrasonic rhinoplasty",
    metaTitle: "Ultrasonic rhinoplasty in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Ultrasonic rhinoplasty with Lucian Ion in London: instruments that cut and reshape nasal bone precisely while leaving the surrounding soft tissue intact.",
    standfirst:
      "Instruments developed to cut and reshape bone precisely, leaving the soft tissue around it alone. A way of working rather than a different operation.",
    image: "ultrasonic-02.jpg",
    imageAlt: "Black and white study of nasal profile in raking light",
    concern: [
      "Where the bridge is wide, deviated or carries a hump, the bone has to be reshaped. Traditionally this was done with instruments that broke bone along lines that could not be fully controlled.",
      "Ultrasonic instruments work on bone without cutting the soft tissue around it, which allows the shaping to be more deliberate.",
    ],
    approach: [
      "Ultrasonic instrumentation is an established part of the practice and is used where precise bone work is what the plan requires. It is combined with the rest of the operation rather than replacing it.",
      "Precision in the bone does not change the soft tissue over it, so skin thickness still determines how much of the shaping shows.",
    ],
    consultation: [
      "The discussion is about what your nose needs, then whether ultrasonic instruments are the best way to achieve it.",
      "Imaging is used in the same way as for any other rhinoplasty.",
    ],
    limitations: [
      "It addresses bone. Cartilage, tip shape and skin need separate answers.",
      "It is a technique, not a guarantee of a particular result or a faster recovery.",
      "Access to the bone may make the operation longer than an equivalent conventional approach.",
    ],
    alternatives: [
      { label: "Conventional bone reshaping", to: "/rhinoplasty/reduction" },
      { label: "Correction of a crooked nose", to: "/rhinoplasty/deviated-crooked" },
    ],
    questions: [
      "Would ultrasonic instruments help in my case, and for which part of the operation?",
      "What difference would it make to the result rather than to the technique?",
    ],
    related: ["rhinoplasty/reduction", "rhinoplasty/deviated-crooked", "rhinoplasty/secondary"],
    confirm: [
      `${CONFIRM} how the ultrasonic training course and the British Society of Rhinoplasty Surgeons role should be referenced here, if at all.`,
    ],
  }),
];

/* ---------------------------------------------------------------------------
 * Facial sculpting
 * ------------------------------------------------------------------------- */

const facialSculpting: Procedure[] = [
  build({
    slug: "facial-sculpting/chin-augmentation",
    section: "facial-sculpting",
    title: "Chin augmentation",
    nav: "Chin augmentation",
    metaTitle: "Chin augmentation in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Chin augmentation and chin enhancement with Lucian Ion in London, to balance the profile, the jawline and the neck.",
    standfirst:
      "A chin that sits back changes how the nose, the jawline and the neck are read. Adjusting it is often the quietest way to alter a profile.",
    image: "sculpting-02.jpg",
    imageAlt: "Black and white profile study of chin and jawline",
    concern: [
      "Many people who dislike their profile point at their nose when the chin is doing at least half of the work. A recessed chin also tends to make the under-chin area look fuller than it is.",
      "The change patients usually want is definition, not size.",
    ],
    approach: [
      "Chin position can be altered by adding to the bone or by moving it, and the two routes suit different patients. The choice is made on the shape of the face and the amount of change needed.",
      "Because chin, jawline and neck read together, this is frequently planned alongside neck or nose work rather than alone.",
    ],
    consultation: [
      "Assessment covers the profile, the bite, the position of the lower lip and the shape of the neck.",
      "3D imaging is used to show the effect of a change in proportion before anything is decided.",
    ],
    limitations: [
      "It changes the framework, not the quality of the skin over it.",
      "A bite problem is a dental and orthodontic matter and is not corrected by contour surgery.",
      "Sensation in the lip and chin takes time to settle.",
    ],
    alternatives: [
      {
        label: "Anterior neck lift, where the under-chin area is the concern",
        to: "/facial-sculpting/anterior-neck-lift",
      },
      {
        label: "Rhinoplasty, where the nose is the dominant feature",
        to: "/rhinoplasty/reduction",
      },
      { label: "Non-surgical contouring, where a temporary change is enough", to: "/contact-us" },
    ],
    risks: [
      "Altered sensation of the lower lip or chin.",
      "Asymmetry, or movement or visibility of an implant if one is used.",
    ],
    questions: [
      "Is my profile mainly a chin issue or a nose issue?",
      "Would you add to the bone or move it, and why?",
      "How would this change my neck?",
    ],
    related: [
      "facial-sculpting/cheek-implants",
      "facial-sculpting/anterior-neck-lift",
      "rhinoplasty/reduction",
    ],
    confirm: [],
  }),
  build({
    slug: "facial-sculpting/cheek-implants",
    section: "facial-sculpting",
    title: "Cheek implants",
    nav: "Cheek implants",
    metaTitle: "Cheek implants in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Cheek implants and midface contouring with Lucian Ion in London, for patients whose cheek support is structurally flat rather than deflated.",
    standfirst:
      "Where the midface is flat structurally rather than simply deflated, support can be added to the bone itself.",
    image: "sculpting-03.jpg",
    imageAlt: "Black and white portrait study, cheekbone in raking light",
    concern: [
      "Flat cheeks can make the midface look tired at any age and can leave the lower lids looking hollow. The question is always whether the shortfall is in the bone or in the soft tissue over it.",
      "That distinction decides whether an implant or a volume procedure is the better answer.",
    ],
    approach: [
      "An implant changes the framework permanently and in a shape that is chosen in advance. It suits patients whose cheek projection was never there, more than those who have lost volume over time.",
      "Where the shortfall is soft tissue, fat transfer is usually the more appropriate route and is discussed on its own page.",
    ],
    consultation: [
      "Assessment separates bony projection from soft tissue volume, using photographs and 3D imaging.",
      "Position matters more than size, and that is what the imaging is used to agree.",
    ],
    limitations: [
      "An implant does not improve skin quality or lift descended tissue.",
      "It is a permanent device and may need revision or removal at some point.",
      "Facial asymmetry is usually still visible afterwards.",
    ],
    alternatives: [
      {
        label: "Fat transfer, where volume rather than structure is missing",
        to: "/facial-sculpting/fat-transfer",
      },
      { label: "Facelift, where the tissue has descended", to: "/face-rejuvenation/facelift" },
    ],
    risks: [
      "Implant movement, visibility, infection or the need for removal.",
      "Altered sensation over the cheek.",
    ],
    questions: [
      "Is my flatness in the bone or the soft tissue?",
      "Why an implant rather than fat transfer for me?",
      "What happens if it needs to come out?",
    ],
    related: [
      "facial-sculpting/fat-transfer",
      "facial-sculpting/chin-augmentation",
      "face-rejuvenation/facelift",
    ],
    confirm: [
      `${CONFIRM} whether cheek implants are currently offered and how prominently this page should sit; the live site lists it under facial sculpting.`,
    ],
  }),
  build({
    slug: "facial-sculpting/anterior-neck-lift",
    section: "facial-sculpting",
    title: "Anterior neck lift",
    nav: "Anterior neck lift",
    metaTitle: "Anterior neck lift in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Anterior neck lift with Lucian Ion in London: correcting fullness and banding under the chin through a limited approach at the front of the neck.",
    standfirst:
      "Fullness and banding under the chin, treated from the front of the neck rather than from the sides.",
    image: "sculpting-04.jpg",
    imageAlt: "Black and white study of the neck and jawline in profile",
    concern: [
      "An indistinct line between the chin and the neck is one of the earliest things people notice in photographs, often before any other sign of ageing.",
      "What sits behind it varies: fat above or below the muscle, muscle bands that have separated, loose skin, or a chin that sits back.",
    ],
    approach: [
      "An anterior approach works directly on the structures under the chin and suits patients whose problem is central rather than spread along the jawline.",
      "Where laxity extends to the sides of the neck, a wider operation is usually the more honest answer, and that is discussed rather than stretched to fit.",
    ],
    consultation: [
      "Examination looks at where the fullness sits, how the muscle behaves and how much skin is loose, as well as at chin position.",
      "Photographs and imaging record the starting point in a way that makes follow-up meaningful.",
    ],
    limitations: [
      "It addresses the central neck. Laxity along the jawline needs a different operation.",
      "Skin quality limits how sharply a contour can be defined.",
      "Ageing continues and the neck will change again.",
    ],
    alternatives: [
      {
        label: "Deep plane neck lift for wider laxity",
        to: "/face-rejuvenation/deep-plane-neck-lift",
      },
      {
        label: "Chin augmentation, where chin position is the cause",
        to: "/facial-sculpting/chin-augmentation",
      },
      {
        label: "Facial liposuction, where the issue is fat alone",
        to: "/facial-sculpting/facial-liposuction",
      },
    ],
    risks: ["A scar under the chin.", "Contour irregularity or recurrent banding."],
    questions: [
      "Is an anterior approach enough for my neck, or would I do better with a wider operation?",
      "How much of my problem is fat, muscle, skin or chin position?",
    ],
    related: [
      "face-rejuvenation/deep-plane-neck-lift",
      "facial-sculpting/chin-augmentation",
      "facial-sculpting/facial-liposuction",
    ],
    confirm: [],
  }),
  build({
    slug: "facial-sculpting/buccal-fat-reduction",
    section: "facial-sculpting",
    title: "Buccal fat reduction",
    nav: "Buccal fat reduction",
    metaTitle: "Buccal fat reduction in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Buccal fat reduction with Lucian Ion in London: a small, carefully selected operation to reduce lower cheek fullness from inside the mouth.",
    standfirst:
      "A small operation on the fat pad in the lower cheek — and one where patient selection matters more than technique.",
    image: "sculpting-05.jpg",
    imageAlt: "Black and white portrait study of the lower cheek",
    concern: [
      "Some faces carry fullness low in the cheek that does not change with weight. In the right patient, reducing that pad defines the line between cheek and jaw.",
      "In the wrong patient it produces hollowing that becomes more obvious with age, which is why the assessment is the important part.",
    ],
    approach: [
      "The approach is from inside the mouth, so there is no external scar. How much is removed is a judgement made conservatively, because it cannot be put back in the same form.",
      "The likely long-term effect on a face is part of the decision, not just the appearance in the months afterwards.",
    ],
    consultation: [
      "Assessment distinguishes the buccal pad from muscle bulk, skin and general facial fullness.",
      "Imaging is used to discuss how the change would read over time as well as now.",
    ],
    limitations: [
      "It is not a weight loss or jawline procedure.",
      "It is essentially irreversible.",
      "Faces become less full with age, which can make the change more pronounced later.",
    ],
    alternatives: [
      {
        label: "Facial liposuction for more generalised fullness",
        to: "/facial-sculpting/facial-liposuction",
      },
      { label: "Leaving the pad alone, which is often the right advice", to: "/contact-us" },
    ],
    risks: [
      "Over-reduction and hollowing, which is difficult to correct.",
      "Asymmetry between the two sides.",
    ],
    questions: [
      "Am I the right sort of candidate for this, and what makes you say so?",
      "How might my face look in fifteen or twenty years if I have it?",
      "What would you do instead in my case?",
    ],
    related: [
      "facial-sculpting/facial-liposuction",
      "facial-sculpting/fat-transfer",
      "facial-sculpting/chin-augmentation",
    ],
    confirm: [],
  }),
  build({
    slug: "facial-sculpting/fat-transfer",
    section: "facial-sculpting",
    title: "Fat transfer",
    nav: "Fat transfer",
    metaTitle: "Facial fat transfer in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Facial fat transfer with Lucian Ion in London: using a patient's own fat to restore volume in the midface, temples and around the eyes.",
    standfirst:
      "Using your own fat to restore volume where it has been lost — usually the temples, the midface and the area around the eyes.",
    image: "sculpting-06.jpg",
    imageAlt: "Black and white portrait study, soft light across the midface",
    concern: [
      "Volume loss reads as tiredness rather than as ageing, and it is often what people mean when they say they look drawn. Lifting tissue does not replace what is no longer there.",
      "Fat transfer answers the volume part of that picture and is very often combined with other work.",
    ],
    approach: [
      "Fat is taken from elsewhere on the body, prepared, and placed in small amounts in several layers so that it has a blood supply to survive on.",
      "Not all of it survives, and how much does varies between people. That is why more than one session is sometimes needed and why the plan is conservative.",
    ],
    consultation: [
      "Assessment identifies where volume is genuinely missing, as opposed to where tissue has descended.",
      "A donor area is discussed, along with the recovery that comes with it.",
    ],
    limitations: [
      "Survival of transferred fat is unpredictable and a second session may be needed.",
      "It adds volume; it does not lift or tighten.",
      "Results change if your weight changes significantly.",
    ],
    alternatives: [
      {
        label: "Cheek implants, where the shortfall is structural",
        to: "/facial-sculpting/cheek-implants",
      },
      { label: "Facelift, where tissue has descended", to: "/face-rejuvenation/facelift" },
    ],
    risks: [
      "Uneven or incomplete survival of the transferred fat.",
      "Lumpiness, particularly in thin-skinned areas.",
      "Recovery at the donor site as well as the face.",
    ],
    questions: [
      "Where exactly do I need volume, and where do I need lifting instead?",
      "How likely am I to need a second session?",
      "Where would the fat be taken from?",
    ],
    related: [
      "facial-sculpting/cheek-implants",
      "face-rejuvenation/facelift",
      "face-rejuvenation/blepharoplasty",
    ],
    confirm: [],
  }),
  build({
    slug: "facial-sculpting/facial-liposuction",
    section: "facial-sculpting",
    title: "Facial liposuction",
    nav: "Facial liposuction",
    metaTitle: "Facial liposuction in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Facial and neck liposuction with Lucian Ion in London, for localised fullness under the chin and along the jawline where skin quality is good.",
    standfirst:
      "Removing localised fullness under the chin and along the jawline, where the skin is good enough to take up the slack.",
    image: "sculpting-07.jpg",
    imageAlt: "Black and white study of the jawline and under-chin area",
    concern: [
      "Fullness under the chin can sit stubbornly in people who are otherwise slim, and it blurs the line that gives a jaw its definition.",
      "Whether removing fat alone will help depends almost entirely on how well the skin retracts afterwards.",
    ],
    approach: [
      "Where the skin is elastic and the excess is fat, a limited approach can define the contour with very small incisions.",
      "Where skin laxity or muscle banding is part of the picture, a lift is the more honest recommendation — and it is better to hear that at the consultation than afterwards.",
    ],
    consultation: [
      "Examination tests skin elasticity as well as the amount and depth of the fat.",
      "Photographs from several angles record the starting point.",
    ],
    limitations: [
      "It does not tighten skin or correct muscle bands.",
      "Results depend on your skin's ability to retract.",
      "Contour irregularities are possible in thin areas.",
    ],
    alternatives: [
      {
        label: "Anterior neck lift, where skin or muscle is involved",
        to: "/facial-sculpting/anterior-neck-lift",
      },
      {
        label: "Deep plane neck lift for more significant laxity",
        to: "/face-rejuvenation/deep-plane-neck-lift",
      },
    ],
    risks: ["Contour irregularity, asymmetry or loose skin once the fullness is removed."],
    questions: [
      "Will my skin retract well enough for this to work?",
      "Would a lift give me a better result than liposuction alone?",
    ],
    related: [
      "facial-sculpting/anterior-neck-lift",
      "face-rejuvenation/deep-plane-neck-lift",
      "facial-sculpting/buccal-fat-reduction",
    ],
    confirm: [],
  }),
  build({
    slug: "facial-sculpting/otoplasty-pinnaplasty",
    section: "facial-sculpting",
    title: "Otoplasty and pinnaplasty",
    nav: "Otoplasty / pinnaplasty",
    metaTitle: "Otoplasty and pinnaplasty in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Ear reshaping surgery — otoplasty and pinnaplasty — with Lucian Ion in London, for prominent ears in adults and in children.",
    standfirst:
      "Reshaping prominent ears so that they sit closer to the head and read symmetrically from the front.",
    image: "sculpting-08.jpg",
    imageAlt: "Black and white profile study showing the ear",
    concern: [
      "Prominent ears are usually noticed in childhood and can carry on mattering into adult life. The aim is for ears that go unremarked rather than ears that look operated on.",
      "Both position and shape are involved; one ear is almost always different from the other.",
    ],
    approach: [
      "The cartilage is reshaped and held in its new position through an incision behind the ear, where the scar is hidden.",
      "The aim is a natural fold and a position that looks unforced from the front, which matters more than how close the ear sits to the head.",
    ],
    consultation: [
      "Both ears are assessed separately, because they rarely need the same amount of correction.",
      "For children, the timing of surgery and the child's own wish to have it are part of the discussion.",
    ],
    limitations: [
      "Complete symmetry is not achievable.",
      "Cartilage can partially spring back.",
      "The shape of the ear itself, as distinct from its position, can only be changed so far.",
    ],
    alternatives: [{ label: "Waiting, particularly for younger children", to: "/contact-us" }],
    risks: [
      "Partial recurrence of prominence.",
      "Scar thickening behind the ear.",
      "Residual asymmetry.",
    ],
    questions: [
      "How much correction do I need on each side?",
      "How likely is the cartilage to move back?",
      "For a child, is this the right time?",
    ],
    related: [
      "facial-sculpting/chin-augmentation",
      "facial-sculpting/cheek-implants",
      "rhinoplasty/reduction",
    ],
    confirm: [
      `${CONFIRM} whether children are seen for ear surgery and from what age, and what the arrangements are.`,
    ],
  }),
];

/* ---------------------------------------------------------------------------
 * Face rejuvenation
 * ------------------------------------------------------------------------- */

const faceRejuvenation: Procedure[] = [
  build({
    slug: "face-rejuvenation/facelift",
    section: "face-rejuvenation",
    title: "Facelift",
    nav: "Facelift",
    metaTitle: "Deep plane facelift in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Facelift surgery with Lucian Ion in London: repositioning the deeper layers of the face and neck for a rested rather than an altered appearance.",
    standfirst:
      "Repositioning the deeper layers of the face rather than pulling on the skin — the difference between looking rested and looking tightened.",
    image: "rejuvenation-02.jpg",
    imageAlt: "Black and white portrait study, three-quarter view",
    concern: [
      "The changes people describe are usually descent rather than looseness: a heaviness at the jawline, a fold beside the mouth, a cheek that has slipped down and left a hollow behind it.",
      "Most patients want to look like themselves on a good day. That is a reasonable aim and a useful way to describe it.",
    ],
    approach: [
      "Work at the deeper layer allows tissue to be returned towards where it came from without tension on the skin, which is what keeps the result from looking stretched.",
      "The neck is usually part of the same plan, because the jawline is where face and neck meet and treating one alone rarely reads well.",
    ],
    consultation: [
      "Assessment covers skin quality, volume loss, the neck, and your general health and medication.",
      "Photographs and 3D imaging describe the starting point and give the follow-up something to be measured against.",
    ],
    limitations: [
      "Surgery repositions tissue; it does not stop ageing.",
      "Skin texture, sun damage and pigmentation are not improved by lifting.",
      "Volume that has been lost usually needs a separate answer.",
      "Scars are permanent, even when placed where they are least visible.",
    ],
    alternatives: [
      {
        label: "Short scar facelift for earlier or more limited change",
        to: "/face-rejuvenation/short-scar-facelift",
      },
      {
        label: "Neck lift alone, where the neck is the whole concern",
        to: "/face-rejuvenation/deep-plane-neck-lift",
      },
      {
        label: "Fat transfer, where volume is the main issue",
        to: "/facial-sculpting/fat-transfer",
      },
      { label: "Non-surgical treatment, including doing nothing for now", to: "/contact-us" },
    ],
    risks: [
      "Temporary weakness or, rarely, lasting change in facial nerve function.",
      "Collection of blood under the skin requiring attention.",
      "Skin healing problems, particularly in smokers.",
      "Changes to the hairline or to the shape of the earlobe.",
    ],
    recovery: [
      "Plan for several weeks before you would want to be photographed or at an event.",
      "Ask about hair washing, colouring, sleeping position and when you can return to exercise.",
    ],
    questions: [
      "What would you include in my operation, and would the neck be part of it?",
      "Where would my scars be?",
      "Do I need volume as well as lifting?",
      "What would you expect this to look like in ten years?",
    ],
    related: [
      "face-rejuvenation/short-scar-facelift",
      "face-rejuvenation/deep-plane-neck-lift",
      "facial-sculpting/fat-transfer",
    ],
    confirm: [
      `${CONFIRM} how the deep plane technique should be described, and whether admission is day case or overnight.`,
    ],
  }),
  build({
    slug: "face-rejuvenation/short-scar-facelift",
    section: "face-rejuvenation",
    title: "Short scar facelift",
    nav: "Short scar facelift",
    metaTitle: "Short scar facelift in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Short scar facelift with Lucian Ion in London: a more limited lift for patients with early changes in the cheek and jawline.",
    standfirst:
      "A more limited operation, with shorter scars, for patients whose changes are early and concentrated in the cheek and jawline.",
    image: "rejuvenation-03.jpg",
    imageAlt: "Black and white portrait study in soft light",
    concern: [
      "Some patients notice the beginnings of heaviness at the jawline while their neck is still good. A full operation would be more than they need.",
      "The judgement is whether a shorter approach can reach what is actually bothering them.",
    ],
    approach: [
      "A shorter incision limits how far tissue can be redraped, so this suits a smaller amount of change and a neck that does not need work.",
      "Choosing a shorter scar where a longer one is needed produces an early recurrence, which is the trade-off to understand clearly.",
    ],
    consultation: [
      "Assessment focuses on how much laxity there is and where, and particularly on the neck.",
      "If a fuller operation would serve you better, that is what will be recommended.",
    ],
    limitations: [
      "It does very little for the neck.",
      "Less lifting is possible than with a full operation.",
      "It does not add lost volume or improve skin quality.",
    ],
    alternatives: [
      { label: "Facelift, where there is more to address", to: "/face-rejuvenation/facelift" },
      { label: "Fat transfer for volume", to: "/facial-sculpting/fat-transfer" },
    ],
    risks: [
      "Earlier recurrence if the amount of laxity exceeds what a short scar approach can hold.",
    ],
    questions: [
      "Am I suitable for a short scar operation, or would I do better with a full one?",
      "What would a short scar approach not address in my case?",
    ],
    related: [
      "face-rejuvenation/facelift",
      "face-rejuvenation/deep-plane-neck-lift",
      "facial-sculpting/fat-transfer",
    ],
    confirm: [],
  }),
  build({
    slug: "face-rejuvenation/deep-plane-neck-lift",
    section: "face-rejuvenation",
    title: "Deep plane neck lift",
    nav: "Deep plane neck lift",
    metaTitle: "Deep plane neck lift in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Deep plane neck lift with Lucian Ion in London, addressing muscle, fat and skin to restore a defined line between jaw and neck.",
    standfirst:
      "Addressing the muscle, the fat and the skin of the neck together, so the line between jaw and neck is redefined rather than simply tightened.",
    image: "rejuvenation-04.jpg",
    imageAlt: "Black and white study of the neck and jawline",
    concern: [
      "The neck often shows change before the face, and it is the feature people most dislike in photographs taken from below.",
      "Bands, fullness and loose skin can all be present at once, and skin tightening alone will not correct them.",
    ],
    approach: [
      "Working in the deeper layer allows the muscle and the tissue under it to be repositioned, which is what defines the angle under the chin.",
      "It is frequently combined with facelift surgery, because a treated neck next to an untreated jawline rarely looks settled.",
    ],
    consultation: [
      "Examination identifies what is contributing — fat above or below the muscle, muscle bands, skin laxity, chin position or the position of the glands.",
      "Photographs and imaging record the contour from several angles.",
    ],
    limitations: [
      "Skin quality limits how sharp a contour can be.",
      "Some structures deep in the neck set a floor on what can be achieved.",
      "The neck continues to age afterwards.",
    ],
    alternatives: [
      {
        label: "Anterior neck lift for central fullness only",
        to: "/facial-sculpting/anterior-neck-lift",
      },
      {
        label: "Facelift, where the jawline and cheek are also involved",
        to: "/face-rejuvenation/facelift",
      },
      {
        label: "Facial liposuction, where the issue is fat with good skin",
        to: "/facial-sculpting/facial-liposuction",
      },
    ],
    risks: [
      "Contour irregularity or recurrent banding.",
      "Scars around the ear and under the chin.",
      "Temporary altered sensation in the neck and earlobe.",
    ],
    questions: [
      "What is actually causing my neck to look like this?",
      "Would I get a better result if the face were included?",
      "How durable is this likely to be?",
    ],
    related: [
      "face-rejuvenation/facelift",
      "facial-sculpting/anterior-neck-lift",
      "facial-sculpting/chin-augmentation",
    ],
    confirm: [],
  }),
  build({
    slug: "face-rejuvenation/brow-forehead-lift",
    section: "face-rejuvenation",
    title: "Brow and forehead lift",
    nav: "Brow / forehead lift",
    metaTitle: "Brow and forehead lift in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Brow lift and forehead lift with Lucian Ion in London, to raise a heavy brow and open the upper eyelid without a surprised appearance.",
    standfirst:
      "Raising a brow that has become heavy, and opening the upper lid — without producing the raised, surprised look that people rightly worry about.",
    image: "rejuvenation-05.jpg",
    imageAlt: "Black and white portrait study of the brow and eyes",
    concern: [
      "A descending brow crowds the upper eyelid and can make someone look stern or tired. It is often mistaken for excess eyelid skin.",
      "Treating the eyelid when the brow is the cause is a common way to end up disappointed, so telling them apart is the first task.",
    ],
    approach: [
      "Brow position, brow shape and the height of the forehead are all considered, because the aim is a natural arch rather than elevation for its own sake.",
      "It is often planned together with eyelid surgery, where both contribute.",
    ],
    consultation: [
      "Assessment separates brow descent from eyelid skin excess and checks eyelid and eye function.",
      "Hairline position and hair density influence where incisions can reasonably be placed.",
    ],
    limitations: [
      "It does not remove forehead lines caused by muscle movement.",
      "Over-elevation looks unnatural, which is why the change is deliberately restrained.",
      "The hairline may be altered.",
    ],
    alternatives: [
      {
        label: "Blepharoplasty, where the eyelid is the real issue",
        to: "/face-rejuvenation/blepharoplasty",
      },
      { label: "Non-surgical treatment of the brow", to: "/contact-us" },
    ],
    risks: [
      "Altered sensation or temporary weakness in the forehead.",
      "Hair thinning near the incision, or a changed hairline.",
      "Asymmetry of brow height.",
    ],
    questions: [
      "Is my problem the brow, the eyelid, or both?",
      "How much elevation are you proposing, and where would the incisions be?",
      "Will this affect my hairline?",
    ],
    related: [
      "face-rejuvenation/blepharoplasty",
      "face-rejuvenation/facelift",
      "facial-sculpting/fat-transfer",
    ],
    confirm: [],
  }),
  build({
    slug: "face-rejuvenation/blepharoplasty",
    section: "face-rejuvenation",
    title: "Blepharoplasty",
    nav: "Blepharoplasty",
    metaTitle: "Blepharoplasty — eyelid surgery in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Upper and lower eyelid surgery — blepharoplasty — with Lucian Ion in London, for hooding, puffiness and hollowing around the eyes.",
    standfirst:
      "Upper and lower eyelid surgery, for hooding above the eye and puffiness or hollowing below it.",
    image: "rejuvenation-07.jpg",
    imageAlt: "Black and white portrait study, close crop on the eyes",
    concern: [
      "The eyes are where people read tiredness. Upper lid skin can rest on the lashes; below, the complaint is usually puffiness, a shadow, or both at once.",
      "Lower lids are the more delicate problem, because volume, skin and support all interact there.",
    ],
    approach: [
      "Upper lid surgery is mostly about how much skin can safely be removed, and in some patients the brow is the real cause.",
      "Lower lid surgery is about redistributing and supporting rather than simply removing; taking too much creates problems that are hard to undo.",
    ],
    consultation: [
      "Assessment includes eyelid position and function, tear film, any dry eye history and brow position.",
      "Fat transfer or volume work is discussed where hollowing is part of the picture.",
    ],
    limitations: [
      "Fine lines and skin texture around the eye are not corrected by surgery.",
      "Dark circles are often pigment or shadow rather than excess skin.",
      "Eyelid surgery does not lift the brow.",
    ],
    alternatives: [
      {
        label: "Brow lift, where the brow is the cause",
        to: "/face-rejuvenation/brow-forehead-lift",
      },
      { label: "Fat transfer for hollowing", to: "/facial-sculpting/fat-transfer" },
    ],
    risks: [
      "Dry eye or irritation, which can persist.",
      "Change in eyelid position or difficulty closing the eye fully.",
      "Visible scarring or asymmetry between the two sides.",
      "Very rarely, changes in vision.",
    ],
    recovery: [
      "Plan for a period of blurred vision, watering and light sensitivity; arrange screen-free time.",
    ],
    questions: [
      "Do I need upper lids, lower lids, or the brow?",
      "Do I have any dry eye risk I should know about?",
      "Would volume help me as well as, or instead of, removal?",
    ],
    related: [
      "face-rejuvenation/brow-forehead-lift",
      "facial-sculpting/fat-transfer",
      "face-rejuvenation/facelift",
    ],
    confirm: [],
  }),
];

/* ---------------------------------------------------------------------------
 * Breast surgery
 * ------------------------------------------------------------------------- */

const breastSurgery: Procedure[] = [
  build({
    slug: "breast-surgery/augmentation",
    section: "breast-surgery",
    title: "Breast augmentation",
    nav: "Breast augmentation",
    metaTitle: "Breast augmentation in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Breast augmentation with Lucian Ion in London: implant choice, position and proportion, with a frank account of the long-term commitment involved.",
    standfirst:
      "Adding volume and shape — and a decision that is as much about proportion and long-term commitment as about size.",
    image: "breasts-02.jpg",
    imageAlt: "Black and white study of the torso, studio light",
    concern: [
      "Reasons vary: breasts that never developed as much as expected, volume lost after pregnancy or weight change, or a noticeable difference between the two sides.",
      "Most patients arrive with a size in mind. The more useful conversation is about the proportions of your own chest and what it will carry well.",
    ],
    approach: [
      "Implant choice, position and the shape of your existing breast all interact. The footprint of the chest, the skin envelope and the amount of natural tissue set the sensible range.",
      "This is a long-term decision: implants are not lifetime devices and further surgery at some stage is likely, which is worth accepting at the outset rather than later.",
    ],
    consultation: [
      "Examination covers breast shape and footprint, skin quality, symmetry and nipple position.",
      "Implant type and placement are discussed together with what each means for the appearance and for future monitoring.",
    ],
    limitations: [
      "Implants do not lift a breast that has descended; an uplift may be needed as well.",
      "Existing asymmetry usually remains visible to some degree.",
      "Rippling or implant edges may be felt or seen, particularly in thin patients.",
      "Breasts continue to change with age, weight and pregnancy.",
    ],
    alternatives: [
      {
        label: "Breast uplift, with or without an implant",
        to: "/breast-surgery/uplift-mastopexy",
      },
      { label: "Deciding against surgery", to: "/contact-us" },
    ],
    risks: [
      "Capsular contracture — firmness and distortion from scar tissue around the implant.",
      "Implant rupture, rotation or malposition, and the need for further surgery.",
      "Changes in nipple or breast sensation.",
      "Effects on breastfeeding and on breast imaging, which are discussed individually.",
      "Rare implant-associated conditions, which are also discussed at consultation.",
    ],
    recovery: [
      "Plan for restrictions on lifting, overhead reaching and exercise, and ask about support garments.",
    ],
    questions: [
      "What size and shape range would suit my chest?",
      "Where would the implant sit, and why?",
      "How likely am I to need further surgery, and when?",
      "What does follow-up and monitoring involve?",
    ],
    related: [
      "breast-surgery/uplift-mastopexy",
      "breast-surgery/reduction",
      "breast-surgery/gynaecomastia",
    ],
    confirm: [
      `${CONFIRM} implant brands or types to be named, the practice's implant registry and warranty arrangements, and the long-term follow-up policy.`,
    ],
  }),
  build({
    slug: "breast-surgery/reduction",
    section: "breast-surgery",
    title: "Breast reduction",
    nav: "Breast reduction",
    metaTitle: "Breast reduction in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Breast reduction with Lucian Ion in London: reducing size and reshaping and lifting at the same time, with a clear account of scars and trade-offs.",
    standfirst:
      "Reducing size, and at the same time reshaping and lifting — the two happen together rather than separately.",
    image: "breasts-03.jpg",
    imageAlt: "Black and white torso study, soft directional light",
    concern: [
      "Large breasts can cause neck, shoulder and back discomfort, skin irritation, difficulty with exercise and a limited choice of clothing. For many patients the physical symptoms matter as much as the appearance.",
      "Asymmetry is frequently part of the picture and is addressed in the same operation.",
    ],
    approach: [
      "Reduction removes tissue and reshapes what remains, moving the nipple to a position that matches the new shape. The scar pattern follows from how much is being removed.",
      "The balance between how much is removed, the final shape and the length of the scars is decided with you, not for you.",
    ],
    consultation: [
      "Assessment covers size, shape, skin quality, nipple position and any symptoms you have.",
      "Scar patterns are explained and drawn, along with what each one allows.",
    ],
    limitations: [
      "Scars are unavoidable and permanent.",
      "Nipple sensation may change, and breastfeeding may be affected.",
      "Breasts continue to change afterwards with weight and time.",
      "Complete symmetry is not achievable.",
    ],
    alternatives: [
      {
        label: "Breast uplift where size is acceptable but position is not",
        to: "/breast-surgery/uplift-mastopexy",
      },
      { label: "Non-surgical measures, including support and physiotherapy", to: "/contact-us" },
    ],
    risks: [
      "Delayed healing where the scars meet, which is not unusual.",
      "Loss of nipple sensation, and rarely problems with nipple blood supply.",
      "Asymmetry of shape, size or nipple position.",
    ],
    recovery: ["Plan for support garments and restrictions on lifting and exercise."],
    questions: [
      "What scar pattern would you use for me?",
      "How much smaller would you aim for, and how is that decided?",
      "What is the chance my nipple sensation changes?",
    ],
    related: [
      "breast-surgery/uplift-mastopexy",
      "breast-surgery/augmentation",
      "breast-surgery/gynaecomastia",
    ],
    confirm: [
      `${CONFIRM} scar patterns used, and whether any reduction work is undertaken on a non-cosmetic or insured basis.`,
    ],
  }),
  build({
    slug: "breast-surgery/uplift-mastopexy",
    section: "breast-surgery",
    title: "Breast uplift (mastopexy)",
    nav: "Breast uplift / mastopexy",
    metaTitle: "Breast uplift and mastopexy in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Breast uplift or mastopexy with Lucian Ion in London: restoring breast position and shape, with or without an implant, after pregnancy or weight change.",
    standfirst:
      "Restoring position and shape rather than changing size — sometimes on its own, sometimes with a small implant.",
    image: "breasts-04.jpg",
    imageAlt: "Black and white torso study in low contrast light",
    concern: [
      "After pregnancy, breastfeeding or weight change, breasts often keep their volume but lose position, and the upper part empties.",
      "Patients frequently describe wanting their own breast back rather than a different one.",
    ],
    approach: [
      "An uplift removes skin and reshapes the breast so it sits higher and fuller at the top. The scar pattern depends on how much lifting is needed.",
      "Where upper fullness is what is missing, a small implant may be combined with the uplift; combining them has its own trade-offs, which are discussed openly.",
    ],
    consultation: [
      "Assessment covers nipple position, skin quality, volume distribution and symmetry.",
      "Whether to add an implant, and whether to do it in one stage or two, is discussed with the reasoning made explicit.",
    ],
    limitations: [
      "An uplift does not add volume on its own.",
      "Scars are permanent and vary in how they mature.",
      "Some settling and recurrence of descent happens over time.",
      "Skin quality limits how much shape can be held.",
    ],
    alternatives: [
      {
        label: "Breast augmentation alone, where position is acceptable",
        to: "/breast-surgery/augmentation",
      },
      { label: "Breast reduction, where size is also a concern", to: "/breast-surgery/reduction" },
    ],
    risks: [
      "Delayed healing at the scars.",
      "Changes in nipple sensation or position.",
      "Recurrent descent, particularly if an implant is combined with the uplift.",
    ],
    recovery: ["Plan for support garments and a period without exercise or heavy lifting."],
    questions: [
      "Do I need an uplift, an implant, or both?",
      "If both, would you do them in one operation or two?",
      "What scars would I have?",
    ],
    related: [
      "breast-surgery/augmentation",
      "breast-surgery/reduction",
      "breast-surgery/gynaecomastia",
    ],
    confirm: [],
  }),
  build({
    slug: "breast-surgery/gynaecomastia",
    section: "breast-surgery",
    title: "Gynaecomastia surgery",
    nav: "Gynaecomastia",
    metaTitle: "Gynaecomastia surgery in London — Lucian Ion FRCS(Plast)",
    metaDescription:
      "Gynaecomastia surgery with Lucian Ion in London: treating breast tissue and fat in men to restore a flat, masculine chest contour.",
    standfirst:
      "Breast tissue and fat in men, treated to restore a flat chest contour — and the reason it is worth investigating before operating.",
    image: "breasts-05.jpg",
    imageAlt: "Black and white study of the male chest and torso",
    concern: [
      "Fullness of the male chest affects what men are willing to wear and whether they will swim or take their shirt off. It is common and rarely discussed.",
      "It may be firm breast tissue, fat, or both, and the mix decides how it is treated.",
    ],
    approach: [
      "Fat responds to liposuction; firm glandular tissue has to be excised directly. Most patients need some of each, which is why assessment comes first.",
      "Where there is significant skin excess, managing the skin becomes part of the plan and changes what scars are involved.",
    ],
    consultation: [
      "Assessment distinguishes glandular tissue from fat and considers medication, supplements and anything that might point to an underlying cause.",
      "Investigations are sometimes advised before surgery is planned.",
    ],
    limitations: [
      "Recurrence is possible, particularly if an underlying cause continues.",
      "Skin retraction is not guaranteed, and loose skin may remain.",
      "Some scarring around the areola is usual.",
    ],
    alternatives: [
      { label: "Investigating and treating an underlying cause first", to: "/contact-us" },
      { label: "Weight change, where the fullness is largely fat", to: "/contact-us" },
    ],
    risks: [
      "Contour irregularity, over-correction or a dished appearance.",
      "Changes in nipple sensation or position.",
      "Recurrence.",
    ],
    recovery: ["Plan for a compression garment and restrictions on upper body exercise."],
    questions: [
      "Is mine mostly fat or mostly gland?",
      "Should anything be investigated before we plan surgery?",
      "What would my chest look like if my weight changes afterwards?",
    ],
    related: [
      "breast-surgery/reduction",
      "facial-sculpting/facial-liposuction",
      "breast-surgery/augmentation",
    ],
    confirm: [
      `${CONFIRM} which investigations are routinely arranged before gynaecomastia surgery, and any referral arrangements.`,
    ],
  }),
];

export const procedures: Procedure[] = [
  ...rhinoplasty,
  ...facialSculpting,
  ...faceRejuvenation,
  ...breastSurgery,
];

export const procedureBySlug = (slug: string) => procedures.find((p) => p.slug === slug);

export const proceduresInSection = (section: SectionSlug) =>
  procedures.filter((p) => p.section === section);
