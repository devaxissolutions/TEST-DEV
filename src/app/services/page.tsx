import { Separator } from "@/components/ui/separator";
import Brands from "./brands";
import Image from "next/image";
import Process from "./process";
import Impact from "./impact";
import Industries from "./industries";
import { Service } from "@/types";

const services: Service[] = [
  {
    title: "AI & Automation Solutions",
    description: `We build intelligent automation systems and custom AI agents that streamline business operations, enhance productivity, and drive smarter decision-making. From machine learning to workflow automation, we help businesses leverage AI for maximum efficiency.`,
    benefits: [
      "Custom AI Agents",
      "n8n / Make.com Workflows",
      "Machine Learning Models",
      "Natural Language Processing",
      "Predictive Analytics",
      "AI System Integration",
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Software Development",
    description: `We develop powerful, scalable software tailored to your business needs. Whether it's an ERP solution, SaaS platform, or automation dashboard, we combine robust engineering with seamless user experience to deliver long-term value.`,
    benefits: [
      "Custom ERP Systems",
      "SaaS Platforms",
      "Automation Dashboards",
      "Backend APIs",
      "Database Architecture",
      "Cloud Integration",
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Website Development",
    description: `We create fast, secure, and SEO-optimized websites using the latest technologies. Our focus is on blending stunning visual design with exceptional performance and accessibility to help your business stand out online.`,
    benefits: [
      "React & Next.js Development",
      "Responsive Web Design",
      "Performance Optimization",
      "SEO Integration",
      "CMS & API Integration",
      "Progressive Web Apps",
    ],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mobile App Development",
    description: `We design and build mobile applications that offer intuitive experiences and reliable performance. From cross-platform apps to native solutions, we ensure your product reaches users on every device with excellence.`,
    benefits: [
      "React Native (Expo)",
      "Flutter & Ionic",
      "Native iOS & Android Apps",
      "App Store Optimization",
      "Push Notifications",
      "App Maintenance & Updates",
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cybersecurity & Vulnerability Assessment",
    description: `We safeguard your digital ecosystem with end-to-end cybersecurity services. Our experts identify vulnerabilities, strengthen defenses, and ensure compliance to protect your business from evolving threats.`,
    benefits: [
      "Penetration Testing",
      "Vulnerability Scanning",
      "Threat Detection",
      "Security Audits",
      "Compliance Consulting",
      "Incident Response & Recovery",
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Payment Gateway Integrations",
    description: `We implement seamless, secure payment solutions tailored to your business model. Our integration expertise covers all major gateways, enabling smooth transactions, subscriptions, and multi-currency support.`,
    benefits: [
      "Stripe & PayPal Integration",
      "Razorpay Setup",
      "Subscription Logic",
      "Multi-currency Payments",
      "Transaction Analytics",
      "Payment Workflow Optimization",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Branding & Design",
    description: `We craft impactful brand identities that leave lasting impressions. From logos to complete design systems, our creative team ensures your brand communicates clarity, trust, and innovation across all channels.`,
    benefits: [
      "Logo & Visual Identity",
      "UI/UX Design Systems",
      "Brand Guidelines",
      "Marketing Collaterals",
      "Social Media Design",
      "Packaging & Print Design",
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Marketing & Content Strategy",
    description: `We help businesses grow through data-driven marketing and strategic content creation. Our SEO, analytics, and creative storytelling work together to increase visibility, engagement, and conversions.`,
    benefits: [
      "Technical SEO",
      "Performance Marketing",
      "Content Strategy",
      "Copywriting & Blogging",
      "Analytics & Optimization",
      "Marketing Automation",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "UI/UX Design",
    description: `We craft intuitive, visually stunning user experiences that balance aesthetics and usability. Our design team focuses on creating user journeys that drive engagement, reduce friction, and strengthen brand connection.`,
    benefits: [
      "User Experience Research",
      "Wireframes & Prototyping",
      "User Interface Design",
      "Usability Testing",
      "Accessibility Optimization",
      "Design Systems & Guidelines",
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Product Strategy & Consultation",
    description: `We help businesses turn ideas into successful digital products. Our strategy experts guide you through product discovery, market positioning, and technology planning to ensure long-term scalability and success.`,
    benefits: [
      "Product Roadmapping",
      "Discovery Workshops",
      "Business & Tech Alignment",
      "MVP Planning",
      "Product Market Fit Analysis",
      "Innovation Consulting",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Research & Insights",
    description: `We provide deep research and data-driven insights to shape your digital direction. Our team conducts qualitative and quantitative studies to validate ideas, enhance UX, and uncover new growth opportunities.`,
    benefits: [
      "Market & Competitor Research",
      "User Persona Development",
      "UX Research & Testing",
      "Data Analytics & Insights",
      "Product Validation Studies",
      "Research Reporting & Documentation",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
];

const Services = () => {
  return (
    <div className="md:min-h-screen bg-white">
      {/* hero section */}

      <div className="pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <div className="mx-auto flex items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-8">
              A full service digital innovation partner
            </h1>
            <p className="text-xl text-neutral-500">
              Our rich design and technology expertise delivers top brands and
              digital experiences
            </p>
          </div>
        </div>
      </div>

      <Brands />
      <Separator className="my-16" />

      {/* services section */}

      <div className="md:py-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <h2 className="text-xl font-bold text-[#7b7b7b] mb-10">
          / Our Services
        </h2>

        <div className="space-y-16 md:space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {/* image section */}
              <div className="w-full">
                <Image
                  priority
                  width={1200}
                  height={675}
                  src={service.image}
                  alt="image"
                  className="shadow-lg md:w-[640px] h-[400px] object-cover rounded-xl"
                />
              </div>

              {/* content section */}
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-8">{service.title}</h2>
                <p className="text-[#7b7b7b] mb-12">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div
                      className="flex items-center space-x-2"
                      key={benefitIndex}
                    >
                      <span className="text-[#7b7b7b]">/ {benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Process />
      <Impact />
      <Industries />
      
    </div>
  );
};

export default Services;
