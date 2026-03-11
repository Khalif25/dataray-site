import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <p className="text-sm font-medium">{siteConfig.name}</p>
        <p className="mt-2 text-sm text-neutral-400">{siteConfig.tagline}</p>
        <p className="mt-2 text-sm text-neutral-500">
          © 2026 {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}