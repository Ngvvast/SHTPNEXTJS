import Link from 'next/link';
import MainLayout from '../layouts/MainLayout';

export default function NotFound() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-700 mb-8">Page Not Found</h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="btn-primary">
          Return to Home
        </Link>
      </div>
    </MainLayout>
  );
}