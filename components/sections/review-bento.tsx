"use client";

import Image from "next/image";
import Link from "next/link";

export function ReviewsBento() {
  return (
    <Link
      href="/reviews"
      className="group relative block w-full max-w-[360px] mx-auto overflow-hidden rounded-2xl bg-[#7ed957]/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_24px_-4px_rgba(111,207,82,0.35),inset_0_1px_0_0_rgba(255,255,255,0.8)] transition-colors hover:bg-[#7ed957]/80"
    >
      {/* top gloss highlight, like light on a bubble */}
      <div className="pointer-events-none absolute top-1 left-0 right-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-white/30 to-transparent" />

      <div className="relative flex flex-col p-5 pb-6">
        {/* Top row: text + floating rating badge */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider text-white/80">
              Customer Love
            </span>
            <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
              Happy Customers
            </h3>
          </div>

          {/* Glossy rating badge */}
          <div
            className="
              relative shrink-0 overflow-hidden rounded-full px-3 py-1.5
              bg-gradient-to-b from-[#8FE070] to-[#4FAE33]
              border border-white/40
              shadow-[0_3px_8px_-1px_rgba(79,174,51,0.6),inset_0_1px_1px_0_rgba(255,255,255,0.7)]
              flex items-center gap-1
            "
          >
            <span className="pointer-events-none absolute top-0.5 left-1.5 w-4 h-1.5 rounded-full bg-white/50 blur-[1px]" />
            <span className="relative text-white text-xs font-semibold">★ 4.9</span>
          </div>
        </div>

        {/* Fanned photo spread */}
        <div className="relative mt-5 h-40 flex items-center justify-center">
          <div className="relative w-24 aspect-[9/16] rounded-xl overflow-hidden border-2 border-white/60 shadow-[0_6px_16px_-2px_rgba(0,0,0,0.3)] -rotate-[10deg] -translate-x-6 z-10 group-hover:-translate-x-8 group-hover:-rotate-[14deg] transition-transform duration-300">
            <Image
              src="/reviews/1.jpeg"
              alt="Customer review"
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
          <div className="relative w-24 aspect-[9/16] rounded-xl overflow-hidden border-2 border-white/70 shadow-[0_8px_20px_-2px_rgba(0,0,0,0.35)] z-20 group-hover:-translate-y-1 transition-transform duration-300">
            <Image
              src="/reviews/2.jpeg"
              alt="Customer review"
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
          <div className="relative w-24 aspect-[9/16] rounded-xl overflow-hidden border-2 border-white/60 shadow-[0_6px_16px_-2px_rgba(0,0,0,0.3)] rotate-[10deg] translate-x-6 z-10 group-hover:translate-x-8 group-hover:rotate-[14deg] transition-transform duration-300">
            <Image
              src="/reviews/1.jpeg"
              alt="Customer review"
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
        </div>

        {/* Bottom: subtext + CTA */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm text-white/70">Real reviews from real people</p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-white group-hover:gap-2 transition-all">
            View all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </div>

      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-[#4FAE33]/30 rounded-full blur-3xl" />
    </Link>
  );
}