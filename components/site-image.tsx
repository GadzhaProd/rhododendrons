import NextImage, { type ImageProps } from "next/image"
import { asset } from "@/lib/base-path"

// Drop-in next/image that also works under a basePath.
//
// next/image normally carries basePath in the optimizer URL it builds, but
// next.config.mjs sets images.unoptimized, and in that mode Next returns the
// src verbatim (see generateImgAttrs in next/dist/shared/lib/get-img-props).
// On the GitHub Pages preview that means /images/... instead of
// /rhododendrons/images/..., i.e. a 404 for every photo.
//
// Import this instead of next/image for anything served from public/.
export function Image({ src, ...props }: ImageProps) {
  return <NextImage src={typeof src === "string" ? asset(src) : src} {...props} />
}
