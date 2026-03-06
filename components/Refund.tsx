import React from 'react';

export const Refund: React.FC = () => {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-[#f5f5f5] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-10 space-y-10">
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-premium border border-brand-gray/15 space-y-4">
          <p className="text-sm font-semibold text-brand-gold uppercase tracking-wide">Refund Policy</p>
          <h1 className="font-heading text-4xl md:text-5xl text-brand-navy font-semibold leading-tight">
            How we handle refunds for digital products.
          </h1>
          <p className="text-sm text-brand-gray">Effective Date: 9/11/2025</p>
          <p className="text-brand-navy/80 leading-relaxed">
            Our policy covers digital products and outlines limited exceptions where refunds may be considered.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-brand-gray/10 space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-brand-navy font-semibold">1. General Policy</h2>
            <p className="text-brand-navy/80 leading-relaxed">
              At Architech Ascension LLC, we specialize in digital products that are instantly accessible upon purchase. Due to the
              nature of these products, all sales are final and non-refundable. Once a digital product has been purchased and delivered,
              it cannot be returned.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-brand-navy font-semibold">2. Exceptional Circumstances</h2>
            <p className="text-brand-navy/80 leading-relaxed">
              We understand that technical issues can occur. A refund may be considered only under the following specific circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-brand-navy/80">
              <li>Duplicate Purchase: if you accidentally purchase the same digital product more than once, we will refund the duplicate charge.</li>
              <li>
                Corrupt or Non-Functional File: if the digital file you receive is corrupt, non-functional, or otherwise unusable, and we are unable
                to provide a working replacement, a refund will be issued.
              </li>
              <li>
                Significant Misrepresentation: if the digital product was significantly misrepresented in its description and does not match the product
                details provided, a refund may be considered.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-brand-navy font-semibold">3. How to Request a Refund (For Exceptions Only)</h2>
            <p className="text-brand-navy/80 leading-relaxed">
              To request a refund under the exceptional circumstances listed above, you must contact us within seven (7) days of your purchase.
              Your request must be sent to the contact email below and include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-brand-navy/80">
              <li>Your full name and email address used for the purchase.</li>
              <li>Your order number.</li>
              <li>
                A detailed explanation of the issue you are experiencing, including any relevant screenshots or error messages.
              </li>
            </ul>
            <p className="text-brand-navy/80 leading-relaxed">
              We will review your request and respond within a reasonable timeframe. We reserve the right to verify the claim and deny a refund if the
              issue is not confirmed to be a qualifying exception.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-brand-navy font-semibold">4. Contact Information</h2>
            <p className="text-brand-navy/80 leading-relaxed">
              For any questions about this Refund Policy or to submit a refund request, please contact us at:
            </p>
            <div className="bg-brand-gray/5 border border-brand-gray/20 rounded-xl p-5 space-y-1 text-brand-navy/80">
              <p className="font-semibold text-brand-navy">Architech Ascension LLC</p>
              <p>support@atascension.com</p>
              <p>7643 GATE PKWY SUITE 104-9286</p>
              <p>JACKSONVILLE, FL 32256</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-brand-gray/10 rounded-xl p-6 shadow-sm">
          <h3 className="font-heading text-xl text-brand-navy font-semibold mb-2">Need help with a purchase?</h3>
          <p className="text-brand-navy/80 leading-relaxed">
            Reach out and we will review your request promptly.
          </p>
        </div>
      </div>
    </section>
  );
};
