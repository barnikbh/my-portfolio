import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-start gap-4">
      <h1 className="font-medium text-2xl tracking-tighter">404 — Not Found</h1>
      <p className="text-muted-foreground">
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="text-sm underline underline-offset-4 hover:text-muted-foreground transition-colors"
      >
        ← Back to home
      </Link>
    </section>
  );
}
