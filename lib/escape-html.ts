/**
 * Escape HTML special characters in user-provided text before inserting
 * into HTML email bodies (or any HTML context). Prevents HTML/script
 * injection by encoding the five characters that have semantic meaning
 * in HTML: & < > " '.
 *
 * Use this on every user-controlled string that ends up inside an HTML
 * email template. For multi-line content, apply this BEFORE the
 * `\n` -> `<br>` substitution so the line-break tags themselves don't
 * get escaped.
 */
export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
