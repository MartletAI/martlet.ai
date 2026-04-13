import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
        404 — Page Not Found
      </p>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
        This page doesn&apos;t exist.
      </h1>
      <p className="text-lg text-gray-500 mb-10">
        The page you&apos;re looking for may have been moved, deleted, or never
        existed.
      </p>
      <Link
        href="/"
        className="btn btn-primary px-8 py-3 text-base font-semibold"
      >
        Go back home
      </Link>
    </main>
  );
}
