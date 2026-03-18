import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "The Career Toolkit | Cyber & Seth",
  description:
    "Two plug-and-play workbooks that map your domain, track your wins, and build your promotion case — so you stop hoping and start engineering.",
}

const GUMROAD_URL = 'https://cyberandseth.gumroad.com/l/career-toolkit'

const workbook1Tabs = [
  'START HERE',
  'Company & Business Intel',
  'Security Program',
  'Risk & Threat Landscape',
  'Key Stakeholders',
  'Processes & Procedures',
  'Knowledge Gaps & Learning',
]

const workbook2Tabs = [
  'START HERE',
  'Strengths & Opportunities',
  '1-on-1 Meeting Log',
  '90-Day Action Plan',
  'Sr. Role Benchmark',
  'Brag Sheet & Wins',
  'Market Intelligence',
  'Network & Sponsors',
  'Remote Networking Ritual',
]

const included = [
  '2 Excel workbooks (instant download)',
  '14 worksheets total',
  'Step-by-step instructions on every cover sheet',
  'Lifetime access to updates',
]

const whoFor = [
  'Security analysts targeting Senior roles',
  'IT pros breaking into GRC or risk',
  'Remote workers who need a visibility system',
  "Anyone who's watched less-qualified people get promoted",
]

export default function CareerToolkitPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#0D1B2A] pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto border-l-4 border-[#C9A84C] pl-8">
          {/* Eyebrow */}
          <p className="font-body font-light text-[#4A9BC4] text-xs tracking-[0.25em] uppercase mb-4">
            Track A — Move Up
          </p>

          {/* Headline */}
          <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] text-white leading-none tracking-wide mb-6">
            The Career Toolkit Senior Security Analysts Don&apos;t Share
          </h1>

          {/* Subhead */}
          <p className="font-body font-light text-[#C9A84C] text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            Two plug-and-play workbooks that map your domain, track your wins, and build your promotion case — so you stop hoping and start engineering.
          </p>

          {/* Price + CTA row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <Link
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C9A84C] text-[#0D1B2A] font-body font-bold text-sm tracking-widest uppercase py-4 px-10 hover:bg-[#C9A84C]/90 transition-colors duration-200"
            >
              Buy Now
            </Link>
            <p className="font-body font-light text-dgray text-sm">
              $97 &middot; One payment. Instant download. Use it forever.
            </p>
          </div>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="w-full h-[1px] bg-[#C9A84C]/20" />

      {/* ── BODY COPY ── */}
      <section className="bg-[#0D1B2A] py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          <p className="font-body text-white text-base md:text-lg leading-relaxed">
            You&apos;re not getting promoted because you&apos;re good at security.
          </p>
          <p className="font-body font-light text-dgray text-base md:text-lg leading-relaxed">
            You&apos;re getting passed over because the people getting promoted are visible. They know the business. They document their wins. They have sponsors in the room when decisions get made.
          </p>
          <p className="font-body font-light text-[#C9A84C] text-base md:text-lg leading-relaxed font-semibold">
            This toolkit fixes that.
          </p>
        </div>
      </section>

      {/* ── TWO WORKBOOK CARDS ── */}
      <section className="bg-[#0D1B2A] pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Workbook 1 */}
          <div className="bg-[#0a1520] border-t-4 border-[#C9A84C] p-8 flex flex-col gap-5">
            <p className="font-mono text-[#C9A84C] text-[11px] tracking-widest uppercase">
              Workbook 1 &middot; 7 Tabs
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-white tracking-wide leading-tight">
              The InfoSec Analyst Knowledge Base
            </h2>
            <p className="font-body font-light text-dgray text-sm leading-relaxed">
              Six tabs that force you to understand everything a Senior analyst should know — the business you protect, your security program, the threat landscape, key stakeholders, critical processes, and your own gaps. Stop being the person who only knows their corner.
            </p>
            <ul className="flex flex-col gap-2 mt-2">
              {workbook1Tabs.map((tab) => (
                <li key={tab} className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-0.5 leading-none">&#9656;</span>
                  <span className="font-body font-light text-sm text-dgray">{tab}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Workbook 2 */}
          <div className="bg-[#0a1520] border-t-4 border-[#C9A84C] p-8 flex flex-col gap-5">
            <p className="font-mono text-[#C9A84C] text-[11px] tracking-widest uppercase">
              Workbook 2 &middot; 9 Tabs
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-white tracking-wide leading-tight">
              The Senior InfoSec Career Tracker
            </h2>
            <p className="font-body font-light text-dgray text-sm leading-relaxed">
              Nine tabs that run your promotion like a project — strengths audit, 1-on-1 meeting log, 90-day action plan, role benchmarking, brag sheet, salary intel, sponsor tracking, and a weekly networking ritual for remote workers.
            </p>
            <ul className="flex flex-col gap-2 mt-2">
              {workbook2Tabs.map((tab) => (
                <li key={tab} className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-0.5 leading-none">&#9656;</span>
                  <span className="font-body font-light text-sm text-dgray">{tab}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-[#1B4F6B] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-white tracking-wide mb-8">
            What&apos;s Included
          </h2>
          <ul className="flex flex-col gap-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="text-[#C9A84C] text-lg leading-none mt-0.5">&#10003;</span>
                <span className="font-body font-light text-white text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="bg-[#0D1B2A] py-16 px-6">
        <div className="max-w-4xl mx-auto border-l-4 border-[#C9A84C] pl-8">
          <h2 className="font-display text-3xl md:text-4xl text-white tracking-wide mb-8">
            Who This Is For
          </h2>
          <ul className="flex flex-col gap-4">
            {whoFor.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="text-[#C9A84C] leading-none mt-1">&#9656;</span>
                <span className="font-body font-light text-dgray text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="bg-[#0D1B2A] py-24 px-6 border-t border-white/8">
        <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
          <p className="font-display text-[80px] text-[#C9A84C] leading-none tracking-wide">
            $97
          </p>
          <p className="font-body font-light text-[#8FA8B5] text-base">
            One payment. Instant download. Use it forever.
          </p>
          <Link
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A84C] text-[#0D1B2A] font-body font-bold text-sm tracking-widest uppercase py-4 px-12 hover:bg-[#C9A84C]/90 transition-colors duration-200"
          >
            Buy Now
          </Link>
          <p className="font-body font-light text-dgray/60 text-xs">
            All purchases fulfilled through Gumroad.
          </p>
        </div>
      </section>
    </>
  )
}
