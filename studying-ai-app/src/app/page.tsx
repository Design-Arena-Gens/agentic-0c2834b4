import Link from "next/link";
import {
  contenderApps,
  primaryRecommendation,
  type SubjectKey,
} from "@/data/apps";

const subjectLabels: Record<SubjectKey, string> = {
  computerScience: "Computer Science",
  accounting: "Accounting",
  business: "Business",
};

const subjectToneClasses: Record<SubjectKey, string> = {
  computerScience: "from-blue-500/10 to-cyan-500/10 border-blue-500/30",
  accounting: "from-emerald-500/10 to-lime-500/10 border-emerald-500/30",
  business: "from-amber-500/10 to-orange-500/10 border-amber-500/30",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative isolate overflow-hidden px-6 pt-16 pb-24 md:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600/20 via-blue-500/10 to-emerald-500/10 blur-3xl" />
        <header className="mx-auto max-w-5xl space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-white/80 backdrop-blur">
            Cambridge Study Advisor · AI Picks 2024
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            The best AI study companion for Cambridge colleges & Tripos heavy
            workloads.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-200/80">
            We evaluated leading AI study platforms against Cambridge&apos;s
            supervision system, term pacing, and specialist tracks in Computer
            Science, Accounting, and Business. Here’s the top choice plus strong
            alternatives to fit different study styles.
          </p>
        </header>
      </div>

      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 pb-24 md:px-12">
        <section className="grid gap-10 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-2xl shadow-indigo-900/20 backdrop-blur">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-indigo-300/70">
                  Top Pick
                </p>
                <h2 className="text-3xl font-semibold text-white">
                  {primaryRecommendation.name}
                </h2>
              </div>
              <Link
                href={primaryRecommendation.url}
                target="_blank"
                className="inline-flex h-12 items-center rounded-full border border-indigo-400/50 bg-indigo-500/20 px-6 text-sm font-semibold text-indigo-100 transition hover:border-indigo-300 hover:bg-indigo-500/30"
              >
                Explore the platform
              </Link>
            </div>
            <p className="text-lg text-slate-200/90">
              {primaryRecommendation.headline}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-indigo-100/80">
              <span className="rounded-full border border-indigo-300/40 bg-indigo-500/10 px-4 py-2">
                {primaryRecommendation.pricing}
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                {primaryRecommendation.bestFor}
              </span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Why it stands out
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-200/80">
                {primaryRecommendation.strengths.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-slate-950/60 p-3"
                  >
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-indigo-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                AI in action
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-200/80">
                {primaryRecommendation.aiFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-slate-950/60 p-3"
                  >
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-emerald-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-white">
              Subject-specific support snapshots
            </h2>
            <p className="max-w-2xl text-sm text-slate-200/70">
              Each subject stream highlights how MagnaMind Cambridge adapts to
              the demands of Tripos content, supervision prep, and term-time
              assessments.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {(Object.keys(subjectLabels) as SubjectKey[]).map((subject) => (
              <article
                key={subject}
                className={`relative overflow-hidden rounded-3xl border bg-gradient-to-br p-6 ${subjectToneClasses[subject]}`}
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                <h3 className="text-lg font-semibold text-white">
                  {subjectLabels[subject]}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-100/80">
                  {primaryRecommendation.subjectSupport[subject]}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-white">Top contenders</h2>
            <p className="max-w-2xl text-sm text-slate-200/70">
              Choose one of these if you need deeper workspace customisation,
              structured video content, or citation-grade research support.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {contenderApps.map((app) => (
              <article
                key={app.name}
                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {app.name}
                  </h3>
                  <p className="text-sm text-indigo-200/80">{app.headline}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {app.pricing}
                  </p>
                </div>
                <div className="space-y-3 text-sm text-slate-200/80">
                  <p>{app.bestFor}</p>
                  <ul className="space-y-2">
                    {app.strengths.map((strength) => (
                      <li
                        key={strength}
                        className="flex gap-2 rounded-xl border border-white/5 bg-slate-950/60 p-2"
                      >
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-indigo-300" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={app.url}
                  target="_blank"
                  className="mt-auto inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  Visit site
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/70 p-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">
              4-week launch plan for Michaelmas term
            </h2>
            <p className="max-w-2xl text-sm text-slate-200/70">
              Use this sprint blueprint to embed MagnaMind Cambridge into your
              routine before supervisions intensify.
            </p>
          </div>
          <ol className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Week 1 · Foundation",
                detail:
                  "Import lecture notes, Tripos past papers, and supervision feedback. Train MagnaMind’s knowledge graph with your college timetable.",
              },
              {
                title: "Week 2 · Subject deep dive",
                detail:
                  "Schedule alternating CS and Accounting AI drills. Use the supervision simulator to rehearse two sessions with peer feedback.",
              },
              {
                title: "Week 3 · Essay & project push",
                detail:
                  "Generate essay scaffolds for business case studies, let the AI critique your arguments, and export flashcards for key models.",
              },
              {
                title: "Week 4 · Exam rehearsal",
                detail:
                  "Run full-length mock exams with adaptive hints, log weak spots, and create a revision cadence for the rest of term.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-5"
              >
                <span className="text-sm uppercase tracking-[0.2em] text-indigo-200/70">
                  {item.title}
                </span>
                <p className="text-sm text-slate-200/80">{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600/50 via-cyan-500/40 to-emerald-500/40 p-8 shadow-2xl shadow-emerald-500/20">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-white">
                Need quick reference sheets?
              </h2>
              <p className="max-w-xl text-sm text-white/80">
                MagnaMind’s Flashburst mode builds 10-minute recap decks for
                supervisions. Pair it with your College library resources, then
                export to Anki for spaced repetition.
              </p>
            </div>
            <Link
              href={primaryRecommendation.url}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Try Flashburst workflow
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 py-10 text-center text-xs text-white/40">
        Curated for Cambridge students · Updated July 2024
      </footer>
    </div>
  );
}
