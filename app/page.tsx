import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import FeaturedCard from "@/components/FeaturedCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6">
        <Hero />

        <SearchBar />

        <section className="mt-20 grid gap-8 md:grid-cols-3">
          <FeaturedCard
            icon="📈"
            title="Financial Analysis"
            description="Analyze revenue, profit, market cap and company growth."
          />

          <FeaturedCard
            icon="📰"
            title="Latest News"
            description="Get AI summarized company news."
          />

          <FeaturedCard
            icon="🤖"
            title="AI Recommendation"
            description="Receive Invest / Hold / Avoid recommendation."
          />
        </section>

        <Footer />
      </div>
    </main>
  );
}