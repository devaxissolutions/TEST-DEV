import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/utils";

import Image from "next/image";

const companies = [
  { name: "Client #1", logo: "/placeholder-logo.svg" },
  { name: "Client #2", logo: "/placeholder-logo.svg" },
  { name: "Client #3", logo: "/placeholder-logo.svg" },
  { name: "Client #4", logo: "/placeholder-logo.svg" },
  { name: "Client #5", logo: "/placeholder-logo.svg" },
  { name: "Client #6", logo: "/placeholder-logo.svg" },
  { name: "Client #7", logo: "/placeholder-logo.svg" },
  { name: "Client #8", logo: "/placeholder-logo.svg" },
  { name: "Client #9", logo: "/placeholder-logo.svg" },
  { name: "Client #10", logo: "/placeholder-logo.svg" },
];

const firstRow = companies.slice(0, Math.ceil(companies.length / 2));
const secondRow = companies.slice(Math.ceil(companies.length / 2));

const CompanyLogo = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <div className="mx-8 flex items-center justify-center">
      <Image
      priority 
      width={200}
        height={200}    
        src={logo} 
        alt={`${name} logo`} 
        className="
        w-16
        h-16
    

        "
      />
    </div>
  );
};

const Trusted = () => {
  return (
    <div className={cn(

      "w-full overflow-hidden bg-white py-12 "
    )}>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Trusted by industry leaders worldwide
        </h2>
        <p className="text-gray-600">
          Our platform is used by the world&apos;s most innovative companies.
        </p>

      </div>
      
      <div className="flex w-full flex-col items-center mt-10 md:mt-0 ">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((company, idx) => (
            <CompanyLogo key={`${company.name}-${idx}`} {...company} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s] mt-10 md:mt-0">
          {secondRow.map((company, idx) => (
            <CompanyLogo key={`${company.name}-${idx}`} {...company} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Trusted;