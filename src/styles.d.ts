// Allow side-effect imports of plain CSS files (e.g. third-party stylesheets
// like "@egjs/view360/css/view360.min.css"). Next.js only ships types for
// CSS Modules (*.module.css), not for global CSS side-effect imports.
declare module "*.css";
