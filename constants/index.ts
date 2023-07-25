import accessAnywhere from "@/public/icon-access-anywhere.svg";
import security from "@/public/icon-security.svg";
import collaboration from "@/public/icon-collaboration.svg";
import anyFile from "@/public/icon-any-file.svg";
import profile1 from "@/public/profile-1.jpg";
import profile2 from "@/public/profile-2.jpg";
import profile3 from "@/public/profile-3.jpg";

export const headerLinks = [
  { href: "/", key: "Features", text: "Features" },
  { href: "/", key: "Team", text: "Team" },
  { href: "/", key: "Sign In", text: "Sign In" },
];

export const pageCaracteristics = [
  {
    image: accessAnywhere,
    ident: "accessAnywhere",
    title: "Access your files, anywhere",
    text: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    image: security,
    ident: "security",
    title: "Security you can trust",
    text: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    image: collaboration,
    ident: "collaboration",
    title: "Real-time collaboration",
    text: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    image: anyFile,
    ident: "anyFile",
    title: "Store any type of file",
    text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

export const commentsData = [
  {
    ident: "Satish Patel",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    image: profile1,
    name: "Satish Patel",
    role: "Founder & CEO, Huddle",
  },
  {
    ident: "Bruce McKenzie",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    image: profile2,
    name: "Bruce McKenzie",
    role: "Founder & CEO, Huddle",
  },
  {
    ident: "Iva Boyd",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    image: profile3,
    name: "Iva Boyd",
    role: "Founder & CEO, Huddle",
  },
];

export const footerLinks = [
  { href: "/", key: "About Us", text: "About Us" },
  { href: "/", key: "Jobs", text: "Jobs" },
  { href: "/", key: "Press", text: "Press" },
  { href: "/", key: "Blog", text: "Blog" },
  { href: "/", key: "Contact Us", text: "Contact Us" },
  { href: "/", key: "Terms", text: "Terms" },
  { href: "/", key: "Privacy", text: "Privacy" },
];
