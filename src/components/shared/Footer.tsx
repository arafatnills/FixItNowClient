import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import CurrentYear from "./CurrentYear";
import Image from "next/image";
import logo from '../../../public/logo.png'
const socialLinks = [
  { href: "#", icon: <FaFacebook className="w-5 h-5" /> },
  { href: "#", icon: <FaXTwitter className="w-5 h-5" /> },
  { href: "#", icon: <FaInstagram className="w-5 h-5" /> },
  { href: "#", icon: <FaLinkedin className="w-5 h-5" /> },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "All Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const popularServices = [
  { href: "/services?category=plumbing", label: "Plumbing Service" },
  { href: "/services?category=electrical", label: "Electrical Repair" },
  { href: "/services?category=cleaning", label: "Home Cleaning" },
  { href: "/services?category=ac-repair", label: "AC Repair" },
];

const contactInfo = [
  {
    label: "Address",
    value: "123 FixItNow Street, Gulshan, Dhaka, Bangladesh",
    icon: (
      <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-500 shrink-0 mt-0.5" />
    ),
  },
  {
    label: "Phone",
    value: "+880 1234 567890",
    icon: <Phone className="w-5 h-5 text-teal-600 dark:text-teal-500" />,
  },
  {
    label: "Email",
    value: "info@fixitnow.com",
    icon: <Mail className="w-5 h-5 text-teal-600 dark:text-teal-500" />,
  },
];

const bottomLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800 mt-auto">
      <div className="container mx-auto px-4 md:px-8 pt-16 pb-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* ১. Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-teal-700 gap-2 dark:text-teal-500 flex items-center">
                <Image src={logo} width={40} height={100} alt="logo" />
                FixIt<span className="text-amber-500">Now</span>
              </span>
            </Link>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              Your trusted platform for finding top-rated professionals for all
              your home service and repair needs. Fast, secure, and reliable.
            </p>
            {/* Social Icons Updated with react-icons */}
            <div className="flex items-center gap-5 pt-2">
              {socialLinks.map((link, index) => {
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {link.icon}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ২. Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              {quickLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ৩. Popular Services */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-6">
              Top Categories
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              {popularServices.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ৪. Contact Info */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              {contactInfo.map((link, index) => {
                return (
                  <li key={index} className="flex items-center gap-3">
                    {link.icon}
                    <span>{link.value}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ৫. Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-left">
            © {<CurrentYear />} FixItNow. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
            {bottomLinks.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
