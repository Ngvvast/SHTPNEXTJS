import './globals.css';

export const metadata = {
  title: 'SecureHealth Triad Protocol | Advanced Healthcare Cybersecurity Framework',
  description: 'SecureHealth Triad Protocol provides comprehensive cybersecurity solutions for healthcare organizations, protecting patient data and medical devices through our innovative triad approach.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
