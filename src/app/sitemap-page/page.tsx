import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Home, Mail, Shield, Map } from "lucide-react";

interface SitemapSection {
  title: string;
  icon: React.ReactNode;
  links: {
    name: string;
    href: string;
    description: string;
  }[];
}

const sitemapData: SitemapSection[] = [
  {
    title: "Main Pages",
    icon: <Home className="w-6 h-6" />,
    links: [
      {
        name: "Home",
        href: "/",
        description: "Welcome to DevAxis Solutions - Your digital transformation partner",
      },
      {
        name: "About Us",
        href: "/about",
        description: "Learn about our mission, team, and company culture",
      },
      {
        name: "Services",
        href: "/services",
        description: "Explore our comprehensive digital services and solutions",
      },
      {
        name: "Projects",
        href: "/projects",
        description: "View our portfolio of successful client projects",
      },
      {
        name: "Pricing",
        href: "/pricing",
        description: "Transparent pricing plans for every business size",
      },
      {
        name: "Contact",
        href: "/contact",
        description: "Get in touch with our team for your next project",
      },
    ],
  },
  {
    title: "Legal",
    icon: <Shield className="w-6 h-6" />,
    links: [
      {
        name: "Privacy Policy",
        href: "/privacy",
        description: "How we collect, use, and protect your information",
      },
      {
        name: "Terms of Service",
        href: "/terms",
        description: "Terms and conditions for using our services",
      },
    ],
  },
  {
    title: "Resources",
    icon: <Map className="w-6 h-6" />,
    links: [
      {
        name: "Sitemap",
        href: "/sitemap-page",
        description: "Navigate through all pages on our website",
      },
    ],
  },
];

const SitemapPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-8">
            Sitemap
          </h1>
          <p className="text-xl text-neutral-500">
            Navigate through all pages and sections of our website. Find exactly what you&apos;re looking for.
          </p>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Sitemap Content */}
      <div className="py-12 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <div className="max-w-6xl space-y-16">
          {sitemapData.map((section, sectionIndex) => (
            <section key={sectionIndex}>
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-black text-white rounded-lg">
                  {section.icon}
                </div>
                <h2 className="text-3xl font-bold">{section.title}</h2>
              </div>

              {/* Section Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="group p-6 rounded-xl border-2 border-neutral-200 hover:border-black transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold group-hover:text-black transition-colors">
                        {link.name}
                      </h3>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform text-neutral-400 group-hover:text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          {/* Additional Info */}
          <section className="mt-16 p-8 bg-neutral-50 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-neutral-700 mb-6">
              Can&apos;t find what you&apos;re looking for? Our team is here to help you navigate our services and find the perfect solution for your needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-neutral-800 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Support
            </Link>
          </section>
        </div>
      </div>

      {/* Quick Links Footer */}
      <div className="py-12 px-6 mx-auto 2xl:w-4/5 md:px-16 border-t border-neutral-200">
        <div className="max-w-6xl">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-6">
            Quick Access
          </h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              className="px-4 py-2 bg-white border-2 border-neutral-200 rounded-lg hover:border-black transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 bg-white border-2 border-neutral-200 rounded-lg hover:border-black transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="px-4 py-2 bg-white border-2 border-neutral-200 rounded-lg hover:border-black transition-colors text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 bg-white border-2 border-neutral-200 rounded-lg hover:border-black transition-colors text-sm font-medium"
            >
              Projects
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-2 bg-white border-2 border-neutral-200 rounded-lg hover:border-black transition-colors text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-white border-2 border-neutral-200 rounded-lg hover:border-black transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
