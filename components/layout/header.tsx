import Link from "next/link";
import { Suspense } from "react";
import { Fredoka } from "next/font/google";

import { IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";
import { site } from "@/lib/site-config";
import Brand from "../brand/brand";
import { Button } from "../ui/button";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-fredoka",
});

const Header = () => {
  return (
    <>
      <header
        className={`${fredoka.variable} fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-[360px]`}
      >
        <div
          className="
            relative rounded-2xl p-3 px-5
            bg-[#7ed957]/70
            backdrop-blur-xl
            shadow-[0_8px_24px_-4px_rgba(111,207,82,0.35),inset_0_1px_0_0_rgba(255,255,255,0.8)]
            border border-white/60
          "
        >
          {/* top gloss highlight, like light on a bubble */}
          <div
            className="pointer-events-none absolute top-1 left-0 right-0 h-1/2 rounded-t-2xl
                       bg-gradient-to-b from-white/30 to-transparent"
          />

          <div className="relative flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="Stridekicks Home"
            >
              <Suspense
                fallback={
                  <div className="w-24 h-6 bg-[#D9F5C4] rounded-full animate-pulse" />
                }
              >
                <Brand />
              </Suspense>
            </Link>

            {/* Social links — glossy bubble buttons */}
            <div className="flex items-center gap-2.5">
              <Link
                href={`https://instagram.com/${site.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  className="
                    relative w-9 h-9 rounded-full overflow-hidden
                    bg-gradient-to-b from-[#8FE070] to-[#4FAE33]
                    shadow-[0_3px_8px_-1px_rgba(79,174,51,0.6),inset_0_1px_1px_0_rgba(255,255,255,0.7)]
                    text-white
                    transition-all duration-150 ease-out
                    hover:scale-105
                    active:scale-90
                  "
                  aria-label="Follow us on Instagram"
                >
                  <span className="pointer-events-none absolute top-0.5 left-1.5 w-3 h-2 rounded-full bg-white/50 blur-[1px]" />
                  <IconBrandInstagram className="w-4 h-4 relative" strokeWidth={2.25} />
                </Button>
              </Link>
              <Link
                href={`https://wa.me/${site.phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  className="
                    relative w-9 h-9 rounded-full overflow-hidden
                    bg-gradient-to-b from-[#8FE070] to-[#4FAE33]
                    shadow-[0_3px_8px_-1px_rgba(79,174,51,0.6),inset_0_1px_1px_0_rgba(255,255,255,0.7)]
                    text-white
                    transition-all duration-150 ease-out
                    hover:scale-105
                    active:scale-90
                  "
                  aria-label="Contact us on WhatsApp"
                >
                  <span className="pointer-events-none absolute top-0.5 left-1.5 w-3 h-2 rounded-full bg-white/50 blur-[1px]" />
                  <IconBrandWhatsapp className="w-4 h-4 relative" strokeWidth={2.25} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="h-20" />
    </>
  );
};

export default Header;