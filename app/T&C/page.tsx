import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="mt-6">
      <Card>
        <CardContent className="">


          <div className="max-w-3xl mx-auto text-sm space-y-4">
            <h2 className="text-lg font-bold text-center tracking-tight">TERMS & CONDITIONS</h2>

            <section className="bg-secondary rounded-md p-4 ">
              <h3 className="text-sm font-bold tracking-tight">RETURN & REPLACEMENT POLICY</h3>
              <ul className="list-disc ml-4 mt-1 space-y-1">
                <li>Replacement only for wrong size, incorrect item, or damage.</li>
                <li>No returns or refunds for personal preference or dislike.</li>
              </ul>
              <p className="mt-1 font-semibold   tracking-tight">
                Refunds are not available, only replacements.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-semibold">UNBOXING VIDEO REQUIREMENTS</h3>
              <ul className="list-disc ml-4 mt-1 space-y-1">
                <li>
                  A continuous, uncut <span className="font-semibold">360° unboxing video</span> is mandatory for any
                  damage, size, or missing-item claim. <span className="font-semibold">Report within 24 hours.</span>
                </li>
                <li>Video must start by showing the address label and outer packaging.</li>
                <li>Edited or fake unboxing videos are not accepted as proof.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-semibold">AI-GENERATED IMAGES & PRODUCT REPRESENTATION</h3>
              <p className="mt-1">
                Some product visuals are AI-generated for display purposes. We
                aim to match products closely to these images.
              </p>
              <p className="mt-1">
                Minor differences in color, texture, shine, or finish may occur
                due to lighting, AI rendering, screen settings, or stock
                variation. These are normal and not defects.
              </p>
              <p className="mt-1">
                Buy 1 Get 1 / Two Pair ₹1499 offers use 6A-quality replica
                products, priced accordingly. "6A quality" is a market grading
                term only — it does not imply original, branded, or authorized
                goods.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-semibold">RETURNS & REPLACEMENTS (VISUAL VARIATION)</h3>
              <p className="mt-1">
                Differences from lighting, digital rendering, or screen display
                are not manufacturing defects and are not eligible for return
                or replacement.
              </p>
            </section>

            <section className="bg-orange-100 text-orange-800 rounded-md p-4">
              <h3 className="text-sm font-semibold">IMPORTANT NOTES</h3>
              <ul className="list-disc ml-4 mt-1 space-y-1">
                <li>Slight color variation may occur due to photography or screen settings.</li>
                <li>Combo/offer items follow your selected model; minor color shifts may occur based on stock — closest match is ensured.</li>
                <li>Loose threads, removable stains, or minor stitching flaws are not considered damage.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-semibold">KEEP IN MIND</h3>
              <ul className="list-disc ml-4 mt-1 space-y-1">
                <li>Orders cannot be cancelled once placed.</li>
                <li>
                  Replacement courier costs are borne by you, unless the fault
                  is ours — then we cover it once you share the dispatch slip.
                </li>
                <li>Product quality corresponds to the price paid.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-semibold">SHIPPING & DELIVERY</h3>
              <ul className="list-disc ml-4 mt-1 space-y-1">
                <li>We do not own or operate the courier services used.</li>
                <li>
                  Delivery delays by third-party couriers are beyond our
                  control. <span className="font-semibold">24x7 support</span> is available, and unresolved issues
                  are handled through mutual discussion.
                </li>
                <li>Refunds or cancellations are not granted for courier delays.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-semibold">SIZE REPLACEMENT CONDITIONS</h3>
              <p className="mt-1">
                Same-shoe, different-size replacements depend on stock
                availability.
              </p>
              <p className="mt-1">
                If your correct size was delivered, exchanging it for a larger
                or smaller size afterward is not possible — the available size
                range is stated before purchase. Please review sizing carefully
                before ordering.
              </p>
            </section>

            <p className="mt-3 text-center bg-green-100 text-green-800 p-4 rounded-md font-bold text-xs">
              Please read all terms carefully before ordering. For full terms,
              visit our website. Contact us first with any questions.
            </p>

            <p className="mt-3 text-center font-semibold">
              BEST REGARDS, STRIDEKICKS TEAM
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsAndConditions;