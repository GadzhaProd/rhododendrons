// URL prefix for the deployment. Empty for the normal site (served from the
// domain root); "/rhododendrons" for the GitHub Pages preview, where the site
// lives under https://<user>.github.io/<repo>.
//
// next/link, next/image and next/font apply basePath from next.config.mjs on
// their own. Use this helper only for raw <img>, <video>, <source> and any
// other hand-written path to a file in public/.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

export function asset(path: string): string {
  return `${basePath}${path}`
}
