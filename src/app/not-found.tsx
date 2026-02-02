// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="text-white bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">
        Go Home
      </Link>
    </div>
  );
}
