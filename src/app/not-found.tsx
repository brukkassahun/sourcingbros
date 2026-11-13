import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-cream px-4">
      <div className="text-center">
        <div className="font-display text-8xl font-black text-gold/20">404</div>
        <h1 className="mt-4 font-display text-3xl font-black text-navy">Page Not Found</h1>
        <p className="mt-3 text-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" strokeWidth={2} /> Go Home
          </Link>
          <Link href="/services" className="btn-ghost">
            <ArrowLeft className="h-4 w-4" strokeWidth={2} /> View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
