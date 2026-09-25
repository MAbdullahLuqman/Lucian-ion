// AUTO-GENERATED from the gallery folders published on lucianion.co.uk.
// Source root: https://lucianion.co.uk/assets/img/New_gallery_mirror_area/
// "consent" is derived from the practice's own folder naming:
//   IG_OK   -> confirmed   (patient agreed to public use)
//   NO_IG   -> restricted  (patient did not agree to public use)
//   neither -> unconfirmed ([LUCIAN TO CONFIRM])
// Only cases with consent === "confirmed" are ever rendered.

export type Consent = "confirmed" | "restricted" | "unconfirmed";
export type CaseView = { label: string; before: string; after: string };
export type PatientCase = {
  id: string;
  procedureSlug: string;
  category: string;
  procedure: string;
  consent: Consent;
  source: string;
  views: CaseView[];
};

export const patientCases: PatientCase[] = [
  {
    id: "case-001",
    procedureSlug: "rhinoplasty/reduction",
    category: "Rhinoplasty",
    procedure: "Reduction rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/01-_Reduction/Patient_007-_reduction_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_007-_reduction_rhinoplasty/Front_view_pre-op_007_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_007-_reduction_rhinoplasty/Front_view_post-op_007_DxO.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_007-_reduction_rhinoplasty/Left_profile_pre-op_007_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_007-_reduction_rhinoplasty/Left_profile_post-op_007_DxO.jpg",
      },
      {
        label: "Right semi-profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_007-_reduction_rhinoplasty/Right_semi-profile_pre-op_007_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_007-_reduction_rhinoplasty/Right_semi-profile_post-op_007_DxO.jpg",
      },
    ],
  },
  {
    id: "case-002",
    procedureSlug: "rhinoplasty/reduction",
    category: "Rhinoplasty",
    procedure: "Reduction rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/01-_Reduction/Patient_011-_Reduction_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_011-_Reduction_rhinoplasty/Front_view_pre-op_011_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_011-_Reduction_rhinoplasty/Front_view_post-op_011_DxO.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_011-_Reduction_rhinoplasty/Left_profile_pre-op_011_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_011-_Reduction_rhinoplasty/Left_profile__Post-op_011_DxO.jpg",
      },
    ],
  },
  {
    id: "case-003",
    procedureSlug: "rhinoplasty/reduction",
    category: "Rhinoplasty",
    procedure: "Reduction rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/01-_Reduction/Patient_018_square",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_018_square/018_front_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_018_square/018_front_post.png",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_018_square/018_left_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_018_square/018_left_post.png",
      },
    ],
  },
  {
    id: "case-004",
    procedureSlug: "rhinoplasty/reduction",
    category: "Rhinoplasty",
    procedure: "Reduction rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/01-_Reduction/Patient_024_Primary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_024_Primary_rhinoplasty/Front_view_preop__024_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_024_Primary_rhinoplasty/Front_view__Postop__024_DxO.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_024_Primary_rhinoplasty/Left_profile_pre-op__024_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_024_Primary_rhinoplasty/Left_profile_Post_op_024_DxO.jpg",
      },
    ],
  },
  {
    id: "case-005",
    procedureSlug: "rhinoplasty/reduction",
    category: "Rhinoplasty",
    procedure: "Reduction rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/01-_Reduction/Patient_029_primary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_029_primary_rhinoplasty/Front_view-_Pre-op_029_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_029_primary_rhinoplasty/Front_view___post-op__029__DxO.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_029_primary_rhinoplasty/Left_profile-pre-op___029_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_029_primary_rhinoplasty/Left_profile-post-op_029_DxO.jpg",
      },
    ],
  },
  {
    id: "case-006",
    procedureSlug: "rhinoplasty/reduction",
    category: "Rhinoplasty",
    procedure: "Reduction rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/01-_Reduction/Patient_033_square",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_033_square/033_front_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_033_square/033_front_post.png",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_033_square/033_left_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_033_square/033_left_post.png",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_033_square/033_right_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_033_square/033_right_post.png",
      },
    ],
  },
  {
    id: "case-007",
    procedureSlug: "rhinoplasty/reduction",
    category: "Rhinoplasty",
    procedure: "Reduction rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty/Front_view_pre-op_036_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty/Front_view_post-op_0_036_DxO.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty/Right_profile_pre-op_0_036_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty/Right_profile_post-op_0_036_DxO.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty/Left_oblique_pre-op_0_036_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty/Left_oblique_post-op_0_036_DxO.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty/Right_oblique_pre-op_0_036_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_036_Primary_rhinoplasty/Right_oblique_post-op_0_036_DxO.jpg",
      },
    ],
  },
  {
    id: "case-008",
    procedureSlug: "rhinoplasty/reduction",
    category: "Rhinoplasty",
    procedure: "Reduction rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty/Front_view_pre-op_037_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty/Front_view_post-op_037_b_DxO.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty/Left_profile_pre-op_037_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty/Left_profile_post-op_037_DxO.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty/Right_profile_pre-op_037_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty/Right_profile_post-op_037_DxO.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty/Right_oblique_pre-op_037_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_037_Primary_rhinoplasty/Right_oblique_post-op_037_DxO.jpg",
      },
    ],
  },
  {
    id: "case-009",
    procedureSlug: "rhinoplasty/reduction",
    category: "Rhinoplasty",
    procedure: "Reduction rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/01-_Reduction/Patient_042_Primary_rhinoplasty_and_chin_reduction",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_042_Primary_rhinoplasty_and_chin_reduction/Front_view_pre-op_042_DxO.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_042_Primary_rhinoplasty_and_chin_reduction/Front_view_2_years_DxO_042.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_042_Primary_rhinoplasty_and_chin_reduction/Left_profile_pre-op_042_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_042_Primary_rhinoplasty_and_chin_reduction/Left_profile_2_years_DxO_042.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_042_Primary_rhinoplasty_and_chin_reduction/Right_profile_pre-op_042_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_042_Primary_rhinoplasty_and_chin_reduction/Right_profile_2_years_DxO_042.jpg",
      },
    ],
  },
  {
    id: "case-010",
    procedureSlug: "rhinoplasty/reduction",
    category: "Rhinoplasty",
    procedure: "Reduction rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/01-_Reduction/Patient_057_square",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_057_square/057_front_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_057_square/057_front_post.png",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_057_square/057_left_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_057_square/057_left_post.png",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_057_square/057_right_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_057_square/057_right_post.png",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_057_square/057_right_oblique_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_057_square/057_right_oblique_post.png",
      },
    ],
  },
  {
    id: "case-011",
    procedureSlug: "rhinoplasty/reduction",
    category: "Rhinoplasty",
    procedure: "Reduction rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/Front_pre_059.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/Front_post_059.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/L_pre_059.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/L_post_059.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/R_pre_059.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/R_post_059.jpg",
      },
      {
        label: "Oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/L_oblique_prere_059.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/L__obliquepost_059.jpg",
      },
      {
        label: "Oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/R_oblique_pre_059.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/01-_Reduction/Patient_059_Primary_rhinoplasty/R_oblique_post059.jpg",
      },
    ],
  },
  {
    id: "case-012",
    procedureSlug: "rhinoplasty/augmentation",
    category: "Rhinoplasty",
    procedure: "Augmentation rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/02-_Augmentation/Patient_002_Square",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_002_Square/002_front_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_002_Square/002_front_post.png",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_002_Square/002_left_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_002_Square/002_left_post.png",
      },
    ],
  },
  {
    id: "case-013",
    procedureSlug: "rhinoplasty/augmentation",
    category: "Rhinoplasty",
    procedure: "Augmentation rhinoplasty",
    consent: "restricted",
    source: "01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG/Front_preop_099.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG/Front_postop_099.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG/L_preop_099.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG/L_postop_099.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG/R_preop_099.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG/R_postop_099.jpg",
      },
      {
        label: "Oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG/R_oblique_preop_099.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_099_Secondary_rib_graft_rhinoplasty_NO_IG/R_oblique_postop_099.jpg",
      },
    ],
  },
  {
    id: "case-014",
    procedureSlug: "rhinoplasty/augmentation",
    category: "Rhinoplasty",
    procedure: "Augmentation rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty/Front_view_pre-operative_103.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty/Front_view_six_months_103.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty/Left_profile_pre-operative_103.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty/Left_profile_six_months_103.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty/Right_profile_pre-operative_103.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty/Right_profile_6_months_103.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty/Right_oblique_preoperative_103.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/02-_Augmentation/Patient_103_Secondary_rhinoplasty/Right_oblique%2C_6_months._103.jpg",
      },
    ],
  },
  {
    id: "case-015",
    procedureSlug: "rhinoplasty/deviated-crooked",
    category: "Rhinoplasty",
    procedure: "Deviated / crooked nose",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_008_square",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_008_square/008_front_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_008_square/008_front_post.png",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_008_square/008_left_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_008_square/008_left_post.png",
      },
      {
        label: "Right semi-profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_008_square/008_right_semi_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_008_square/008_right_semi_post.png",
      },
    ],
  },
  {
    id: "case-016",
    procedureSlug: "rhinoplasty/deviated-crooked",
    category: "Rhinoplasty",
    procedure: "Deviated / crooked nose",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_010_square",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_010_square/010_front_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_010_square/010_front_post.png",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_010_square/010_left_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_010_square/010_left_post.png",
      },
    ],
  },
  {
    id: "case-017",
    procedureSlug: "rhinoplasty/deviated-crooked",
    category: "Rhinoplasty",
    procedure: "Deviated / crooked nose",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_045_square",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_045_square/045_front_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_045_square/045_front_post.png",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_045_square/045_right_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_045_square/045_right_post.png",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_045_square/045_right_oblique_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_045_square/045_right_oblique_post.png",
      },
    ],
  },
  {
    id: "case-018",
    procedureSlug: "rhinoplasty/deviated-crooked",
    category: "Rhinoplasty",
    procedure: "Deviated / crooked nose",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_052_Primary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_052_Primary_rhinoplasty/Front_view_preoperative_052.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_052_Primary_rhinoplasty/Front_view_two_months_052.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_052_Primary_rhinoplasty/Left_profile_preoperative_052.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_052_Primary_rhinoplasty/Left_profile_two_months_052.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_052_Primary_rhinoplasty/Left_oblique_preoperative_052.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_052_Primary_rhinoplasty/Left_oblique_two_months_052.jpg",
      },
    ],
  },
  {
    id: "case-019",
    procedureSlug: "rhinoplasty/deviated-crooked",
    category: "Rhinoplasty",
    procedure: "Deviated / crooked nose",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty/Front_view_pre-op_054.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty/Front_view_6_months_054.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty/Right_profile_pre-op_054.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty/Right_profile_6_months_054.jpg.png",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty/Left_oblique_pre-op_054.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty/Left_oblique_6_months_054.png",
      },
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty/Skyline_view_pre-op_054.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_054_Primary_hybrid_rhinoplasty/Skyline_view_6_weeks_054.jpg",
      },
    ],
  },
  {
    id: "case-020",
    procedureSlug: "rhinoplasty/deviated-crooked",
    category: "Rhinoplasty",
    procedure: "Deviated / crooked nose",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty/Just_cropped_front_before_W_067.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty/Just_cropped_front_after_W_067.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty/L_before_W_067.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty/L_after_W_067.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty/R_before_W_067.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty/R_after_W_067.jpg",
      },
      {
        label: "Oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty/R_oblique_before_W_067.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/03-_Deviated_Crooked_nose/Patient_067-_Primary_rhinoplasty/R_oblique_after_W_067.jpg",
      },
    ],
  },
  {
    id: "case-021",
    procedureSlug: "rhinoplasty/secondary",
    category: "Rhinoplasty",
    procedure: "Secondary rhinoplasty",
    consent: "unconfirmed",
    source:
      "01-_Rhinoplasty/04-_Secondary/Patient_004_secondarty_rhinoplasty_and_anterior_necklift",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_004_secondarty_rhinoplasty_and_anterior_necklift/Front_pre-op_004_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_004_secondarty_rhinoplasty_and_anterior_necklift/Front_post-op_004_DxO.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_004_secondarty_rhinoplasty_and_anterior_necklift/Right_profile_pre-op_004_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_004_secondarty_rhinoplasty_and_anterior_necklift/Right_profile_post-op_004_DxO.jpg",
      },
      {
        label: "Right semi-profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_004_secondarty_rhinoplasty_and_anterior_necklift/Right_semi-profile_pre-op_004_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_004_secondarty_rhinoplasty_and_anterior_necklift/Right_semi-profile_post-op_004_DxO.jpg",
      },
    ],
  },
  {
    id: "case-022",
    procedureSlug: "rhinoplasty/secondary",
    category: "Rhinoplasty",
    procedure: "Secondary rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/04-_Secondary/Patient_005_secondary_rib_graft_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_005_secondary_rib_graft_rhinoplasty/Front_view_pre-op_005_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_005_secondary_rib_graft_rhinoplasty/Front_view_post-op_005_DxO.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_005_secondary_rib_graft_rhinoplasty/Left_profile_pre-op_005_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_005_secondary_rib_graft_rhinoplasty/Left_profile_post-op_005_DxO.jpg",
      },
    ],
  },
  {
    id: "case-023",
    procedureSlug: "rhinoplasty/secondary",
    category: "Rhinoplasty",
    procedure: "Secondary rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/04-_Secondary/Patient_009_square",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_009_square/009_front_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_009_square/009_front_post.png",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_009_square/009_left_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_009_square/009_left_post.png",
      },
    ],
  },
  {
    id: "case-024",
    procedureSlug: "rhinoplasty/secondary",
    category: "Rhinoplasty",
    procedure: "Secondary rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/04-_Secondary/Patient_023_Secondary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_023_Secondary_rhinoplasty/Front_view___pre-op_023_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_023_Secondary_rhinoplasty/Front_view_post-op_9y_023_DxO.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_023_Secondary_rhinoplasty/Left_profile_pre-op_023_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_023_Secondary_rhinoplasty/Left_view_post-op_9y_023_DxO.jpg",
      },
    ],
  },
  {
    id: "case-025",
    procedureSlug: "rhinoplasty/secondary",
    category: "Rhinoplasty",
    procedure: "Secondary rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/04-_Secondary/Patient_027_Secondary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_027_Secondary_rhinoplasty/Front_view_pre-op_027_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_027_Secondary_rhinoplasty/Front_view_post-op_027_DxO.png",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_027_Secondary_rhinoplasty/Left_profile_pre-op_027_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_027_Secondary_rhinoplasty/Left_profile_post-op_027_DxO.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_027_Secondary_rhinoplasty/Right_profile_pre-op_027_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_027_Secondary_rhinoplasty/Right_profile_post-op_027_DxO.jpg",
      },
    ],
  },
  {
    id: "case-026",
    procedureSlug: "rhinoplasty/secondary",
    category: "Rhinoplasty",
    procedure: "Secondary rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision/Front_view_pre-op_044_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision/Front_view_post-op_044_DxO.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision/Left_profile_pre-op_044_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision/Left_profile_post-op_044_DxO.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision/Right_profile_pre-op_044_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision/RIGHT_profile_post-op_044_DxO.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision/Left_oblique_pre-op_044_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_044_Secondary_rhinoplasty_and_revision/Left_oblique_post-op_044_DxO.jpg",
      },
    ],
  },
  {
    id: "case-027",
    procedureSlug: "rhinoplasty/secondary",
    category: "Rhinoplasty",
    procedure: "Secondary rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/04-_Secondary/Patient_053_Secondary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_053_Secondary_rhinoplasty/Front_view_pre-op_053.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_053_Secondary_rhinoplasty/Front_view_post-op_053.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_053_Secondary_rhinoplasty/Right_profile_pre-op_053.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_053_Secondary_rhinoplasty/Right_profile_post-op_053.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_053_Secondary_rhinoplasty/Right_oblique_pre-op_053.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_053_Secondary_rhinoplasty/Right_oblique_post-op_053.jpg",
      },
    ],
  },
  {
    id: "case-028",
    procedureSlug: "rhinoplasty/secondary",
    category: "Rhinoplasty",
    procedure: "Secondary rhinoplasty",
    consent: "confirmed",
    source: "01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK/Front_view_preop_098.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK/Front_view_six_weeks__098.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK/Left_profile_preop_098.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK/Left_Profile_six_weeks_098.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK/Left_oblique_preop_098.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK/Left_oblique_six_weeks_098.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK/Right_oblique_preop_098.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/04-_Secondary/Patient_098_Secondary_rib_graft_rhinoplasty_IG_OK/Right_oblique_six_weeks_098.jpg",
      },
    ],
  },
  {
    id: "case-029",
    procedureSlug: "rhinoplasty/ultrasonic",
    category: "Rhinoplasty",
    procedure: "Ultrasonic rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_007-_reduction_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_007-_reduction_rhinoplasty/Front_view_pre-op_007_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_007-_reduction_rhinoplasty/Front_view_post-op_007_DxO.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_007-_reduction_rhinoplasty/Left_profile_pre-op_007_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_007-_reduction_rhinoplasty/Left_profile_post-op_007_DxO.jpg",
      },
      {
        label: "Right semi-profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_007-_reduction_rhinoplasty/Right_semi-profile_pre-op_007_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_007-_reduction_rhinoplasty/Right_semi-profile_post-op_007_DxO.jpg",
      },
    ],
  },
  {
    id: "case-030",
    procedureSlug: "rhinoplasty/ultrasonic",
    category: "Rhinoplasty",
    procedure: "Ultrasonic rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_014_ultrasonic_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_014_ultrasonic_rhinoplasty/Front_view_pre-op_014_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_014_ultrasonic_rhinoplasty/Front_view_post-op_014_DxO.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_014_ultrasonic_rhinoplasty/Right_profile_pre-op_014_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_014_ultrasonic_rhinoplasty/Right_profile_post-op_014_DxO.jpg",
      },
    ],
  },
  {
    id: "case-031",
    procedureSlug: "rhinoplasty/ultrasonic",
    category: "Rhinoplasty",
    procedure: "Ultrasonic rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_022__Primary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_022__Primary_rhinoplasty/Front_view_preop_022_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_022__Primary_rhinoplasty/Front_view_postop_022_DxO.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_022__Primary_rhinoplasty/Left_profile__preop_022_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_022__Primary_rhinoplasty/Left_profile_post-op__022_DxO.jpg",
      },
    ],
  },
  {
    id: "case-032",
    procedureSlug: "rhinoplasty/ultrasonic",
    category: "Rhinoplasty",
    procedure: "Ultrasonic rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_028_Primary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_028_Primary_rhinoplasty/Front_view_pre-op_028_DxO.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_028_Primary_rhinoplasty/Front_view_post-op_028_DxO.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_028_Primary_rhinoplasty/Right_profile_pre-op_028_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_028_Primary_rhinoplasty/Right_profile_post-op_028_DxO.jpg",
      },
    ],
  },
  {
    id: "case-033",
    procedureSlug: "rhinoplasty/ultrasonic",
    category: "Rhinoplasty",
    procedure: "Ultrasonic rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_032_square",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_032_square/032_front_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_032_square/032_front_post.png",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_032_square/032_right_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_032_square/032_right_post.png",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_032_square/032_left_oblique_pre.png",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_032_square/032_left_oblique_post.jpeg",
      },
    ],
  },
  {
    id: "case-034",
    procedureSlug: "rhinoplasty/ultrasonic",
    category: "Rhinoplasty",
    procedure: "Ultrasonic rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Front_view_pre-op_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Front_view_post_op_DxO.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Left_profile_pre-op_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Left_profile_post-op_DxO.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Right_profile_pre-op_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/right_profile_post-op_DxO.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Left_oblique_pre-op_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Left_oblique_post-op_DxO.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Right_oblique_pre-op_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_034_Primary_rhinoplasty/Right_oblique_post-op_DxO.jpg",
      },
    ],
  },
  {
    id: "case-035",
    procedureSlug: "rhinoplasty/ultrasonic",
    category: "Rhinoplasty",
    procedure: "Ultrasonic rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_035_Primary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_035_Primary_rhinoplasty/Front_view_pre-op_035_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_035_Primary_rhinoplasty/Front_view_post-op_035_DxO.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_035_Primary_rhinoplasty/Right_profile_pre-op_035_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_035_Primary_rhinoplasty/Right_profile_post-op_035_DxO.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_035_Primary_rhinoplasty/Left_oblique__pre-op_035_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_035_Primary_rhinoplasty/left_oblique_post-op_035_DxO.jpg",
      },
    ],
  },
  {
    id: "case-036",
    procedureSlug: "rhinoplasty/ultrasonic",
    category: "Rhinoplasty",
    procedure: "Ultrasonic rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_046_Primary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_046_Primary_rhinoplasty/front_view_pre-op_DxO_046.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_046_Primary_rhinoplasty/Front_view__post-op_3_months_DxO_046.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_046_Primary_rhinoplasty/right_profile_pre-op_DxO_046.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_046_Primary_rhinoplasty/Right_profile_postop_3_months_DxO_046.jpg",
      },
    ],
  },
  {
    id: "case-037",
    procedureSlug: "rhinoplasty/ultrasonic",
    category: "Rhinoplasty",
    procedure: "Ultrasonic rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_049_Primary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_049_Primary_rhinoplasty/Front_view_pre-op_DxO_049.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_049_Primary_rhinoplasty/Front_view_6_weeks_DxO_049.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_049_Primary_rhinoplasty/Right_profile_pre-op_DxO_049.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_049_Primary_rhinoplasty/Right_profile_6_weeks_DxO_049.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_049_Primary_rhinoplasty/Left_oblique_pre-op_DxO_049.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_049_Primary_rhinoplasty/Left_oblique_6_weeks_DxO_049.jpg",
      },
    ],
  },
  {
    id: "case-038",
    procedureSlug: "rhinoplasty/ultrasonic",
    category: "Rhinoplasty",
    procedure: "Ultrasonic rhinoplasty",
    consent: "unconfirmed",
    source: "01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty/Front_before_066_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty/Front_after_066_DxO.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty/L_before_066_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty/L_after_066_DxO.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty/R_before_066_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty/R_after_066_DxO.jpg",
      },
      {
        label: "Oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty/R_oblique_before_066_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/01-_Rhinoplasty/05-_Ultrasonic/Patient_066-_Primary_rhinoplasty/R_oblique_after_066_DxO.jpg",
      },
    ],
  },
  {
    id: "case-039",
    procedureSlug: "facial-sculpting/chin-augmentation",
    category: "Facial sculpting",
    procedure: "Chin enhancement",
    consent: "unconfirmed",
    source: "02-_Facial_sculpting/01-_Chin_Enhancement_Ready/01_Patient_web_099_-_face,_sculpting",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/01_Patient_web_099_-_face%2C_sculpting/01__front_view_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/01_Patient_web_099_-_face%2C_sculpting/02-front_view_three_months.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/01_Patient_web_099_-_face%2C_sculpting/03_Left_profile_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/01_Patient_web_099_-_face%2C_sculpting/04-_left_profile_three_months.jpg",
      },
    ],
  },
  {
    id: "case-040",
    procedureSlug: "facial-sculpting/chin-augmentation",
    category: "Facial sculpting",
    procedure: "Chin enhancement",
    consent: "unconfirmed",
    source: "02-_Facial_sculpting/01-_Chin_Enhancement_Ready/02_Patient_019_new_|_web_074_-_nose",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/02_Patient_019_new_%7C_web_074_-_nose/05-_front_view_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/02_Patient_019_new_%7C_web_074_-_nose/06-_front_view_post-op.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/02_Patient_019_new_%7C_web_074_-_nose/01-_left_profile_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/02_Patient_019_new_%7C_web_074_-_nose/02-_left_profile_post-op.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/02_Patient_019_new_%7C_web_074_-_nose/03-left_oblique_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/02_Patient_019_new_%7C_web_074_-_nose/04-_left_oblique_post-op.jpg",
      },
    ],
  },
  {
    id: "case-041",
    procedureSlug: "facial-sculpting/chin-augmentation",
    category: "Facial sculpting",
    procedure: "Chin enhancement",
    consent: "unconfirmed",
    source:
      "02-_Facial_sculpting/01-_Chin_Enhancement_Ready/03_Patient_017_new_|_web_038_-_facelift,_neck_lift",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/03_Patient_017_new_%7C_web_038_-_facelift%2C_neck_lift/05-front_view_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/03_Patient_017_new_%7C_web_038_-_facelift%2C_neck_lift/06-front_view_postop.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/03_Patient_017_new_%7C_web_038_-_facelift%2C_neck_lift/03-left_profile_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/03_Patient_017_new_%7C_web_038_-_facelift%2C_neck_lift/04-left_profile_postop.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/03_Patient_017_new_%7C_web_038_-_facelift%2C_neck_lift/01__left_oblique_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/03_Patient_017_new_%7C_web_038_-_facelift%2C_neck_lift/02-left_oblique_postop.jpg",
      },
    ],
  },
  {
    id: "case-042",
    procedureSlug: "facial-sculpting/chin-augmentation",
    category: "Facial sculpting",
    procedure: "Chin enhancement",
    consent: "unconfirmed",
    source: "02-_Facial_sculpting/01-_Chin_Enhancement_Ready/04_Patient_072_old-_Anterior_necklift",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/04_Patient_072_old-_Anterior_necklift/05-front_view_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/04_Patient_072_old-_Anterior_necklift/06-front_view_postop.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/04_Patient_072_old-_Anterior_necklift/01-left_profile_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/04_Patient_072_old-_Anterior_necklift/02-left_profile_postop.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/04_Patient_072_old-_Anterior_necklift/03-left_oblique-preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/04_Patient_072_old-_Anterior_necklift/04-left_oblique_Post_op.jpg",
      },
    ],
  },
  {
    id: "case-043",
    procedureSlug: "facial-sculpting/chin-augmentation",
    category: "Facial sculpting",
    procedure: "Chin enhancement",
    consent: "unconfirmed",
    source: "02-_Facial_sculpting/01-_Chin_Enhancement_Ready/05_Patient_131_old_anterior_neck_lift",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/05_Patient_131_old_anterior_neck_lift/05_front_view_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/05_Patient_131_old_anterior_neck_lift/06-_front_view_postop.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/05_Patient_131_old_anterior_neck_lift/03-Left_profile_preop_copy.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/05_Patient_131_old_anterior_neck_lift/06-left_profile_postop.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/05_Patient_131_old_anterior_neck_lift/01-Left_oblique_preop_copy.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/05_Patient_131_old_anterior_neck_lift/02-left_oblique_post_op.jpg",
      },
    ],
  },
  {
    id: "case-044",
    procedureSlug: "facial-sculpting/chin-augmentation",
    category: "Facial sculpting",
    procedure: "Chin enhancement",
    consent: "unconfirmed",
    source:
      "02-_Facial_sculpting/01-_Chin_Enhancement_Ready/06_Patient_042_Primary_rhinoplasty_and_chin_reduction",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/06_Patient_042_Primary_rhinoplasty_and_chin_reduction/05_front_view_pre-op_042_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/06_Patient_042_Primary_rhinoplasty_and_chin_reduction/06_Front_view_2_years_DxO_042.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/06_Patient_042_Primary_rhinoplasty_and_chin_reduction/03_Left_profile_pre-op_042_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/06_Patient_042_Primary_rhinoplasty_and_chin_reduction/04_Left_profile_view_post-op_042_DxO.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/06_Patient_042_Primary_rhinoplasty_and_chin_reduction/01_Right_profile_pre-op_042_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/01-_Chin_Enhancement_Ready/06_Patient_042_Primary_rhinoplasty_and_chin_reduction/02_right_profile_post-op_042_DxO.jpg",
      },
    ],
  },
  {
    id: "case-045",
    procedureSlug: "facial-sculpting/anterior-neck-lift",
    category: "Facial sculpting",
    procedure: "Anterior neck lift",
    consent: "unconfirmed",
    source:
      "02-_Facial_sculpting/02-_Anterior_necklift_Ready/01_Patient__|_web_084_Anterior_necklift",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/01_Patient__%7C_web_084_Anterior_necklift/01_Front_view_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/01_Patient__%7C_web_084_Anterior_necklift/02_Front_view_13_years_copy.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/01_Patient__%7C_web_084_Anterior_necklift/03_Left_profile_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/01_Patient__%7C_web_084_Anterior_necklift/04_Left_profile_13_years_copy.jpg",
      },
    ],
  },
  {
    id: "case-046",
    procedureSlug: "facial-sculpting/anterior-neck-lift",
    category: "Facial sculpting",
    procedure: "Anterior neck lift",
    consent: "unconfirmed",
    source: "02-_Facial_sculpting/02-_Anterior_necklift_Ready/02_Patient_075_anterior_neck_lift",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/02_Patient_075_anterior_neck_lift/03_Front_view_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/02_Patient_075_anterior_neck_lift/04_Front_view_postop.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/02_Patient_075_anterior_neck_lift/01_left_profile_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/02_Patient_075_anterior_neck_lift/02_left_profile_postop.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/02_Patient_075_anterior_neck_lift/05_right_profile_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/02_Patient_075_anterior_neck_lift/06__right_profile_post.jpg",
      },
    ],
  },
  {
    id: "case-047",
    procedureSlug: "facial-sculpting/anterior-neck-lift",
    category: "Facial sculpting",
    procedure: "Anterior neck lift",
    consent: "confirmed",
    source:
      "02-_Facial_sculpting/02-_Anterior_necklift_Ready/03_Patient_132_-_Sec_rhinoplasty_and_necklift_IG_OK",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/03_Patient_132_-_Sec_rhinoplasty_and_necklift_IG_OK/05_Front_view_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/03_Patient_132_-_Sec_rhinoplasty_and_necklift_IG_OK/06_Front_view_1_year.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/03_Patient_132_-_Sec_rhinoplasty_and_necklift_IG_OK/01__right_profile_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/03_Patient_132_-_Sec_rhinoplasty_and_necklift_IG_OK/02_Right_profile_1_year.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/03_Patient_132_-_Sec_rhinoplasty_and_necklift_IG_OK/03_Right_oblique_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/03_Patient_132_-_Sec_rhinoplasty_and_necklift_IG_OK/04_Right_oblique_1_year.jpg",
      },
    ],
  },
  {
    id: "case-048",
    procedureSlug: "facial-sculpting/anterior-neck-lift",
    category: "Facial sculpting",
    procedure: "Anterior neck lift",
    consent: "unconfirmed",
    source: "02-_Facial_sculpting/02-_Anterior_necklift_Ready/04_Patient_137__anterior_neck_lift",
    views: [
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/04_Patient_137__anterior_neck_lift/1a.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/04_Patient_137__anterior_neck_lift/1b.jpg",
      },
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/04_Patient_137__anterior_neck_lift/2a.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/04_Patient_137__anterior_neck_lift/2b.jpg",
      },
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/04_Patient_137__anterior_neck_lift/3a.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/04_Patient_137__anterior_neck_lift/3b.jpg",
      },
    ],
  },
  {
    id: "case-049",
    procedureSlug: "facial-sculpting/anterior-neck-lift",
    category: "Facial sculpting",
    procedure: "Anterior neck lift",
    consent: "confirmed",
    source:
      "02-_Facial_sculpting/02-_Anterior_necklift_Ready/05_Patient_073_Anterior_necklift_-_IG-ok",
    views: [
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/05_Patient_073_Anterior_necklift_-_IG-ok/3_Left_profile_neck_flexion_preoperative_DxO_073.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/05_Patient_073_Anterior_necklift_-_IG-ok/4_Left_profile_neck_flexion_one_year_DxO_073.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/05_Patient_073_Anterior_necklift_-_IG-ok/1_Right_profile_preoperative_DxO_073.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/05_Patient_073_Anterior_necklift_-_IG-ok/2_Right_profile_one_year_DxO_073.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/05_Patient_073_Anterior_necklift_-_IG-ok/5_Left_oblique_preoperative_DxO_073.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/05_Patient_073_Anterior_necklift_-_IG-ok/6_Left_oblique_one_year_DxO_073.jpg",
      },
    ],
  },
  {
    id: "case-050",
    procedureSlug: "facial-sculpting/anterior-neck-lift",
    category: "Facial sculpting",
    procedure: "Anterior neck lift",
    consent: "unconfirmed",
    source: "02-_Facial_sculpting/02-_Anterior_necklift_Ready/06_Patient_131_anterior_neck_lift",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/06_Patient_131_anterior_neck_lift/05_front_view_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/06_Patient_131_anterior_neck_lift/06-_front_view_postop.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/06_Patient_131_anterior_neck_lift/03-Left_profile_preop_copy.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/06_Patient_131_anterior_neck_lift/06-left_profile_postop.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/06_Patient_131_anterior_neck_lift/01-Left_oblique_preop_copy.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/06_Patient_131_anterior_neck_lift/02-left_oblique_post_op.jpg",
      },
    ],
  },
  {
    id: "case-051",
    procedureSlug: "facial-sculpting/anterior-neck-lift",
    category: "Facial sculpting",
    procedure: "Anterior neck lift",
    consent: "unconfirmed",
    source: "02-_Facial_sculpting/02-_Anterior_necklift_Ready/07_Patient_190",
    views: [
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/07_Patient_190/1a.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/07_Patient_190/1b.jpg",
      },
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/07_Patient_190/2a.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/02-_Anterior_necklift_Ready/07_Patient_190/2b.jpg",
      },
    ],
  },
  {
    id: "case-052",
    procedureSlug: "facial-sculpting/buccal-fat-reduction",
    category: "Facial sculpting",
    procedure: "Buccal fat reduction",
    consent: "unconfirmed",
    source: "02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/1_Patient_144_old",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/1_Patient_144_old/01_Pre-op_front_view.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/1_Patient_144_old/02_Post-op_front_view.jpg",
      },
      {
        label: "Profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/1_Patient_144_old/03_Semi-profile_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/1_Patient_144_old/04_Semi-profile_post-op.jpg",
      },
    ],
  },
  {
    id: "case-053",
    procedureSlug: "facial-sculpting/buccal-fat-reduction",
    category: "Facial sculpting",
    procedure: "Buccal fat reduction",
    consent: "unconfirmed",
    source:
      "02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/2_Patient_web_028_-_facelift,_neck_lift",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/2_Patient_web_028_-_facelift%2C_neck_lift/01_Front_view_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/2_Patient_web_028_-_facelift%2C_neck_lift/02_front_view_post-op.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/2_Patient_web_028_-_facelift%2C_neck_lift/03-Left_oblique_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/03-_Buccal_fat_reduction__Ready/2_Patient_web_028_-_facelift%2C_neck_lift/04_left_oblique_post-op.jpg",
      },
    ],
  },
  {
    id: "case-054",
    procedureSlug: "facial-sculpting/fat-transfer",
    category: "Facial sculpting",
    procedure: "Fat transfer",
    consent: "unconfirmed",
    source: "02-_Facial_sculpting/04-_Fat_transfer_Ready/02_Patient_web_099_-_face,_sculpting",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/02_Patient_web_099_-_face%2C_sculpting/01__front_view_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/02_Patient_web_099_-_face%2C_sculpting/02-front_view_three_months.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/02_Patient_web_099_-_face%2C_sculpting/03_Left_profile_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/02_Patient_web_099_-_face%2C_sculpting/04-_left_profile_three_months.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/02_Patient_web_099_-_face%2C_sculpting/05_Left_oblique_pre-op_02.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/02_Patient_web_099_-_face%2C_sculpting/06_Left_oblique_three_months.jpg",
      },
    ],
  },
  {
    id: "case-055",
    procedureSlug: "facial-sculpting/fat-transfer",
    category: "Facial sculpting",
    procedure: "Fat transfer",
    consent: "unconfirmed",
    source: "02-_Facial_sculpting/04-_Fat_transfer_Ready/03_Patient_|_web_109_-_nose,_fat_transfer",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/03_Patient_%7C_web_109_-_nose%2C_fat_transfer/01_Front_view_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/03_Patient_%7C_web_109_-_nose%2C_fat_transfer/02-_front_vire_post-op.jpg",
      },
    ],
  },
  {
    id: "case-056",
    procedureSlug: "facial-sculpting/fat-transfer",
    category: "Facial sculpting",
    procedure: "Fat transfer",
    consent: "unconfirmed",
    source:
      "02-_Facial_sculpting/04-_Fat_transfer_Ready/04_Patient_web_112_-_facelift,_neck_lift,_fat_transfer,_blepahroplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/01_front_view_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/02_Front_view_post-op.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/03_Left_profile_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_Left_profile_post-op.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/05_Right_oblique_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/04-_Fat_transfer_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/06_Right_oblique_post_op.jpg",
      },
    ],
  },
  {
    id: "case-057",
    procedureSlug: "facial-sculpting/facial-liposuction",
    category: "Facial sculpting",
    procedure: "Facial liposuction",
    consent: "unconfirmed",
    source: "02-_Facial_sculpting/05-_Facial_liposuction__Ready/1_Patient_144_old",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/05-_Facial_liposuction__Ready/1_Patient_144_old/1-front-pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/05-_Facial_liposuction__Ready/1_Patient_144_old/02_Post-op_front_view.jpg",
      },
      {
        label: "Profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/05-_Facial_liposuction__Ready/1_Patient_144_old/03_Semi-profile_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/05-_Facial_liposuction__Ready/1_Patient_144_old/04_Semi-profile_post-op.jpg",
      },
    ],
  },
  {
    id: "case-058",
    procedureSlug: "facial-sculpting/otoplasty-pinnaplasty",
    category: "Facial sculpting",
    procedure: "Otoplasty / pinnaplasty",
    consent: "unconfirmed",
    source: "02-_Facial_sculpting/07-_Otoplasty_Ready/Patient_091_Secondary_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/07-_Otoplasty_Ready/Patient_091_Secondary_rhinoplasty/01_front_view_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/02-_Facial_sculpting/07-_Otoplasty_Ready/Patient_091_Secondary_rhinoplasty/02_front_view_postop.jpg",
      },
    ],
  },
  {
    id: "case-059",
    procedureSlug: "face-rejuvenation/facelift",
    category: "Face rejuvenation",
    procedure: "Facelift (deep plane)",
    consent: "unconfirmed",
    source:
      "03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift,_rhinoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift%2C_rhinoplasty/01_03_front_bef.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift%2C_rhinoplasty/01_04_front_post.jpg",
      },
      {
        label: "Oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift%2C_rhinoplasty/01_01_oblique_bef.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift%2C_rhinoplasty/01_02_oblique_post.jpg",
      },
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift%2C_rhinoplasty/01_05_side_bef.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift%2C_rhinoplasty/01_06_side_post.jpg",
      },
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift%2C_rhinoplasty/01_07_side_down_bef.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/01_Patient_124_facelift_and_necklift%2C_rhinoplasty/01_08_side_down_post.jpg",
      },
    ],
  },
  {
    id: "case-060",
    procedureSlug: "face-rejuvenation/facelift",
    category: "Face rejuvenation",
    procedure: "Facelift (deep plane)",
    consent: "restricted",
    source:
      "03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG/02_01_Front_bef.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG/02_02_Front_post.jpg",
      },
      {
        label: "Oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG/02_03_oblique_bef.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG/02_04_oblique_post.jpg",
      },
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG/02_05_side_bef.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG/02_06_side_post.jpg",
      },
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG/02_07_side_down_bef.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/02_Patient_087_Facelift-necklift_NO_IG/02_08_side_down_post.jpg",
      },
    ],
  },
  {
    id: "case-061",
    procedureSlug: "face-rejuvenation/facelift",
    category: "Face rejuvenation",
    procedure: "Facelift (deep plane)",
    consent: "restricted",
    source:
      "03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/03_Patient_111_facelift-neck_lift_-temporal_lift__NO_IG",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/03_Patient_111_facelift-neck_lift_-temporal_lift__NO_IG/03_03_front_bef.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/03_Patient_111_facelift-neck_lift_-temporal_lift__NO_IG/03_04_front_post.jpg",
      },
      {
        label: "Oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/03_Patient_111_facelift-neck_lift_-temporal_lift__NO_IG/03_01_oblique_bef.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/03_Patient_111_facelift-neck_lift_-temporal_lift__NO_IG/03_02_oblique_post.jpg",
      },
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/03_Patient_111_facelift-neck_lift_-temporal_lift__NO_IG/03_05_side_bef.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/03_Patient_111_facelift-neck_lift_-temporal_lift__NO_IG/03_06_side_post.jpg",
      },
    ],
  },
  {
    id: "case-062",
    procedureSlug: "face-rejuvenation/facelift",
    category: "Face rejuvenation",
    procedure: "Facelift (deep plane)",
    consent: "confirmed",
    source:
      "03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/04_Patient_110_Facelift_and_Neck_lift_IG_OK",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/04_Patient_110_Facelift_and_Neck_lift_IG_OK/04_01_Front_view_pre-op_110.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/04_Patient_110_Facelift_and_Neck_lift_IG_OK/04_02_Front_view_post-op_110.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/04_Patient_110_Facelift_and_Neck_lift_IG_OK/04_05_Right_profile_pre-op_110.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/04_Patient_110_Facelift_and_Neck_lift_IG_OK/04_06_Right_profile_postop_110.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/04_Patient_110_Facelift_and_Neck_lift_IG_OK/04_03_Right_Oblique_pre-op_110.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/04_Patient_110_Facelift_and_Neck_lift_IG_OK/04_04_Right_oblique._Postop_110.jpg",
      },
    ],
  },
  {
    id: "case-063",
    procedureSlug: "face-rejuvenation/facelift",
    category: "Face rejuvenation",
    procedure: "Facelift (deep plane)",
    consent: "unconfirmed",
    source:
      "03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new _215_old_Facelift_and_neck_lift",
    views: [
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new%20_215_old_Facelift_and_neck_lift/05_1a.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new%20_215_old_Facelift_and_neck_lift/05_1b.jpg",
      },
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new%20_215_old_Facelift_and_neck_lift/05_2a.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new%20_215_old_Facelift_and_neck_lift/05_2b.jpg",
      },
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new%20_215_old_Facelift_and_neck_lift/05_3a.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new%20_215_old_Facelift_and_neck_lift/05_3b.jpg",
      },
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new%20_215_old_Facelift_and_neck_lift/05_4a.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/05_Patient_056_new%20_215_old_Facelift_and_neck_lift/05_4b.jpg",
      },
    ],
  },
  {
    id: "case-064",
    procedureSlug: "face-rejuvenation/facelift",
    category: "Face rejuvenation",
    procedure: "Facelift (deep plane)",
    consent: "confirmed",
    source:
      "03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/06_Patient_093_Facelift_and_neck_lift_IG_OK",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/06_Patient_093_Facelift_and_neck_lift_IG_OK/06_03_Front_view_pre-op_093.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/06_Patient_093_Facelift_and_neck_lift_IG_OK/06_04-_front_view_postop.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/06_Patient_093_Facelift_and_neck_lift_IG_OK/06_05_Right_profile_pre-op_093.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/06_Patient_093_Facelift_and_neck_lift_IG_OK/06_06-_Right_profile_post_op.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/06_Patient_093_Facelift_and_neck_lift_IG_OK/06_01_Right_oblique_pre-op_b_093.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/06_Patient_093_Facelift_and_neck_lift_IG_OK/06_02__right_oblique_postop.jpg",
      },
    ],
  },
  {
    id: "case-065",
    procedureSlug: "face-rejuvenation/facelift",
    category: "Face rejuvenation",
    procedure: "Facelift (deep plane)",
    consent: "confirmed",
    source:
      "03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_03_Front_view_pre-op_094.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_04_Front_view_9_months_094.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_07_Right_profile_pre-op_094.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_08_Right_profile_9_months_094.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_09_Right_profile_neck_flexion_pre-op_094.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_10_Right_profile_neck_flexion_5_months_094.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_05_Left_oblique_pre-op_094.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_06_Left_oblique_9_months_094.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_01_Right_oblique_pre-op_094.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/07_Patient_094_Facelift_and_neck_lift_IG_OK/07_02_Right_oblique_5_months_094.jpg",
      },
    ],
  },
  {
    id: "case-066",
    procedureSlug: "face-rejuvenation/facelift",
    category: "Face rejuvenation",
    procedure: "Facelift (deep plane)",
    consent: "confirmed",
    source:
      "03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/09_Patient_102_Facelift_and_Neck_lift__IG_OK",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/09_Patient_102_Facelift_and_Neck_lift__IG_OK/09_03_Front_view_preoperative_102.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/09_Patient_102_Facelift_and_Neck_lift__IG_OK/09_04_Front_view_six_months_102.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/09_Patient_102_Facelift_and_Neck_lift__IG_OK/09_07_Right_profile_preoperative_102.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/09_Patient_102_Facelift_and_Neck_lift__IG_OK/09_08_Right_profile_6_months._102.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/09_Patient_102_Facelift_and_Neck_lift__IG_OK/09_01_Left_oblique_preoperative_102.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/01-_Deep_plane_facelift__Ready/09_Patient_102_Facelift_and_Neck_lift__IG_OK/09_02_Left_oblique_six_months_102.jpg",
      },
    ],
  },
  {
    id: "case-067",
    procedureSlug: "face-rejuvenation/short-scar-facelift",
    category: "Face rejuvenation",
    procedure: "Short scar facelift",
    consent: "unconfirmed",
    source:
      "03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/01_Patient_216_old_043_new_Short_Scar_Facelift",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/01_Patient_216_old_043_new_Short_Scar_Facelift/01_01_Front_pre-op__43.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/01_Patient_216_old_043_new_Short_Scar_Facelift/01_02_Front_view_post-op__043.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/01_Patient_216_old_043_new_Short_Scar_Facelift/01_05_Right_profile_pre-op__043.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/01_Patient_216_old_043_new_Short_Scar_Facelift/01_06_Right_profile_post-op__043.jpg",
      },
    ],
  },
  {
    id: "case-068",
    procedureSlug: "face-rejuvenation/short-scar-facelift",
    category: "Face rejuvenation",
    procedure: "Short scar facelift",
    consent: "unconfirmed",
    source:
      "03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/02_Patient_web_099_-_face,_sculpting",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/02_Patient_web_099_-_face%2C_sculpting/02_01__front_view_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/02_Patient_web_099_-_face%2C_sculpting/02_02-front_view_three_months.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/02_Patient_web_099_-_face%2C_sculpting/02_03_Left_profile_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/02_Patient_web_099_-_face%2C_sculpting/02_04-_left_profile_three_months.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/02_Patient_web_099_-_face%2C_sculpting/02_05_Left_oblique_pre-op_02.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/02-_Short_scar_facelift__Ready/02_Patient_web_099_-_face%2C_sculpting/02_06_Left_oblique_three_months.jpg",
      },
    ],
  },
  {
    id: "case-069",
    procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
    category: "Face rejuvenation",
    procedure: "Deep plane neck lift",
    consent: "unconfirmed",
    source:
      "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_/01_03_Front_view_pre-op_106.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_/01_04_Front_view_2_months_106.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_/01_07_Left_profile_pre-op_106.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_/01_08_Left_profile_2_months_106.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_/01_01_Left_oblique_pre-op_106.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_/01_02_Left_oblique_2_months_106.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_/01_05_Right_oblique_pre-op_106.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/01_Patient_106_Neck_Lift_deep_plane_/01_06_Right_oblique_2_months_106.jpg",
      },
    ],
  },
  {
    id: "case-070",
    procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
    category: "Face rejuvenation",
    procedure: "Deep plane neck lift",
    consent: "restricted",
    source:
      "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG/02_01_Front_view_pre-op_087.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG/02_02_Front_view_2_months_02_087.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG/02_05_Left_profile_pre-op_087.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG/02_06_Left_profile_2_months_087.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG/02_07_Left_profile_neck_flexion_pre-op_087.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG/02_08_Left_profile_neck_flexion_2_months_087.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG/02_03_Right_oblique_pre-op_087.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/02_Patient_087_Facelift-necklift_NO_IG/02_04_Right_oblique_2_months_087.jpg",
      },
    ],
  },
  {
    id: "case-071",
    procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
    category: "Face rejuvenation",
    procedure: "Deep plane neck lift",
    consent: "unconfirmed",
    source: "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift/03_05_Front_view_pre-op_097.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift/03_06_Front_view_04_months_097.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift/03_01_Left_profile_pre-op_097.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift/03_02_Left_profile_04_months_097.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift/03_07_Right_profile_neck_flexation_pre-op_097.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift/03_08_Right_profile_neck_flexion_04_months_097.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift/03_03_Right_oblique_pre-op_097.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/03_Patient_097_Neck_lift/03_04_Right_oblique_04_months_097.jpg",
      },
    ],
  },
  {
    id: "case-072",
    procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
    category: "Face rejuvenation",
    procedure: "Deep plane neck lift",
    consent: "unconfirmed",
    source:
      "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/04_Patient_web_112_-_facelift,_neck_lift,_fat_transfer,_blepahroplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_01_front_view_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_02_Front_view_post-op.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_03_Left_profile_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_04_Left_profile_post-op.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_05_Right_oblique_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_06_Right_oblique_post_op.jpg",
      },
    ],
  },
  {
    id: "case-073",
    procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
    category: "Face rejuvenation",
    procedure: "Deep plane neck lift",
    consent: "unconfirmed",
    source:
      "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/05_Patient_web_028_-_facelift,_neck_lift",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/05_Patient_web_028_-_facelift%2C_neck_lift/05_01_Front_view_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/05_Patient_web_028_-_facelift%2C_neck_lift/05_02_front_view_post-op.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/05_Patient_web_028_-_facelift%2C_neck_lift/05_03-Left_oblique_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/05_Patient_web_028_-_facelift%2C_neck_lift/05_04_left_oblique_post-op.jpg",
      },
    ],
  },
  {
    id: "case-074",
    procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
    category: "Face rejuvenation",
    procedure: "Deep plane neck lift",
    consent: "unconfirmed",
    source:
      "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/06_Patient_006_Necklift_Patient",
    views: [
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/06_Patient_006_Necklift_Patient/06_1a.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/06_Patient_006_Necklift_Patient/06_1b.jpg",
      },
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/06_Patient_006_Necklift_Patient/06_2a.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/06_Patient_006_Necklift_Patient/06_2b.jpg",
      },
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/06_Patient_006_Necklift_Patient/06_3a.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/06_Patient_006_Necklift_Patient/06_3b.jpg",
      },
    ],
  },
  {
    id: "case-075",
    procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
    category: "Face rejuvenation",
    procedure: "Deep plane neck lift",
    consent: "confirmed",
    source:
      "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK/07_03_Front_view_preoperative_102.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK/07_04_Front_view_six_months_102.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK/07_05_Right_Profile_Neck_Flexion_Preoperative_102.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK/07_06_Right_profile%2C_neck_flexion%2C_3_months._102.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK/07_07_Right_profile_preoperative_102.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK/07_08_Right_profile_6_months._102.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK/07_01_Left_oblique_preoperative_102.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/07_Patient_102_Facelift_and_Neck_lift__IG_OK/07_02_Left_oblique_six_months_102.jpg",
      },
    ],
  },
  {
    id: "case-076",
    procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
    category: "Face rejuvenation",
    procedure: "Deep plane neck lift",
    consent: "unconfirmed",
    source: "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/08_Patient_041_Necklift",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/08_Patient_041_Necklift/08_Front_pre-op_041_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/08_Patient_041_Necklift/08_Front_post-op_041_DxO.jpg",
      },
    ],
  },
  {
    id: "case-077",
    procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
    category: "Face rejuvenation",
    procedure: "Deep plane neck lift",
    consent: "unconfirmed",
    source:
      "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift/09_03_Front_view_preop_DxO_056.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift/09_04_Front_view_three_months_DxO_056.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift/09_05_Left_profile_preop__DxO_056.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift/09_06Left_profile_three_months_DxO_056.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift/09_07__Left_profile_preop_DxO_056.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift/09_08_Left_profile_three_months_neck_flexion_DxO_056.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift/09_01_Left_oblique_preop_DxO_056.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/09_Patient_215_old_056_new_Facelift_and_neck_lift/09_02_Left_oblique_three_months_DxO_056.jpg",
      },
    ],
  },
  {
    id: "case-078",
    procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
    category: "Face rejuvenation",
    procedure: "Deep plane neck lift",
    consent: "restricted",
    source:
      "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/10_Patient_069_Neck_lift_-_NO_IG",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/10_Patient_069_Neck_lift_-_NO_IG/10_07_Front_before_069_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/10_Patient_069_Neck_lift_-_NO_IG/10_08_Front_after_069_DxO.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/10_Patient_069_Neck_lift_-_NO_IG/10_03_L_down_before_069_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/10_Patient_069_Neck_lift_-_NO_IG/10_04_L_down_after_069_DxO.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/10_Patient_069_Neck_lift_-_NO_IG/10_01_R_before_069_DxO.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/10_Patient_069_Neck_lift_-_NO_IG/10_02_R_after_069_DxO.jpg",
      },
    ],
  },
  {
    id: "case-079",
    procedureSlug: "face-rejuvenation/deep-plane-neck-lift",
    category: "Face rejuvenation",
    procedure: "Deep plane neck lift",
    consent: "unconfirmed",
    source: "03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/11_Patient_web_085_-_face",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/11_Patient_web_085_-_face/11_03_Front_view_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/03-_Deep_Plane_Neck_lift_Ready/11_Patient_web_085_-_face/11_04_Front_view_post-op.jpg",
      },
    ],
  },
  {
    id: "case-080",
    procedureSlug: "face-rejuvenation/brow-forehead-lift",
    category: "Face rejuvenation",
    procedure: "Brow lift",
    consent: "restricted",
    source:
      "03-_Face_rejuvenation_Ready/04-_Brow_lift_,_Temporal_lift_ready/01_Patient_111_facelift_neck_lift_temporal_lift__NO_IG",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/01_Patient_111_facelift_neck_lift_temporal_lift__NO_IG/01_03-front_view_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/01_Patient_111_facelift_neck_lift_temporal_lift__NO_IG/01_04_-front_view_postop.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/01_Patient_111_facelift_neck_lift_temporal_lift__NO_IG/01_05-left_profile_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/01_Patient_111_facelift_neck_lift_temporal_lift__NO_IG/01_06-left_profile_postop.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/01_Patient_111_facelift_neck_lift_temporal_lift__NO_IG/01_01-_Right_oblique_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/01_Patient_111_facelift_neck_lift_temporal_lift__NO_IG/01_02-right_oblique_postop.jpg",
      },
    ],
  },
  {
    id: "case-081",
    procedureSlug: "face-rejuvenation/brow-forehead-lift",
    category: "Face rejuvenation",
    procedure: "Brow lift",
    consent: "unconfirmed",
    source:
      "03-_Face_rejuvenation_Ready/04-_Brow_lift_,_Temporal_lift_ready/02_Patient 119_new_facelift_and_neck_lift_and_temporal_lift",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/02_Patient%20119_new_facelift_and_neck_lift_and_temporal_lift/02_03_Front_view_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/02_Patient%20119_new_facelift_and_neck_lift_and_temporal_lift/02_04__front_view_postop.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/02_Patient%20119_new_facelift_and_neck_lift_and_temporal_lift/02_05_left_oblique_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/02_Patient%20119_new_facelift_and_neck_lift_and_temporal_lift/02_06_Left_oblique_post-op.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/02_Patient%20119_new_facelift_and_neck_lift_and_temporal_lift/02_01_right_oblique_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/02_Patient%20119_new_facelift_and_neck_lift_and_temporal_lift/02_02_right_oblique_post-op.jpg",
      },
    ],
  },
  {
    id: "case-082",
    procedureSlug: "face-rejuvenation/brow-forehead-lift",
    category: "Face rejuvenation",
    procedure: "Brow lift",
    consent: "unconfirmed",
    source:
      "03-_Face_rejuvenation_Ready/04-_Brow_lift_,_Temporal_lift_ready/03_Patient_087_facelift-necklift-temporal_lift",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/03_Patient_087_facelift-necklift-temporal_lift/03_01_front_view_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/03_Patient_087_facelift-necklift-temporal_lift/03_02_frontview_postop.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/03_Patient_087_facelift-necklift-temporal_lift/03_03_Left_oblique_preop.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/04-_Brow_lift_%2C_Temporal_lift_ready/03_Patient_087_facelift-necklift-temporal_lift/03_04_left_oblique_post-op.jpg",
      },
    ],
  },
  {
    id: "case-083",
    procedureSlug: "face-rejuvenation/blepharoplasty",
    category: "Face rejuvenation",
    procedure: "Blepharoplasty",
    consent: "unconfirmed",
    source: "03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/02_Patient_web_095_-_nose,_eyes",
    views: [
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/02_Patient_web_095_-_nose%2C_eyes/02_1a.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/02_Patient_web_095_-_nose%2C_eyes/02_1b.jpg",
      },
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/02_Patient_web_095_-_nose%2C_eyes/02_2a.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/02_Patient_web_095_-_nose%2C_eyes/02_2b.jpg",
      },
    ],
  },
  {
    id: "case-084",
    procedureSlug: "face-rejuvenation/blepharoplasty",
    category: "Face rejuvenation",
    procedure: "Blepharoplasty",
    consent: "unconfirmed",
    source:
      "03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/03_Patient_web_117_-_nose- blepharoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/03_Patient_web_117_-_nose-%20blepharoplasty/03_01-_front_view_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/03_Patient_web_117_-_nose-%20blepharoplasty/03_02-_Front_view_post-op.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/03_Patient_web_117_-_nose-%20blepharoplasty/03_03_left_profile_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/03_Patient_web_117_-_nose-%20blepharoplasty/03_04__Left_profile_post-op.jpg",
      },
    ],
  },
  {
    id: "case-085",
    procedureSlug: "face-rejuvenation/blepharoplasty",
    category: "Face rejuvenation",
    procedure: "Blepharoplasty",
    consent: "unconfirmed",
    source:
      "03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/04_Patient_web_112_-_facelift,_neck_lift,_fat_transfer,_blepahroplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_01_front_view_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_02_Front_view_post-op.jpg",
      },
      {
        label: "Right oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_03_Right_oblique_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/04_Patient_web_112_-_facelift%2C_neck_lift%2C_fat_transfer%2C_blepahroplasty/04_04_Right_oblique_post_op.jpg",
      },
    ],
  },
  {
    id: "case-086",
    procedureSlug: "face-rejuvenation/blepharoplasty",
    category: "Face rejuvenation",
    procedure: "Blepharoplasty",
    consent: "unconfirmed",
    source:
      "03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/05_Patient_147_old_Blepharoplasty",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/05_Patient_147_old_Blepharoplasty/05_01-_front_view_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/05_Patient_147_old_Blepharoplasty/05_02-_front_view_post-op.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/05_Patient_147_old_Blepharoplasty/05_05-_left_profile_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/05_Patient_147_old_Blepharoplasty/05_06-_left_profile_postop.jpg",
      },
      {
        label: "Left oblique",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/05_Patient_147_old_Blepharoplasty/05_03-_left_oblique_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/05_Patient_147_old_Blepharoplasty/05_04-_left_oblique_post-op.jpg",
      },
    ],
  },
  {
    id: "case-087",
    procedureSlug: "face-rejuvenation/blepharoplasty",
    category: "Face rejuvenation",
    procedure: "Blepharoplasty",
    consent: "unconfirmed",
    source: "03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/07_Patient_web_082_-_eyes",
    views: [
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/07_Patient_web_082_-_eyes/07_01_pre-op.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/07_Patient_web_082_-_eyes/07_02_post-op.jpg",
      },
    ],
  },
  {
    id: "case-088",
    procedureSlug: "face-rejuvenation/blepharoplasty",
    category: "Face rejuvenation",
    procedure: "Blepharoplasty",
    consent: "unconfirmed",
    source: "03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/08_Patient_123_new",
    views: [
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/08_Patient_123_new/08_1a.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/08_Patient_123_new/08_1b.jpg",
      },
      {
        label: "View",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/08_Patient_123_new/08_2a.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/03-_Face_rejuvenation_Ready/05-_Blepharoplasty_Ready/08_Patient_123_new/08_2b.jpg",
      },
    ],
  },
  {
    id: "case-089",
    procedureSlug: "breast-surgery/augmentation",
    category: "Breast surgery",
    procedure: "Breast augmentation",
    consent: "unconfirmed",
    source: "04-Breast_Surgery/01-Augmentation/Patient_1",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/1_front_pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/1_front_post.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/1_left_pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/1_left_post.jpg",
      },
    ],
  },
  {
    id: "case-090",
    procedureSlug: "breast-surgery/augmentation",
    category: "Breast surgery",
    procedure: "Breast augmentation",
    consent: "unconfirmed",
    source: "04-Breast_Surgery/01-Augmentation/Patient_2",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/2_front_pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/2_front_post.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/2_left_pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/2_left_post.jpg",
      },
    ],
  },
  {
    id: "case-091",
    procedureSlug: "breast-surgery/augmentation",
    category: "Breast surgery",
    procedure: "Breast augmentation",
    consent: "unconfirmed",
    source: "04-Breast_Surgery/01-Augmentation/Patient_3",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/3_front_pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/3_front_post.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/3_left_pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/3_left_post.jpg",
      },
    ],
  },
  {
    id: "case-092",
    procedureSlug: "breast-surgery/augmentation",
    category: "Breast surgery",
    procedure: "Breast augmentation",
    consent: "unconfirmed",
    source: "04-Breast_Surgery/01-Augmentation/Patient_4",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/4_front_pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/4_front_post.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/4_left_pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/4_left_post.jpg",
      },
    ],
  },
  {
    id: "case-093",
    procedureSlug: "breast-surgery/augmentation",
    category: "Breast surgery",
    procedure: "Breast augmentation",
    consent: "unconfirmed",
    source: "04-Breast_Surgery/01-Augmentation/Patient_5",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/5_front_pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/01-Augmentation/5_front_post.jpg",
      },
    ],
  },
  {
    id: "case-094",
    procedureSlug: "breast-surgery/reduction",
    category: "Breast surgery",
    procedure: "Breast reduction",
    consent: "unconfirmed",
    source: "04-Breast_Surgery/02-Reduction/Patient_1",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/02-Reduction/1_front_pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/02-Reduction/1_front_post.jpg",
      },
    ],
  },
  {
    id: "case-095",
    procedureSlug: "breast-surgery/reduction",
    category: "Breast surgery",
    procedure: "Breast reduction",
    consent: "unconfirmed",
    source: "04-Breast_Surgery/02-Reduction/Patient_2",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/02-Reduction/2_front_pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/02-Reduction/2_front_post.jpg",
      },
    ],
  },
  {
    id: "case-096",
    procedureSlug: "breast-surgery/uplift-mastopexy",
    category: "Breast surgery",
    procedure: "Breast uplift / mastopexy",
    consent: "unconfirmed",
    source: "04-Breast_Surgery/03-Mastopexy/Patient_1",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/03-Mastopexy/1_front_pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/03-Mastopexy/1_front_post.jpg",
      },
    ],
  },
  {
    id: "case-097",
    procedureSlug: "breast-surgery/uplift-mastopexy",
    category: "Breast surgery",
    procedure: "Breast uplift / mastopexy",
    consent: "unconfirmed",
    source: "04-Breast_Surgery/03-Mastopexy/Patient_2",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/03-Mastopexy/2_front_pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/03-Mastopexy/2_front_post.jpg",
      },
    ],
  },
  {
    id: "case-098",
    procedureSlug: "breast-surgery/gynaecomastia",
    category: "Breast surgery",
    procedure: "Gynaecomastia",
    consent: "unconfirmed",
    source: "04-Breast_Surgery/04-Gynaecomastia/Patient_1",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/04-Gynaecomastia/1_front_pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/04-Gynaecomastia/1_front_post.jpg",
      },
    ],
  },
  {
    id: "case-099",
    procedureSlug: "breast-surgery/gynaecomastia",
    category: "Breast surgery",
    procedure: "Gynaecomastia",
    consent: "unconfirmed",
    source: "04-Breast_Surgery/04-Gynaecomastia/Patient_2",
    views: [
      {
        label: "Front view",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/04-Gynaecomastia/2_front_pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/04-Gynaecomastia/2_front_post.jpg",
      },
      {
        label: "Left profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/04-Gynaecomastia/2_left_pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/04-Gynaecomastia/2_left_post.jpg",
      },
      {
        label: "Right profile",
        before:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/04-Gynaecomastia/2_right_pre.jpg",
        after:
          "https://lucianion.co.uk/assets/img/New_gallery_mirror_area/04-Breast_Surgery/04-Gynaecomastia/2_right_post.jpg",
      },
    ],
  },
];

export const approvedCases = patientCases.filter((c) => c.consent === "confirmed");
