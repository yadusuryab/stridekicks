"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site-config";
import Brand from "../brand/brand";

function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname === "/checkout") return null;

  return (
    <footer className="relative bg-[#7ed957]/70 backdrop-blur-xl rounded-t-[32px] border-t border-white/60 shadow-[0_-8px_24px_-4px_rgba(111,207,82,0.35),inset_0_1px_0_0_rgba(255,255,255,0.8)] overflow-hidden">
      {/* top gloss highlight, like light on a bubble */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-1/2 rounded-t-[32px]
                   bg-gradient-to-b from-white/30 to-transparent"
      />

      <div className="relative container mx-auto px-4 py-10">
        <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="flex justify-center col-span-2 items-center">
            <Brand small />
          </div>

          {/* Contact — glossy pill card */}
          <div
            className="
              relative overflow-hidden rounded-2xl p-4 col-span-2 tracking-tight
              bg-gradient-to-b from-[#8FE070] to-[#4FAE33]
              border border-white/40
              shadow-[0_3px_8px_-1px_rgba(79,174,51,0.6),inset_0_1px_1px_0_rgba(255,255,255,0.7)]
            "
          >
            <span className="pointer-events-none absolute top-1 left-3 w-10 h-3 rounded-full bg-white/40 blur-[2px]" />
            <h4 className="relative font-semibold mb-2 text-white">Contact</h4>
            <div className="relative space-y-1 text-sm text-white/90">
              <div>{site.phone}</div>
              {site.address && <div>{site.address}</div>}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/40 text-center text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="flex gap-4">
              <Link
                href="/privacy-policy"
                className="text-[#1A1A1A]/70 hover:text-[#1A1A1A] underline underline-offset-2"
              >
                Privacy
              </Link>
              <Link
                href="/T&C"
                className="text-[#1A1A1A]/70 hover:text-[#1A1A1A] underline underline-offset-2"
              >
                Terms
              </Link>
            </div>
            <h4 className="text-xs text-[#1A1A1A]/70">
              © {currentYear} {site.name.toUpperCase()}. All rights reserved.
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };