import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found · Cold Lead Intake",
};

const focusClass =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-10 pt-6 sm:px-6 sm:pb-16 sm:pt-8">
      <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        The page you’re looking for doesn’t exist.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
        <Link
          href="/"
          className={`rounded-md border bg-emerald-700 px-3 py-2.5 text-base font-medium text-white hover:bg-emerald-800 md:py-1.5 md:text-sm ${focusClass}`}
        >
          Back to Home
        </Link>
        <Link
          href="/leads"
          className={`-my-3 inline-block py-3 text-sm text-blue-700 hover:underline dark:text-blue-400 ${focusClass}`}
        >
          View leads
        </Link>
      </div>
    </main>
  );
}
