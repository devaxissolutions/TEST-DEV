import { Separator } from "@/components/ui/separator";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-8">
            Privacy Policy
          </h1>
          <p className="text-xl text-neutral-500">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Content Section */}
      <div className="py-12 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <div className="max-w-4xl space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-neutral-700 leading-relaxed">
              At DevAxis Solutions, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                <p className="text-neutral-700 leading-relaxed mb-2">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li>Fill out contact forms</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request quotes or services</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Automatically Collected Information</h3>
                <p className="text-neutral-700 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-neutral-700 leading-relaxed mb-3">
              We use the information we collect or receive:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you marketing and promotional communications</li>
              <li>To improve our website and services</li>
              <li>To analyze usage trends and preferences</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
            <p className="text-neutral-700 leading-relaxed mb-3">
              We may share your information in the following situations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger, sale, or acquisition</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid legal requests</li>
              <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your consent</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-neutral-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-neutral-700 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
            <p className="text-neutral-700 leading-relaxed mb-3">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Objection to processing of your information</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
            <p className="text-neutral-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Children&apos;s Privacy</h2>
            <p className="text-neutral-700 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-neutral-700 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-neutral-50 p-6 rounded-lg space-y-2 text-neutral-700">
              <p><strong>Email:</strong> privacy@devaxis.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Business St, Suite 100, City, State 12345</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
