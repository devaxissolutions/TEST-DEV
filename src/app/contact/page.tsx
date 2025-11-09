import { Separator } from "@/components/ui/separator";
import { SITE_CONFIG } from "@/config";

const Contact = () => {
  return (
    <div className="md:min-h-screen bg-white">
      {/* hero section */}
      <div className="pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <div className="mx-auto flex items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-8">
              Get in Touch
            </h1>
            <p className="text-xl text-neutral-500">
              Ready to start your next project? We&apos;d love to hear from you.
              Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-16" />

      {/* contact section */}
      <div className="pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* contact form */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* contact info */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-[#7b7b7b] hover:underline"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-[#7b7b7b]">
                  {SITE_CONFIG.address.street}
                  <br />
                  {SITE_CONFIG.address.city}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
                  className="text-[#7b7b7b] hover:underline"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#7b7b7b] hover:text-black">
                    LinkedIn
                  </a>
                  <a href="#" className="text-[#7b7b7b] hover:text-black">
                    Twitter
                  </a>
                  <a href="#" className="text-[#7b7b7b] hover:text-black">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;