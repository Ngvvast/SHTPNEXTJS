"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong</h1>
        <p className="text-lg text-gray-700 mb-6">
          We apologize for the inconvenience. An unexpected error occurred.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => reset()}
            className="bg-primary-color hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors"
          >
            Try again
          </button>
          <Link href="/" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded transition-colors">
            Return to home
          </Link>
        </div>
      </div>
    </div>
  );
}