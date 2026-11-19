import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { founder } from "@/lib/founder";

export default function FounderSpotlight() {
  return (
    <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:gap-12">
      <Link href="/about/founder" className="block max-w-sm overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700" aria-label={`Meet ${founder.name}, founder of DataRay AI Technologies`}>
        <Image
          src={founder.image}
          alt={`${founder.name}, Founder and Technology Lead of DataRay AI Technologies`}
          width={1024}
          height={1024}
          sizes="(max-width: 767px) calc(100vw - 48px), 384px"
          className="aspect-square h-auto w-full object-cover"
        />
      </Link>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-cyan-800">Meet the Founder</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">{founder.name}</h2>
        <p className="mt-3 text-base font-medium text-slate-700">{founder.title}, DataRay AI Technologies</p>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
          A technology entrepreneur, AI and data science professional, and university lecturer connecting intelligent software with real-world business needs.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
          With an MSc in Computer Science with Data Science from the University of Sunderland, UK, Abdinur leads the development of DataRay ERP and ERP+, alongside applied research in explainable healthcare AI.
        </p>
        <Link href="/about/founder" className="mt-6 inline-flex items-center gap-2 border-b border-cyan-700 pb-1 text-sm font-semibold text-cyan-800 transition hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700">
          Read Abdinur&apos;s profile
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
