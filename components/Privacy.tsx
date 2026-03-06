import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-[#f5f5f5] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-10 space-y-10">
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-premium border border-brand-gray/15 space-y-4">
          <p className="text-sm font-semibold text-brand-gold uppercase tracking-wide">Privacy Policy</p>
          <h1 className="font-heading text-4xl md:text-5xl text-brand-navy font-semibold leading-tight">
            Your privacy, protected by design.
          </h1>
          <p className="text-sm text-brand-gray">Effective Date: 9/11/2025</p>
          <p className="text-brand-navy/80 leading-relaxed">
            Architech Ascension LLC (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) develops AI-powered automations and websites.
            We are committed to protecting your privacy when you use our websites, applications, and AI-powered services (&quot;Services&quot;).
            This policy explains how we collect, use, share, and safeguard your information in compliance with applicable laws
            (including CalOPPA, CCPA/CPRA, GDPR, and more).
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-brand-gray/10 space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-brand-navy font-semibold">1. Introduction</h2>
            <p className="text-brand-navy/80 leading-relaxed">
              Architech Ascension LLC is deeply committed to protecting your privacy and personal data when you use our Services.
              This Privacy Policy explains how we collect, use, share, and safeguard your information in compliance with applicable privacy laws
              including CalOPPA, CCPA/CPRA, GDPR, and more.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-brand-navy font-semibold">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2 text-brand-navy/80">
              <li>Contact details: name, email, phone, company.</li>
              <li>Usage and technical data: IP address, browser type, device info, cookies.</li>
              <li>Payment and transaction details when applicable.</li>
              <li>
                Data processed via AI-powered features: the text, images, documents, and other content you input into our AI systems,
                as well as logs of your interactions, the AI&apos;s responses, and timestamps.
              </li>
              <li>Communication data: support requests and feedback.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-brand-navy font-semibold">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2 text-brand-navy/80">
              <li>Provide, maintain, and improve our Services.</li>
              <li>Operate AI-powered automations for enhanced functionality and efficiency.</li>
              <li>Fulfill specific user requests by sending input data to third-party AI models.</li>
              <li>Personalize your experience.</li>
              <li>Communicate important updates and support.</li>
              <li>Manage payments securely (if applicable).</li>
              <li>Comply with legal obligations.</li>
              <li>Protect against fraud and security threats.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-brand-navy font-semibold">
              4. Artificial Intelligence, Automated Decision-Making, and Third-Party Providers
            </h2>
            <p className="text-brand-navy/80 leading-relaxed">
              We use AI technologies to deliver features such as automated workflows, content generation, and personalized recommendations.
              Our AI features are powered by third-party AI models and services (e.g., OpenAI).
            </p>
            <div className="space-y-2">
              <h3 className="font-heading text-lg text-brand-navy font-semibold">Data Sharing with Third-Party AI Providers</h3>
              <p className="text-brand-navy/80 leading-relaxed">
                When you use our AI-powered features, the data you input (such as text, images, or documents) is sent to our third-party AI service
                providers for processing. The privacy and data handling practices of these providers are governed by their own privacy policies.
                We do not use your data for our own model training or improvement unless you explicitly opt in.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-heading text-lg text-brand-navy font-semibold">Data Used for Model Training and Improvement</h3>
              <p className="text-brand-navy/80 leading-relaxed">
                We will not use your input data to train or improve our own services. However, third-party AI providers may use your data
                in accordance with their privacy policies.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-heading text-lg text-brand-navy font-semibold">Automated Decision-Making</h3>
              <p className="text-brand-navy/80 leading-relaxed">
                Automated decision-making may impact your access or experience with our Services. You have rights to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-brand-navy/80">
                <li>Request human review of significant AI-driven decisions.</li>
                <li>Object to automated profiling.</li>
                <li>Receive meaningful information about the logic and consequences of automated processes.</li>
              </ul>
              <p className="text-brand-navy/80 leading-relaxed">
                For high-risk AI applications, regular audits and human oversight are in place to ensure fairness and accuracy.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-brand-navy font-semibold">5. Third-Party Services Notice</h2>
            <p className="text-brand-navy/80 leading-relaxed">
              Our Services do not currently use third-party analytics, advertising networks, or email marketing platforms.
              If we integrate such tools in the future, this policy will be updated and users notified accordingly.
              For payment processing, we may use trusted third-party processors (e.g., Stripe, PayPal). Their privacy policies govern your payment information.
              Additionally, our AI features rely on third-party AI service providers, such as OpenAI, to function. Your input data is processed by these services
              as described in Section 3.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-brand-navy font-semibold">6. Consent and Cookie Preferences</h2>
            <p className="text-brand-navy/80 leading-relaxed">
              We request your consent before placing non-essential cookies or activating non-core AI features. We use strictly necessary cookies to operate the site,
              and functional cookies to enhance your experience (e.g., remembering your preferences). You can manage your consent preferences at any time via the
              Consent Center accessible on our site.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-brand-navy font-semibold">7. Security</h2>
            <ul className="list-disc pl-5 space-y-2 text-brand-navy/80">
              <li>Encryption: your data is encrypted both in transit (TLS/SSL) and at rest.</li>
              <li>Access controls: access to your data is restricted to authorized personnel.</li>
              <li>Data residency: we store your data on servers located within the United States.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-brand-navy font-semibold">8. Your Rights</h2>
            <p className="text-brand-navy/80 leading-relaxed">Depending on your location, you can:</p>
            <ul className="list-disc pl-5 space-y-2 text-brand-navy/80">
              <li>Access, correct, or delete your personal data.</li>
              <li>Object or restrict processing (including profiling by AI).</li>
              <li>Opt out of data sales (for California residents).</li>
              <li>Obtain an explanation and human review of automated decisions.</li>
            </ul>
            <p className="text-brand-navy/80 leading-relaxed">
              To exercise these rights or for any inquiries, please contact us at the details below.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-brand-navy font-semibold">9. Children&apos;s Privacy</h2>
            <p className="text-brand-navy/80 leading-relaxed">
              We do not knowingly collect personal data from children under 13 without parental consent. Sensitive data receives special protections as required by law.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-brand-navy font-semibold">10. Regional Compliance</h2>
            <p className="text-brand-navy/80 leading-relaxed">
              Our site detects your region and adjusts notices to comply with regional laws (e.g., GDPR, CCPA). We commit to respecting your local data privacy rights.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-brand-navy font-semibold">11. Updates to This Policy</h2>
            <p className="text-brand-navy/80 leading-relaxed">
              We review and update this Privacy Policy annually or as required. Material changes will be communicated through our website or email.
            </p>
            <p className="text-sm text-brand-gray">Effective Date: 9/11/2025</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-brand-navy font-semibold">12. Contact Us</h2>
            <p className="text-brand-navy/80 leading-relaxed">
              Questions or requests about this Privacy Policy or your data can be directed to:
            </p>
            <div className="bg-brand-gray/5 border border-brand-gray/20 rounded-xl p-5 space-y-1 text-brand-navy/80">
              <p className="font-semibold text-brand-navy">Architech Ascension LLC</p>
              <p>support@atascension.com</p>
              <p>7643 GATE PKWY SUITE 104-9286</p>
              <p>JACKSONVILLE, FL 32256</p>
            </div>
            <p className="text-brand-navy/80 leading-relaxed">
              Questions? Contact us if you have any privacy-related questions or requests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
