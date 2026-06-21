import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change this to your GitHub repo name if deploying to /repo-name/
// e.g. base: "/almasar/" if your repo is github.com/user/almasar
// Leave as "/" if using a custom domain or root GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "/",
});
