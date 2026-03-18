import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Risk Strategist Workbook | Cyber & Seth',
  description:
    'The framework I used to reposition into GRC leadership. From technical executor to risk advisor in 90 days.',
}

const GUMROAD_URL = 'https://cyberseth.gumroad.com/l/risk-strategy'

const modules = [
  {
    number: '01',
    title: 'Know Your Level',
    description:
      'Diagnose where you actually are — not where your resume says. Includes the Three-Level Career Map assessment.',
  },
  {
    number: '02',
    title: 'The Three Misalignments',
    description:
      'Identify which of the three is blocking your advancement: Wrong Lane, Wrong Language, or Wrong Visibility.',
  },
  {
    number: '03',
    title: 'GRC Decoded',
    description:
      'Understand what GRC actually means as a career lever — not just an acronym or a job title.',
  },
  {
    number: '04',
    title: 'The Repositioning Framework',
    description:
      'The Risk Language Shift, the Strategic Visibility Map, and the Career Narrative Framework.',
  },
  {
    number: '05',
    title: 'The 90-Day Action Blueprint',
    description:
      'Weekly milestones, job search strategy, and five GRC interview scripts with positioning frameworks.',
  },
]

const stats = [
  { value: '$128K', label: 'Avg. Cyber GRC Salary' },
  { value: '27%', label: 'Skills Rated High Priority (ISC2)' },
  { value: '5 Modules', label: 'Plus Bonus Strategy Call' },
]

export default function RiskStrategistWorkbookPage() {
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
            The Risk Strategist Workbook
          </h1>

          {/* Subhead */}
          <p className="font-body font-light text-[#C9A84C] text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            The framework I used to reposition into GRC leadership. From technical executor to risk advisor in 90 days.
          </p>

          {/* Price + CTA row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <Link
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C9A84C] text-[#0D1B2A] font-body font-bold text-sm tracking-widest uppercase py-4 px-10 hover:bg-[#C9A84C]/90 transition-colors duration-200"
            >
              Get the Workbook
            </Link>
            <p className="font-body font-light text-dgray text-sm">
              $197 &middot; One payment. Instant download. Includes strategy call.
            </p>
          </div>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="w-full h-[1px] bg-[#C9A84C]/20" />

      {/* ── WHAT'S INSIDE ── */}
      <section className="bg-[#0D1B2A] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl text-white tracking-wide mb-12">
            What&apos;s Inside
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((mod) => (
              <div
                key={mod.number}
                className="bg-[#0a1520] border border-white/8 p-8 flex flex-col gap-3 hover:border-gold/30 transition-colors duration-300"
              >
                <p className="font-display text-[#C9A84C] text-4xl tracking-wide leading-none">
                  MODULE {mod.number}
                </p>
                <h3 className="font-display text-xl md:text-2xl text-white tracking-wide leading-tight">
                  {mod.title}
                </h3>
                <p className="font-body font-light text-[#8FA8B5] text-sm leading-relaxed">
                  {mod.description}
                </p>
              </div>
            ))}

            {/* Bonus card */}
            <div className="bg-[#0a1520] border border-[#C9A84C]/30 p-8 flex flex-col gap-3 hover:border-gold/60 transition-colors duration-300">
              <p className="font-display text-[#C9A84C] text-4xl tracking-wide leading-none">
                BONUS
              </p>
              <h3 className="font-display text-xl md:text-2xl text-white tracking-wide leading-tight">
                Strategy Call Preparation
              </h3>
              <p className="font-body font-light text-[#8FA8B5] text-sm leading-relaxed">
                Included with purchase. A 30-minute 1:1 strategy call prep worksheet. Book at{' '}
                <a
                  href="https://calendly.com/cyberandseth/strategy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9A84C] hover:text-[#C9A84C]/80 underline underline-offset-2"
                >
                  calendly.com/cyberandseth/strategy
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[#1B4F6B] py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col items-center gap-2">
                <p className="font-display text-[clamp(2rem,5vw,3rem)] text-[#C9A84C] tracking-wide leading-none">
                  {stat.value}
                </p>
                <p className="font-body font-light text-white text-sm tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SETH'S NOTE ── */}
      <section className="bg-[#0D1B2A] py-16 px-6">
        <div className="max-w-3xl mx-auto border-l-4 border-[#C9A84C] pl-8">
          <blockquote className="font-body font-light italic text-dgray text-base md:text-lg leading-relaxed">
            I spent years doing risk assessments, policy work, and security reporting. I was technically capable. I was doing real work. And I was completely invisible to the people who could advance my career. The problem was not my skills. It was my positioning. The frameworks in this workbook are what changed that.
          </blockquote>
          <p className="font-body font-light text-[#C9A84C] text-sm mt-5 tracking-wide">
            — Seth
          </p>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="bg-[#0D1B2A] py-24 px-6 border-t border-white/8">
        <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
          <p className="font-display text-[80px] text-[#C9A84C] leading-none tracking-wide">
            $197
          </p>
          <p className="font-body font-light text-[#8FA8B5] text-base">
            One payment. Instant download. Includes strategy call.
          </p>
          <Link
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A84C] text-[#0D1B2A] font-body font-bold text-sm tracking-widest uppercase py-4 px-12 hover:bg-[#C9A84C]/90 transition-colors duration-200"
          >
            Get the Workbook
          </Link>
          <p className="font-body font-light text-dgray/60 text-xs">
            All purchases fulfilled through Gumroad.
          </p>
        </div>
      </section>
    </>
  )
}
