import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Perfect for small businesses looking to establish their online presence.",
    features: [
      "Custom Website Design",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Form Integration",
      "3 Months Support",
      "Basic Analytics Setup",
    ],
  },
  {
    name: "Professional",
    price: "$7,500",
    description: "Ideal for growing businesses needing advanced digital solutions.",
    features: [
      "Everything in Starter",
      "Advanced Web Development",
      "E-commerce Integration",
      "Content Management System",
      "Advanced SEO Optimization",
      "Social Media Integration",
      "6 Months Support",
      "Performance Optimization",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Comprehensive solutions for large organizations with complex needs.",
    features: [
      "Everything in Professional",
      "Custom AI Solutions",
      "Multi-platform Development",
      "Advanced Analytics & Reporting",
      "Dedicated Project Manager",
      "24/7 Priority Support",
      "Scalable Architecture",
      "Ongoing Maintenance",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="md:min-h-screen bg-white">
      {/* hero section */}
      <div className="pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <div className="mx-auto flex items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-8">
              Transparent pricing,
              <br />
              exceptional results.
            </h1>
            <p className="text-xl text-neutral-500">
              Choose the perfect plan for your business needs. All packages include our commitment to quality and innovation.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-16" />

      {/* pricing section */}
      <div className="md:py-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <h2 className="text-xl font-bold text-[#7b7b7b] mb-10">
          / Pricing Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-2xl scale-105 md:scale-110"
                  : "bg-white hover:shadow-xl"
              }`}
            >
              {/* Decorative gradient overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                plan.popular ? "" : "bg-gradient-to-br from-neutral-50 to-transparent"
              }`} />
              
              {/* Border effect */}
              <div className={`absolute inset-0 rounded-2xl ${
                plan.popular 
                  ? "bg-gradient-to-br from-white/10 to-transparent" 
                  : "border-2 border-neutral-200 group-hover:border-neutral-300"
              }`} />

              {plan.popular && (
                <div className="absolute -top-0 right-0">
                  <div className="bg-gradient-to-r from-white to-neutral-200 text-black px-6 py-2 rounded-bl-2xl font-semibold text-sm">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="relative p-8">
                {/* Header */}
                <div className="mb-8">
                  <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                    plan.popular ? "text-neutral-400" : "text-neutral-500"
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className={`text-5xl font-bold ${
                      plan.popular ? "text-white" : "text-black"
                    }`}>
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className={`ml-2 text-base font-medium ${
                        plan.popular ? "text-neutral-400" : "text-neutral-500"
                      }`}>
                        /project
                      </span>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed ${
                    plan.popular ? "text-neutral-300" : "text-neutral-600"
                  }`}>
                    {plan.description}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-[1.02] mb-8 ${
                    plan.popular
                      ? "bg-white text-black hover:bg-neutral-100 shadow-lg"
                      : "bg-black text-white hover:bg-neutral-800 shadow-md hover:shadow-lg"
                  }`}
                >
                  Get Started
                </button>

                {/* Divider */}
                <div className={`h-px mb-6 ${
                  plan.popular ? "bg-neutral-700" : "bg-neutral-200"
                }`} />

                {/* Features */}
                <div className="space-y-4">
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                    plan.popular ? "text-neutral-400" : "text-neutral-500"
                  }`}>
                    What&apos;s Included
                  </p>
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <div className={`mt-0.5 rounded-full p-1 ${
                        plan.popular ? "bg-white/10" : "bg-neutral-100"
                      }`}>
                        <Check className={`w-4 h-4 ${
                          plan.popular ? "text-white" : "text-black"
                        }`} />
                      </div>
                      <span className={`text-sm leading-relaxed ${
                        plan.popular ? "text-neutral-200" : "text-neutral-700"
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* additional info section */}
      <div className="md:py-20 px-6 mx-auto 2xl:w-4/5 md:px-16 bg-gray-50">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Need a custom solution?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Every business is unique. If our standard plans don&apos;t fit your needs,
            we offer custom solutions tailored to your specific requirements.
          </p>
          <button className="bg-black text-white py-3 px-8 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Contact Us for Custom Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;