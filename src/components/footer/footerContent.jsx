import { FaLinkedin, FaTwitterSquare, FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const footerContent = [
  {
    title: "gadgets-dome",
    subtitles: [
      {
        text: "aboutUs",
        href: "/about",
      },
      {
        text: "contactUs",
        href: "/blank",
      },
      {
        text: "saleIngadgetsdome",
        href: "/blank",
      },
      {
        text: "careerOpportunities",
        href: "/blank",
      },
    ],
  },
  {
    title: "customer Services",
    subtitles: [
      {
        text: "commonQuestions",
        href: "/blank",
      },
      {
        text: "returnProcedures",
        href: "/blank",
      },
      {
        text: "privacy",
        href: "/blank",
      },
    ],
  },
  {
    title: "shopping Guide",
    subtitles: [
      {
        text: "howToPlaceAnOrder",
        href: "/blank",
      },
      {
        text: "orderSubmissionProcedure",
        href: "/blank",
      },
      {
        text: "paymentMethods",
        href: "/blank",
      },
    ],
  },
];

export const socialMedia = [
  {
    name: "instagram",
    icon: AiFillInstagram,
    href: "/",
  },
  {
    name: "linkedin",
    icon: FaLinkedin,
    href: "/",
  },
  {
    name: "twitter",
    icon: FaTwitterSquare,
    href: "/",
  },
  {
    name: "telegram",
    icon: FaTelegramPlane,
    href: "/",
  },
];