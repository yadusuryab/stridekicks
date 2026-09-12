"use client";

import Poster2 from "@/public/op3-420-9kb.avif";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IconArrowUpRight } from "@tabler/icons-react";
import { client } from "@/sanityClient";

type BannerData = {
  imageUrl: string;
  link: string;
  title: string;
};

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [bannerFetched, setBannerFetched] = useState(false);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "banner" && isActive == true] | order(orderNumber asc)[0]{
          "imageUrl": image.asset->url,
          link,
          title
        }`
      )
      .then((data) => setBanner(data))
      .catch(() => setBanner(null))
      .finally(() => setBannerFetched(true));
  }, []);

  const imageSrc = banner?.imageUrl || Poster2;
  const href = banner?.link || "/offer?price=1199";
  const alt = banner?.title || "BOGO at ₹999";

  if (!bannerFetched) {
    return (
      <div className="w-full md:max-w-[420px] mx-auto px-4 sm:px-6">
        <div className="relative bg-gray-100 rounded-[28px] overflow-hidden aspect-[2/1] animate-pulse" />
      </div>
    );
  }

  return (
    <div className="w-full md:max-w-[420px] mx-auto px-4 sm:px-6">
      <Link
        href={href}
        className="relative block group rounded-[28px] overflow-hidden shadow-xl shadow-black/10"
        onClick={() => setIsLoading(true)}
      >
        {/* Image */}
        <div className="relative bg-gray-100">
          <Image
            src={imageSrc}
            alt={alt}
            width={800}
            height={400}
            className={`w-full h-auto transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            } ${isLoading ? "opacity-60" : ""}`}
            priority
            fetchPriority="high"
            quality={60}
            sizes="420px"
            placeholder={typeof imageSrc !== "string" ? "blur" : undefined}
            onLoad={() => setImageLoaded(true)}
          />

          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Liquid glass overlay button */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-center">
          <div
            className="
              flex items-center gap-2 px-6 py-3
              rounded-full
              w-full
              justify-between
              bg-white/75 backdrop-blur-xl
              border border-white/30
              shadow-[0_8px_32px_rgba(0,0,0,0.25)]
              text-black font-semibold text-sm sm:text-base
              transition-transform duration-200
              group-hover:scale-105 group-active:scale-95
              before:absolute before:inset-0 before:rounded-full
              before:bg-gradient-to-b before:from-white/40 before:to-transparent
              before:opacity-60 before:pointer-events-none
            "
          >
            <span className="relative z-10">Claim offer</span>
            <IconArrowUpRight className="relative z-10 w-4 h-4" />
          </div>
        </div>

        {/* Top-right floating glass badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white font-semibold uppercase backdrop-blur-md border border-white/30 text-black text-xs font-medium">
          Limited offer
        </div>

        {isLoading && (
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </Link>
    </div>
  );
}