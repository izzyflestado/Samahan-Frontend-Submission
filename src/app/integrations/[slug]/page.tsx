import { notFound } from "next/navigation";
import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import { Navbar } from "@/components/Navbar";
import { integrations } from "@/data/integrations";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function IntegrationPage({ params }: PageProps) {
  const { slug } = await params;
  const integration = integrations.find((i) => i.slug === slug);

  if (!integration) {
    notFound();
  }

  const featureParagraphs = integration.featureBody.split("\n\n");

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      <main className="mx-auto px-6 pt-10 pb-24 lg:px-8 xl:px-[245px]">
        {/* Breadcrumb */}
        <div className="text-sm text-text-secondary">
          <Link href="/" className="hover:text-text-primary transition-colors">
            Integrations
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">{integration.name}</span>
        </div>

        {/* Title */}
        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-text-primary max-w-2xl">
          {integration.description}
        </h1>

        <div className="mt-4 h-px w-full bg-border-c" />

        {/* Mobile-only compact header (image should NOT be first on mobile) */}
        <div className="mt-6 md:hidden">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-bg-card border border-border-c relative shrink-0">
              <ImageWithFallback
                src={integration.icon}
                alt={integration.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-lg font-medium text-text-primary">
                  {integration.name}
                </p>
                <svg
                  className="w-4 h-4 text-focus-ring"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm text-text-secondary">By Linear</p>
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-border-c" />

          <div className="mt-6 space-y-6">
            <div>
              <p className="text-sm font-medium text-text-primary">Website</p>
              <p className="text-sm text-text-secondary mt-1">
                {integration.website}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-text-primary">Contact</p>
              <p className="text-sm text-text-secondary mt-1">Email Linear</p>
            </div>
          </div>
        </div>

        {/* Two column: hero image + sidebar */}

        {/* Two column: hero image + sidebar */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_260px] gap-8 md:gap-10">
          {/* Hero image */}
          <div>
            <div className="relative w-full aspect-[1000/720] rounded-xl overflow-hidden bg-bg-card border border-border-c">
              <ImageWithFallback
                src={integration.heroImage}
                alt={integration.description}
                fill
                className="object-cover"
                priority
                />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-text-secondary max-w-md">
                {integration.description}
              </p>
              <div className="flex gap-2 shrink-0 ml-4">
                <button
                  aria-label="Previous"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-border-c text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
                >
                  ‹
                </button>
                <button
                  aria-label="Next"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-border-c text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="md:pt-0">
            <div className="hidden md:flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-bg-card border border-border-c relative shrink-0">
                <ImageWithFallback
                    src={integration.icon}
                    alt={integration.name}
                    fill
                    className="object-cover"
                    />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-lg font-medium text-text-primary">
                    {integration.name}
                  </p>
                  <svg
                    className="w-4 h-4 text-focus-ring"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm text-text-secondary">By Linear</p>
              </div>
            </div>

            <div className="mt-6 h-px w-full bg-border-c hidden md:block" />

            <div className="mt-6 space-y-6 hidden md:block">
              <div>
                <p className="text-sm font-medium text-text-primary">Website</p>
                <p className="text-sm text-text-secondary mt-1">
                  {integration.website}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-text-primary">Category</p>
                <p className="text-sm text-text-secondary mt-1">
                  {integration.category}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-text-primary">Docs</p>
                <p className="text-sm text-text-secondary mt-1">
                  {integration.docsLabel}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-text-primary">Contact</p>
                <p className="text-sm text-text-secondary mt-1">Email Linear</p>
              </div>
            </div>

            <button className="mt-8 w-full rounded-full bg-text-primary text-bg font-medium text-sm py-2.5 hover:opacity-90 transition-opacity hidden md:block">
              Add to Linear
            </button>
          </aside>
        </div>

        {/* Overview */}
        <section className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-semibold text-text-primary">Overview</h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            {integration.overview}
          </p>
        </section>

        {/* Feature section */}
        <section className="mt-14 max-w-2xl">
          <h2 className="text-2xl font-semibold text-text-primary">
            {integration.featureTitle}
          </h2>
          <div className="mt-4 space-y-4">
            {featureParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-text-secondary leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export function generateStaticParams() {
  return integrations.map((integration) => ({
    slug: integration.slug,
  }));
}