'use client'

import React from "react";
import { motion } from "framer-motion";

interface Value {
  title: string;
  description: string;
}

const CultureValue: React.FC<Value> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} // This ensures the animation only happens once
      transition={{ duration: 0.5 }}
      className="py-6 border-t border-gray-200"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <h3 className="text-lg font-semibold w-full md:w-1/3">{title}</h3>
        <p className="text-[#7b7b7b] w-full md:w-1/2">{description}</p>
      </div>
    </motion.div>
  );
};

const Culture = () => {
  const values = [
    {
      title: "Ambitious execution",
      description:
        "Excellence is our standard, not our exception. We combine technical mastery with creative innovation to deliver solutions that exceed expectations and redefine possibilities.",
    },
    {
      title: "Promises kept",
      description:
        "Our commitments are deliberate and unwavering. We deliver on our word, and when expertise is needed beyond our scope, we partner with the industry's finest specialists. This is the wisdom passed down from our founder.",
    },
    {
      title: "Genuine interest",
      description:
        "We approach every relationship with empathy, support, and a commitment to growth. Every client, partner, and team member receives exceptional care and attention, fostering trust and mutual success.",
    },
    {
      title: "Playful spirit",
      description:
        "Like our founder Bruno, we embrace childlike wonder and curiosity in our work. When we lose that spark of joy and exploration, we'll know it's time to make way for fresh perspectives.",
    },
    {
      title: "Provoked luck",
      description:
        "We believe luck is forged, not found. Rather than waiting for opportunities, we actively create them through relentless experimentation, learning, and iteration. We plant seeds of innovation and harvest the fruits of success.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div
        className=" px-6 py-24 md:mx-auto 
      
       2xl:w-4/5 md:px-16
      "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">
            /Culture
          </p>
          <div className="text-[#7b7b7b] max-w-3xl">
            At DevAxis Solutions we believe that our culture is the foundation of our
            success. Our values are the guiding principles that help us achieve
            our goals and create a positive work environment. Here are the
            values that define us:
          </div>
        </motion.div>

        <div className="space-y-2">
          {values.map((value, index) => (
            <CultureValue
              key={index}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Culture;
