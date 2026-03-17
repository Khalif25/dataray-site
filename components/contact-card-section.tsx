import { Mail, MapPin, Inbox } from "lucide-react";

export default function ContactCardSection() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-md">
        <div className="relative overflow-hidden rounded-[28px] bg-[#0B3B82] px-8 py-10 text-white shadow-[0_20px_60px_rgba(2,20,60,0.35)]">
          {/* subtle background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />
          <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
          <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-40 w-40 bg-white/5 blur-2xl" />

          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold tracking-tight">Contact</h2>

            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/15 text-cyan-200">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-medium tracking-wide">
                    info@dataraysmart.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/15 text-cyan-200">
                  <Inbox className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-medium tracking-wide">
                    P.O. Box: 55
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/15 text-cyan-200">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-medium tracking-wide">
                    Garowe – Somalia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}