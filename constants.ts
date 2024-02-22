import {
  HomePopularServicesType,
  HomeOurServicesType,
  TestimonialType,
} from "./types";

import bridge_link_icon from "./assets/images/bridge-link-icon.svg";
import crown_link_icon from "./assets/images/crown-link-icon.svg";
import dentures_link_icon from "./assets/images/dentures-link-icon.svg";
import examination_link_icon from "./assets/images/examination-link-icon.svg";
import extractions_link_icon from "./assets/images/extraction-link-icon.svg";
import hygienist_link_icon from "./assets/images/hygenist-link-icon.svg";
import white_fillings_link_icon from "./assets/images/white-fillings-link-icon.svg";
import root_canal_link_icon from "./assets/images/root-canal-link-icon.svg";
import invis_align_link_icon from "./assets/images/invisalign-link-icon.svg";
import fixed_retainers_link_icon from "./assets/images/fixed-retainers-link-icon.svg";
import teeth_whitening_link_icon from "./assets/images/teeth-whitening-link-icon.svg";
import vivera_retainers_link_icon from "./assets/images/vivera-retainer-link-icon.svg";
import crown_veneers_link_icon from "./assets/images/crowns-veneers-link-icon.svg";
import composite_veneers_link_icon from "./assets/images/composite-veneers-link-icon.svg";
import composite_bonding_link_icon from "./assets/images/composite-bonding-link-icon.svg";
import routine_examination_link_icon from "./assets/images/routine-examination-link-icon.svg";
import internal_tooth_whitening_link_icon from "./assets/images/internal-tooth-whitening-link-icon.svg";
import composite_edge_bonding_link_icon from "./assets/images/composite-edge-bonding-link-icon.svg";
import award_img1 from "./assets/images/award_img1.svg";
import award_img2 from "./assets/images/award_img2.svg";
import award_img3 from "./assets/images/award_img3.svg";
import award_img4 from "./assets/images/award_img4.svg";
import award_img5 from "./assets/images/award_img5.svg";
import award_img6 from "./assets/images/award_img6.svg";
import award_img7 from "./assets/images/award_img7.svg";
import teeth_whitening_service_image from "./assets/images/teeth-whitening-service-img.svg";
import invisalign_service_image from "./assets/images/invisalign-service-image.svg";
import composite_bonding_service_image from "./assets/images/composite-bonding-service-image.svg";
import general_dentistry_service_image from "./assets/images/general-dentistry-service-image.svg";
import dentures_services_image from "./assets/images/dentures-services-image.svg";
import extraction_services_image from "./assets/images/extraction-services-image.svg";
import crown_veneers_services_image from "./assets/images/crowns-veeners-services-image.svg";
import hygienist_services_image from "./assets/images/hygienist-services-image.svg";
import root_canal_services_image from "./assets/images/root-canal-services-image.svg";
import bridges_services_image from "./assets/images/birdges-services-image.svg";
import white_fillings_services_image from "./assets/images/white-fillings-services-image.svg";
import examination_services_image from "./assets/images/examination-services-image.svg";

import increase_confidence_icon from "./assets/images/increase-confidence-icon.svg";
import unleash_charisma_icon from "./assets/images/unleash-charisma-icon.svg";
import empower_presence_icon from "./assets/images/empower-prescense-icon.svg";

import result_image1 from "./assets/images/result-image1.svg";
import result_image2 from "./assets/images/result-image2.svg";
import result_image3 from "./assets/images/result-image3.svg";
import result_image4 from "./assets/images/result-image4.svg";
import result_image5 from "./assets/images/result-image5.svg";
import result_image6 from "./assets/images/result-image6.svg";
import result_image7 from "./assets/images/result-image7.svg";
import result_image8 from "./assets/images/result-image8.svg";

import manuel_lanzini from "./assets/images/manuel-lanzini.svg";
import luis_image from "./assets/images/luis-image.svg";

import process_initial_inquiry_image from "./assets/images/process-question-image.svg"
import process_initial_examination_image from "./assets/images/process-initial-examination-image.svg"
import process_treatment_plan_image from "./assets/images/process-treatment-planning.svg"
import process_conduct_treatment_image from "./assets/images/process-contact-treatment.svg"
import process_care_maintenance_image from "./assets/images/process-care-maintenance.svg"
import { initializeTraceState } from "next/dist/trace";



export const navlinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About us",
  },
  {
    href: "#",
    label: "Services",
    subLinks: [
      {
        title: "Bridges",
        href: "#",
        icon: bridge_link_icon,
      },
      {
        title: "Crowns / Veneers",
        href: "#",
        icon: crown_link_icon,
      },
      {
        title: "Dentures",
        href: "#",
        icon: dentures_link_icon,
      },
      {
        title: "Examination",
        href: "#",
        icon: examination_link_icon,
      },
      {
        title: "Extractions",
        href: "#",
        icon: extractions_link_icon,
      },
      {
        title: "Hygienist",
        href: "#",
        icon: hygienist_link_icon,
      },
      {
        title: "White Fillings",
        href: "#",
        icon: white_fillings_link_icon,
      },
      {
        title: "Root Canal Treatments",
        href: "#",
        icon: root_canal_link_icon,
      },
    ],
  },
  {
    href: "#",
    label: "Cosmetic Treatment",
    subLinks: [
      {
        title: "Invisalign",
        href: "#",
        icon: invis_align_link_icon,
      },
      {
        title: "Fixed Retainers",
        href: "#",
        icon: fixed_retainers_link_icon,
      },
      {
        title: "Teeth Whitening",
        href: "#",
        icon: teeth_whitening_link_icon,
      },
      {
        title: "Vivera Retainers",
        href: "#",
        icon: vivera_retainers_link_icon,
      },
      {
        title: "Crowns/Veneers",
        href: "#",
        icon: crown_veneers_link_icon,
      },
      {
        title: "Composite Veneers",
        href: "#",
        icon: composite_veneers_link_icon,
      },
      {
        title: "Composite  Bonding",
        href: "#",
        icon: composite_bonding_link_icon,
      },
      {
        title: "Routine Examination",
        href: "#",
        icon: routine_examination_link_icon,
      },
      {
        title: "Internal Tooth Whitening",
        href: "#",
        icon: internal_tooth_whitening_link_icon,
      },
      {
        title: "Composite Edge Bonding",
        href: "#",
        icon: composite_edge_bonding_link_icon,
      },
    ],
  },
];

export const home_awards_images = [
  award_img1,
  award_img2,
  award_img3,
  award_img4,
  award_img5,
  award_img6,
  award_img7,
  award_img3,
  award_img4,
];

export const popular_services: HomePopularServicesType[] = [
  {
    image: teeth_whitening_service_image,
    title: "Teeth Whitening",
    description:
      "At our dental practice, we understand that a bright, white smile can boost self-confidence and improve overall well-being. That’s why we offer home teeth whitening as a convenient and effective solution for achieving a brighter, more youthful-looking smile.",
  },
  {
    image: invisalign_service_image,
    title: "Invisalign",
    description:
      "At our dental practice, we understand that a bright, white smile can boost self-confidence and improve overall well-being. That’s why we offer home teeth whitening as a convenient and effective solution for achieving a brighter, more youthful-looking smile.",
  },
  {
    image: composite_bonding_service_image,
    title: "Composite Bonding",
    description:
      "At our dental practice, we understand that a bright, white smile can boost self-confidence and improve overall well-being. That’s why we offer home teeth whitening as a convenient and effective solution for achieving a brighter, more youthful-looking smile.",
  },
  {
    image: general_dentistry_service_image,
    title: "General Dentistry",
    description:
      "At our dental practice, we understand that a bright, white smile can boost self-confidence and improve overall well-being. That’s why we offer home teeth whitening as a convenient and effective solution for achieving a brighter, more youthful-looking smile.",
  },
];

export const our_services: HomeOurServicesType[] = [
  {
    title: "Dentures",
    description:
      "Rediscover Confidence, Embrace Comfort: Tailored Dentures for Your Perfect Smile",
    image: dentures_services_image,
  },
  {
    title: "Extractions",
    description:
      "Gentle Farewell, Expert Extraction: Your Comfort is Our Priority in Every Tooth's Journey.",
    image: extraction_services_image,
  },
  {
    title: "Crowns / Veneers",
    description:
      "Crowning Glory, Veneer Elegance: Elevate Your Smile with Precision Crafted Perfection.",
    image: crown_veneers_services_image,
  },
  {
    title: "Hygienist",
    description:
      "Elevate Your Smile, Embrace Hygiene: Where Precision Meets Care with Our Expert Hygienists.",
    image: hygienist_services_image,
  },
  {
    title: "Root Canal Treatments",
    description:
      "Rooted in Precision, Reviving Smiles: Expert Care for Painless Root Canal Treatments.",
    image: root_canal_services_image,
  },
  {
    title: "Bridges",
    description:
      "Bridging Smiles, Connecting Confidence: Seamlessly Restore Your Complete Smile with Expertly Crafted Bridges.",
    image: bridges_services_image,
  },
  {
    title: "White Fillings",
    description:
      "Radiant Smiles, Seamless Repairs: Unveil the Beauty of White Fillings at Our Dental Oasis!",
    image: white_fillings_services_image,
  },
  {
    title: "Examination",
    description:
      "Beyond Every Smile Lies a Story: Thorough Examinations for Your Dental Well-being.",
    image: examination_services_image,
  },
];

export const change_life: HomeOurServicesType[] = [
  {
    title: "Increase Your Confidence",
    description:
      "Enhance self-esteem with improved oral health and a brighter smile.",
    image: increase_confidence_icon,
  },
  {
    title: "Unleash Your Charisma",
    description:
      "Enhance your natural appeal with a radiant, confident smile..",
    image: unleash_charisma_icon,
  },
  {
    title: "Empower Your Presence",
    description:
      "Strengthen your overall impact with a vibrant, assured smile.",
    image: empower_presence_icon,
  },
];

export const home_result_images = [
  result_image1,
  result_image2,
  result_image3,
  result_image4,
  result_image5,
  result_image6,
  result_image7,
  result_image8,
];

export const testimonial: TestimonialType[] = [
  {
    name: "Manuel Lanzini (Professional Footballer)",
    testimony:
      "My experience at Dental Opulence was nothing short of remarkable. This clinic isn't just a place for dental treatment; it's where art meets science. I went in for a smile makeover, a decision that I had been pondering over for months. From the moment I stepped in, the ambiance set a calming tone, with its modern decor and soothing colors.",
    profilePicture: manuel_lanzini,
  },
  {
    name: "Luis Hasanaj (Entrepreneur)",
    testimony:
      "I wasn’t very confident with my teeth until I met Dr Ali and the team at Dental Opulence. My smile was transformed giving me a new-found spring in my step. I cannot stop smiling, quite literally. The service and execution was second to none.",
    profilePicture: luis_image,
  },
  {
    name: "Manuel Lanzini (Professional Footballer)",
    testimony:
      "My experience at Dental Opulence was nothing short of remarkable. This clinic isn't just a place for dental treatment; it's where art meets science. I went in for a smile makeover, a decision that I had been pondering over for months. From the moment I stepped in, the ambiance set a calming tone, with its modern decor and soothing colors.",
    profilePicture: manuel_lanzini,
  },
];

export const home_process: HomeOurServicesType[] = [
  {
    title: 'Initial Enquiry',
    description: 'At Dental Opulence, our initial examinations set the gold standard for comprehensive dental care. We prioritize your oral health journey with precision and care.',
    image: process_initial_inquiry_image
  },
  {
    title: 'Initial Examination',
    description: 'At Dental Opulence, our initial examinations set the gold standard for comprehensive dental care. We prioritize your oral health journey with precision and care.',
    image: process_initial_inquiry_image
  },
  {
    title: 'Treatment Planning',
    description: 'At Dental Opulence, our meticulous treatment planning is tailored to your unique needs. We design personalized plans to ensure optimal oral health and stunning smiles.',
    image: process_initial_inquiry_image
  },
  {
    title: 'Conduct Treatment ',
    description: 'At Dental Opulence, our expert team uses cutting-edge technology to deliver exceptional results with skill & precision, ensuring a comfortable experience for every patient.',
    image: process_initial_inquiry_image
  },
  {
    title: 'Care & Maintenance ',
    description: ' At Dental Opulence, our commitment to your smile doesn\'t end after treatment. We offer tailored care and maintenance services to preserve your beautiful smile for years to come.',
    image: process_initial_inquiry_image
  },
]
