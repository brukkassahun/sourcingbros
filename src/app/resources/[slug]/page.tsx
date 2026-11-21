import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import { articles, getArticleSlugs } from "@/lib/articles";
import { SEO } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import ArticleChart from "@/components/ArticleChart";
import { BreadcrumbSchema, FAQSchema } from "@/components/StructuredData";

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/resources/${article.slug}` },
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${SEO.organization.url}/resources/${article.slug}`,
      type: "article",
      images: [{ url: article.heroImage, width: 1200, height: 630, alt: article.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.heroImage],
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const currentIdx = articles.findIndex((a) => a.slug === params.slug);
  const prevArticle = currentIdx > 0 ? articles[currentIdx - 1] : null;
  const nextArticle = currentIdx < articles.length - 1 ? articles[currentIdx + 1] : null;
  const relatedArticles = articles
    .filter((a) => a.slug !== params.slug && a.category === article.category)
    .slice(0, 3);

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        { name: article.title.substring(0, 30), path: `/resources/${article.slug}` },
      ]} />

      {/* Hero */}
      <section className="bg-navy-gradient text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <Link href="/resources" className="inline-flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-white/50 transition-colors hover:text-gold">
            <ArrowLeft className="h-3 w-3" strokeWidth={2} /> All Articles
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] font-bold uppercase tracking-wider">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-gold">
              <Tag className="h-3 w-3" /> {article.category}
            </span>
            <span className="flex items-center gap-1 text-white/50">
              <Clock className="h-3 w-3" /> {article.readTime}
            </span>
            <span className="flex items-center gap-1 text-white/50">
              <Calendar className="h-3 w-3" /> {new Date(article.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          </div>
          <h1 className="mt-6 font-display text-3xl font-black leading-[1.1] tracking-[-0.01em] sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">{article.description}</p>
        </div>
      </section>

      {/* Hero image */}
      <div className="relative h-64 w-full overflow-hidden sm:h-96">
        <Image
          src={article.heroImage}
          alt={article.heroAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
      </div>

      {/* Article body */}
      <article className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="prose-content">
            {article.content.map((block, i) => {
              switch (block.type) {
                case "h2":
                  return <h2 key={i} className="mt-12 font-display text-2xl font-black text-navy first:mt-0 sm:text-3xl">{block.text}</h2>;
                case "h3":
                  return <h3 key={i} className="mt-8 font-display text-xl font-bold text-navy">{block.text}</h3>;
                case "p":
                  return <p key={i} className="mt-4 text-base leading-relaxed text-navy/80">{block.text}</p>;
                case "ul":
                  return (
                    <ul key={i} className="mt-4 space-y-2">
                      {block.items?.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-base leading-relaxed text-navy/80">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                case "ol":
                  return (
                    <ol key={i} className="mt-4 space-y-2">
                      {block.items?.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-base leading-relaxed text-navy/80">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy font-display text-xs font-black text-gold">{j + 1}</span>
                          {item}
                        </li>
                      ))}
                    </ol>
                  );
                case "table":
                  return (
                    <div key={i} className="my-6 overflow-x-auto rounded-2xl border border-line bg-white">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-line bg-navy text-left">
                            {block.headers?.map((h, j) => (
                              <th key={j} className="px-4 py-3 font-sans text-[11px] font-bold uppercase tracking-wider text-gold">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.rows?.map((row, j) => (
                            <tr key={j} className="border-b border-line/50 last:border-0">
                              {row.map((cell, k) => (
                                <td key={k} className={`px-4 py-3 ${k === 0 ? "font-bold text-navy" : "text-muted"}`}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                case "chart":
                  return block.chartData ? (
                    <ArticleChart
                      key={i}
                      chartType={block.chartType || "bar"}
                      chartTitle={block.chartTitle || ""}
                      chartData={block.chartData}
                      chartUnit={block.chartUnit}
                    />
                  ) : null;
                case "image":
                  return (
                    <figure key={i} className="my-8">
                      <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72">
                        {block.imageSrc && (
                          <Image src={block.imageSrc} alt={block.imageAlt || ""} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
                        )}
                      </div>
                      {block.imageCaption && (
                        <figcaption className="mt-2 text-center text-xs text-muted">{block.imageCaption}</figcaption>
                      )}
                    </figure>
                  );
                case "blockquote":
                  return (
                    <blockquote key={i} className="my-6 border-l-4 border-gold bg-white p-6">
                      <p className="font-display text-lg font-bold leading-relaxed text-navy">{block.text}</p>
                    </blockquote>
                  );
                case "callout":
                  return (
                    <div
                      key={i}
                      className={`my-6 rounded-2xl border p-6 ${
                        block.variant === "warning"
                          ? "border-orange-200 bg-orange-50"
                          : block.variant === "success"
                          ? "border-green-200 bg-green-50"
                          : "border-blue-200 bg-blue-50"
                      }`}
                    >
                      <p className="text-sm leading-relaxed text-navy/80">{block.text}</p>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 overflow-hidden rounded-3xl bg-navy-gradient p-8 text-center text-white">
            <h3 className="font-display text-xl font-black">Need Help Sourcing from China?</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
              Tell us what you need. We'll send you a quote within 48 hours — no obligation.
            </p>
            <a
              href={whatsappLink(`Hello SourcingBros! I read your article "${article.title}" and I'd like to get a quote.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>

          {/* Prev/Next */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between">
            {prevArticle ? (
              <Link href={`/resources/${prevArticle.slug}`} className="group flex flex-1 items-center gap-3 rounded-2xl border border-line bg-white p-4 transition-colors hover:border-gold/40">
                <ArrowLeft className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted">Previous</p>
                  <p className="mt-0.5 text-sm font-bold text-navy group-hover:text-gold">{prevArticle.title}</p>
                </div>
              </Link>
            ) : <div className="flex-1" />}
            {nextArticle ? (
              <Link href={`/resources/${nextArticle.slug}`} className="group flex flex-1 items-center gap-3 rounded-2xl border border-line bg-white p-4 text-right transition-colors hover:border-gold/40 sm:flex-row-reverse">
                <ArrowRight className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted">Next</p>
                  <p className="mt-0.5 text-sm font-bold text-navy group-hover:text-gold">{nextArticle.title}</p>
                </div>
              </Link>
            ) : <div className="flex-1" />}
          </div>
        </div>
      </article>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="font-display text-xl font-black text-navy">Related Articles</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {relatedArticles.map((a) => (
                <Link key={a.slug} href={`/resources/${a.slug}`} className="group rounded-2xl border border-line bg-cream p-5 transition-colors hover:border-gold/40">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold">{a.category}</span>
                  <h3 className="mt-2 text-sm font-bold leading-snug text-navy group-hover:text-gold">{a.title}</h3>
                  <p className="mt-1 text-[11px] text-muted">{a.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
