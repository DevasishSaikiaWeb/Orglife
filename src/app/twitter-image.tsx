export { default, alt, size, contentType } from "./opengraph-image";

// Declared inline rather than re-exported: Next can only read `runtime` when it
// is assigned a string literal in the route file itself.
export const runtime = "nodejs";
