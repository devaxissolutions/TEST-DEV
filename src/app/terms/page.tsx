import { Separator } from "@/components/ui/separator";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-8">
            Terms of Service
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
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-neutral-700 leading-relaxed">
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and DevAxis Solutions (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), concerning your access to and use of our website and services. You agree that by accessing the website, you have read, understood, and agreed to be bound by all of these Terms of Service.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <p className="text-neutral-700 leading-relaxed mb-3">
              DevAxis Solutions provides the following services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Web development and design</li>
              <li>Mobile application development</li>
              <li>AI and machine learning solutions</li>
              <li>Digital marketing services</li>
              <li>Technical consulting and support</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Property</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Unless otherwise indicated, the website and services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website (collectively, the &quot;Content&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Your License</h3>
                <p className="text-neutral-700 leading-relaxed">
                  We grant you a limited, non-exclusive, non-transferable license to access and use our website and services for your personal or business purposes, subject to these Terms of Service.
                </p>
              </div>
            </div>
          </section>

          {/* User Representations */}
          <section>
            <h2 className="text-2xl font-bold mb-4">User Representations</h2>
            <p className="text-neutral-700 leading-relaxed mb-3">
              By using our services, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>All registration information you submit will be true, accurate, current, and complete</li>
              <li>You will maintain the accuracy of such information</li>
              <li>You have the legal capacity and agree to comply with these Terms of Service</li>
              <li>You are not a minor in the jurisdiction in which you reside</li>
              <li>You will not access the services through automated or non-human means</li>
              <li>You will not use the services for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          {/* Prohibited Activities */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Prohibited Activities</h2>
            <p className="text-neutral-700 leading-relaxed mb-3">
              You may not access or use the services for any purpose other than that for which we make the services available. Prohibited activities include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Systematically retrieving data or content to create a collection or database</li>
              <li>Making unauthorized use of the services</li>
              <li>Using the services to advertise or offer to sell goods and services</li>
              <li>Circumventing, disabling, or interfering with security-related features</li>
              <li>Engaging in unauthorized framing of or linking to the services</li>
              <li>Interfering with, disrupting, or creating an undue burden on the services</li>
              <li>Attempting to impersonate another user or person</li>
              <li>Using any information obtained from the services to harass, abuse, or harm another person</li>
            </ul>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Payment and Billing</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Pricing</h3>
                <p className="text-neutral-700 leading-relaxed">
                  All prices are subject to change without notice. We reserve the right to modify our pricing structure at any time. Any price changes will be communicated to you in advance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Payment Terms</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Payment is due according to the terms specified in your service agreement. Late payments may result in suspension of services and may incur additional fees.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Refunds</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Refund policies are determined on a case-by-case basis and will be outlined in your specific service agreement.
                </p>
              </div>
            </div>
          </section>

          {/* Service Level */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Service Level and Availability</h2>
            <p className="text-neutral-700 leading-relaxed">
              While we strive to provide uninterrupted access to our services, we do not guarantee that our services will be available at all times. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-neutral-700 leading-relaxed">
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the services, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
            <p className="text-neutral-700 leading-relaxed">
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys&apos; fees and expenses, made by any third party due to or arising out of your use of the services or breach of these Terms of Service.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="text-neutral-700 leading-relaxed">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service. Upon termination, your right to use the services will immediately cease.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-neutral-700 leading-relaxed">
              These Terms of Service and your use of the services are governed by and construed in accordance with the laws applicable in our jurisdiction, without regard to its conflict of law principles.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
            <p className="text-neutral-700 leading-relaxed">
              Any disputes arising out of or relating to these Terms of Service or the services shall be resolved through binding arbitration in accordance with the applicable arbitration rules, rather than in court, except that you may assert claims in small claims court if your claims qualify.
            </p>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Modifications to Terms</h2>
            <p className="text-neutral-700 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the new Terms of Service on this page and updating the &quot;Last updated&quot; date. Your continued use of the services after any such changes constitutes your acceptance of the new Terms of Service.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-neutral-50 p-6 rounded-lg space-y-2 text-neutral-700">
              <p><strong>Email:</strong> legal@devaxis.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Business St, Suite 100, City, State 12345</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
