import Header from '../components/Header'; // Corrected path
import Footer from '../components/layout/Footer'; // Assuming this is the correct Footer

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20"> {/* Adjust pt-20 if header height changes */}
        {children}
      </main>
      <Footer />
    </div>
  );
}