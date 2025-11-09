"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type TabId = "projects" | "clients";
type CategoryId =
  | "all"
  | "ai"
  | "software"
  | "web"
  | "mobile"
  | "security"
  | "integration"
  | "branding"
  | "marketing"
  | "uiux"
  | "strategy"
  | "research";

interface TabCounts {
  projects: number;
  clients: number;
}

interface CategoryCount {
  projects: number;
  clients: number;
}

interface CategoryCounts {
  [key: string]: CategoryCount;
}

interface Project {
  id: number;
  name: string;
  video: string;
  title: string;
  description: string;
  category: CategoryId;
  size: string;
  imageHeight: string;
}

interface Client {
  id: number;
  name: string;
  image: string;
  description: string;
  category: CategoryId;
}

const Hero = () => {
  const [activeTab, setActiveTab] = useState<TabId>("projects");
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const clients = useMemo<Client[]>(() => [
    {
      id: 1,
      name: "Client #1",
      image: "logo-1.svg",
      description:
        "Redbull is a global leader in the energy drink industry, with a focus on extreme sports and entertainment. We worked with Redbull to develop a new brand identity and marketing strategy.",
      category: "branding",
    },
    {
      id: 2,
      name: "Client #2",
      image: "logo-2.svg",
      description:
        "Salesforce is a leading customer relationship management platform, with a focus on cloud-based solutions. We collaborated with Salesforce to develop a new digital platform for their e-commerce business.",
      category: "software",
    },
    {
      id: 3,
      name: "Client #3",
      image: "logo-3.svg",
      description:
        "Microsoft is a global leader in software and technology, with a focus on innovation and accessibility. We worked with Microsoft to develop a new digital platform for their e-commerce business.",
      category: "uiux",
    },
    {
      id: 4,
      name: "Client #4",
      image: "logo-4.svg",
      description:
        "Spotify is a leading music streaming service, with a focus on user experience and data analytics. We collaborated with Spotify to develop a new brand identity and marketing strategy.",
      category: "branding",
    },
    {
      id: 5,
      name: "Client #5",
      image: "logo-5.svg",
      description:
        "Lyft is a leading ride-sharing service, with a focus on user experience and accessibility. We collaborated with Lyft to develop a new digital platform for their e-commerce business.",
      category: "mobile",
    },
    {
      id: 6,
      name: "Client #6",
      image: "logo-6.svg",
      description:
        "Coca-Cola is a global leader in the beverage industry, with a focus on sustainability and social responsibility. We worked with Coca-Cola to develop a new digital platform for their e-commerce business.",
      category: "uiux",
    },
    {
      id: 7,
      name: "Client #7",
      image: "logo-7.svg",
      description:
        "Under Armour is a leading sports apparel brand, with a focus on innovation and performance. We collaborated with Under Armour to develop a new brand identity and marketing strategy.",
      category: "uiux",
    },
    {
      id: 8,
      name: "Client #8",
      image: "logo-1.svg",
      description:
        "Slack is a leading team collaboration platform, with a focus on user experience and accessibility. We collaborated with Slack to develop a new digital platform for their e-commerce business.",
      category: "integration",
    },
    {
      id: 9,
      name: "Client #9",
      image: "logo-2.svg",
      description:
        "LinkedIn is a leading professional networking platform, with a focus on user experience and data analytics. We collaborated with LinkedIn to develop a new brand identity and marketing strategy.",
      category: "marketing",
    },
    {
      id: 10,
      name: "Client #10",
      image: "logo-3.svg",
      description:
        "Partnered with Audi to develop a research framework for their autonomous driving initiative, focusing on user acceptance and adoption.",
      category: "uiux",
    },
    {
      id: 11,
      name: "Client #11",
      image: "logo-4.svg",
      description:
        "Sony is a great client of ours. We have worked with them on a number of projects, including the development of a new digital platform for their e-commerce business.",
      category: "strategy",
    },
  ], []);

  const projects = useMemo<Project[]>(() => [
    {
      id: 1,
      name: "Project #1",
      video:
        "https://videos.pexels.com/video-files/6572598/6572598-hd_1920_1080_25fps.mp4",
      title: "Innovating the future of entertainment",
      description:
        "Partnered with sony to introduce a new line of cameras, focusing on user experience and accessibility. And shot this promo video.",
      category: "branding",
      size: "col-span-12 md:col-span-4 row-span-1",
      imageHeight: "h-80",
    },
    {
      id: 2,
      name: "Project #2",
      video:
        "https://videos.pexels.com/video-files/4126123/4126123-uhd_2732_1440_25fps.mp4",
      title: "Innovation meets sustainability",
      description:
        "Until now, Qwant has been the search engine that knows nothing about you—and that hasn't changed. But there are some new developments.",
      category: "software",
      size: " col-span-12 md:col-span-4",
      imageHeight: "h-48",
    },
    {
      id: 3,
      name: "Project #3",
      video:
        "https://videos.pexels.com/video-files/2909914/2909914-uhd_2732_1440_24fps.mp4",
      title: "Craftsmanship in every cup",
      description:
        "Primary designs innovative, patient-centered medical offices. We crafted a brand for them that is as warm as it is modern, seamlessly bridging the gap between in-person and digital experiences.",
      category: "uiux",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-48",
    },
    {
      id: 4,
      name: "Project #4",
      video:
        "https://videos.pexels.com/video-files/5077471/5077471-uhd_1440_2732_25fps.mp4",
      title: "Music streaming reimagined",
      description:
        "Spotify is a leading music streaming service, with a focus on user experience and data analytics. We collaborated with Spotify to develop a new brand identity and marketing strategy.",
      category: "strategy",
      size: "col-span-12 row-span-2",
      imageHeight: "h-[600px]",
    },
    {
      id: 5,
      name: "Project #5",
      video:
        "https://videos.pexels.com/video-files/5585939/5585939-hd_1920_1080_25fps.mp4",
      title: "All-in-one ecommerce platform",
      description:
        "Ecomworld is an all in one platform for ecommerce businesses to set up their own storefronts. We build out the back-end technology to make it extremely scalable.",
      category: "web",
      size: "col-span-12 md:col-span-6 row-span-1",
      imageHeight: "h-80",
    },
    {
      id: 6,
      name: "Project #6",
      video:
        "https://videos.pexels.com/video-files/4419251/4419251-hd_1920_1080_25fps.mp4",
      title: "Driving innovation forward",
      description:
        "Toyota is a global leader in the automotive industry, with a focus on innovation and sustainability. We worked with Toyota to develop a new digital platform for their e-commerce business.",
      category: "uiux",
      size: "col-span-12 md:col-span-6 row-span-1",
      imageHeight: "h-80",
    },
    {
      id: 7,
      name: "Project #7",
      video:
        "https://videos.pexels.com/video-files/3945147/3945147-uhd_2732_1440_25fps.mp4",
      title: "Digital wallet experience",
      description:
        "Partnered with Visa to design a new digital wallet experience, focusing on user-centered design and accessibility.",
      category: "strategy",
      size: "col-span-12 md:col-span-3 row-span-1",
      imageHeight: "h-44",
    },
    {
      id: 8,
      name: "Project #8",
      video:
        "https://videos.pexels.com/video-files/27421705/12140050_2730_1440_30fps.mp4",
      title: "Automating the future",
      description:
        "Collaborated on enhancing Tesla's data analytics dashboard, providing deeper insights into user listening patterns and preferences.",
      category: "ai",
      size: "col-span-12 md:col-span-3 row-span-1",
      imageHeight: "h-44",
    },
    {
      id: 9,
      name: "Project #9",
      video:
        "https://videos.pexels.com/video-files/8533114/8533114-uhd_2560_1440_25fps.mp4",
      title: "Steps Towards Sustainability",
      description:
        "Developing a marketing campaign that brings Nike's commitment to sustainability to the forefront of their brand narrative.",
      category: "marketing",
      size: "col-span-12 md:col-span-6 row-span-2",
      imageHeight: "h-96",
    },
  ], []);

  const { tabCounts, categoryCounts } = useMemo(() => {
    const projectCount = projects.length;
    const clientCount = clients.length;

    const categoryCount: CategoryCounts = {
      all: { projects: projectCount, clients: clientCount },
      ai: {
        projects: projects.filter((p) => p.category === "ai").length,
        clients: clients.filter((c) => c.category === "ai").length,
      },
      software: {
        projects: projects.filter((p) => p.category === "software").length,
        clients: clients.filter((c) => c.category === "software").length,
      },
      web: {
        projects: projects.filter((p) => p.category === "web").length,
        clients: clients.filter((c) => c.category === "web").length,
      },
      mobile: {
        projects: projects.filter((p) => p.category === "mobile").length,
        clients: clients.filter((c) => c.category === "mobile").length,
      },
      security: {
        projects: projects.filter((p) => p.category === "security").length,
        clients: clients.filter((c) => c.category === "security").length,
      },
      integration: {
        projects: projects.filter((p) => p.category === "integration").length,
        clients: clients.filter((c) => c.category === "integration").length,
      },
      branding: {
        projects: projects.filter((p) => p.category === "branding").length,
        clients: clients.filter((c) => c.category === "branding").length,
      },
      marketing: {
        projects: projects.filter((p) => p.category === "marketing").length,
        clients: clients.filter((c) => c.category === "marketing").length,
      },
      uiux: {
        projects: projects.filter((p) => p.category === "uiux").length,
        clients: clients.filter((c) => c.category === "uiux").length,
      },
      strategy: {
        projects: projects.filter((p) => p.category === "strategy").length,
        clients: clients.filter((c) => c.category === "strategy").length,
      },
      research: {
        projects: projects.filter((p) => p.category === "research").length,
        clients: clients.filter((c) => c.category === "research").length,
      },
    };

    return {
      tabCounts: {
        projects: projectCount,
        clients: clientCount,
      } as TabCounts,
      categoryCounts: categoryCount,
    };
  }, [projects, clients]);

  const tabs = [
    { id: "projects" as const, name: "Projects", count: tabCounts.projects },
    { id: "clients" as const, name: "Clients", count: tabCounts.clients },
  ];

  const categories = [
    { id: "all" as const, name: "All", count: categoryCounts.all[activeTab] },
    {
      id: "ai" as const,
      name: "AI",
      count: categoryCounts.ai[activeTab],
    },
    {
      id: "software" as const,
      name: "Software",
      count: categoryCounts.software[activeTab],
    },
    {
      id: "web" as const,
      name: "Web",
      count: categoryCounts.web[activeTab],
    },
    {
      id: "mobile" as const,
      name: "Mobile",
      count: categoryCounts.mobile[activeTab],
    },
    {
      id: "security" as const,
      name: "Security",
      count: categoryCounts.security[activeTab],
    },
    {
      id: "integration" as const,
      name: "Integration",
      count: categoryCounts.integration[activeTab],
    },
    {
      id: "branding" as const,
      name: "Branding",
      count: categoryCounts.branding[activeTab],
    },
    {
      id: "marketing" as const,
      name: "Marketing",
      count: categoryCounts.marketing[activeTab],
    },
    {
      id: "uiux" as const,
      name: "UI/UX",
      count: categoryCounts.uiux[activeTab],
    },
    {
      id: "strategy" as const,
      name: "Strategy",
      count: categoryCounts.strategy[activeTab],
    },
    {
      id: "research" as const,
      name: "Research",
      count: categoryCounts.research[activeTab],
    },
  ];

  const renderContent = () => {
    return (
      <AnimatePresence mode="wait">
        {activeTab === "clients" ? (
          <motion.div
            layout
            key="clients"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-12  gap-10 "
          >
            <AnimatePresence>
              {clients
                .filter(
                  (client) =>
                    activeCategory === "all" ||
                    client.category === activeCategory
                )
                .map((client) => (
                  <motion.div
                    layout
                    key={client.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="col-span-4 mb-12
                    md:mb-0
                    border p-4 "
                  >
                    <div className="relative h-32 mb-6">
                      <Image
                        priority
                        height={100}
                        width={100}
                        src={`/${client.image}`}
                        alt={client.name}
                        className="object-contain w-full h-full  "
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{client.name}</h3>
                    <p className="text-[#7b7b7b] leading-relaxed">
                      {client.description}
                    </p>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            layout
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10"
          >
            <AnimatePresence>
              {projects
                .filter(
                  (project) =>
                    activeCategory === "all" ||
                    project.category === activeCategory
                )
                .map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${project.size}`}
                  >
                    <div className={`relative ${project.imageHeight} mb-4 `}>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    </div>
                    <h3 className="text-sm font-bold mb-2 text-gray-600">
                      / {project.name}
                    </h3>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div
      className="
    md:mx-auto   
     2xl:w-4/5 md:px-16

    
    px-6 py-40 "
    >
      {/* Main Navigation */}
      <div className="flex flex-wrap gap-8 mb-12 items-center">
        {tabs.map((tab, index) => (
          <React.Fragment key={tab.id}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`text-2xl md:text-4xl font-bold ${
                activeTab === tab.id
                  ? "border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
              <span className="text-sm ml-1 align-super">{tab.count}</span>
            </motion.button>
            {index < tabs.length - 1 && (
              <div className=" p-2 rounded-full bg-black h-4 w-4 items-center flex justify-center"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-6 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 ${
              activeCategory === category.id ? "font-bold" : "text-gray-500"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
            <span className="text-xs ml-1 align-super text-gray-400">
              {category.count}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default Hero;
