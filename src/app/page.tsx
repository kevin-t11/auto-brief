import { auth } from '@/auth';
import { FeaturesSection } from '@/components/hero-components/FeaturesSection';
import { Footer } from '@/components/hero-components/Footer';
import { Hero } from '@/components/hero-components/Hero';
import { HowItWorks } from '@/components/hero-components/HowItWorks';
import { Navigation } from '@/components/hero-components/Navigation';
import { PricingSection } from '@/components/hero-components/PricingSection';
import { ProblemSection } from '@/components/hero-components/ProblemSection';
import { SolutionSection } from '@/components/hero-components/SolutionSection';
import { headers } from 'next/headers';
import Dashboard from './dashboard/page';

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  console.log(session);
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-transparent to-violet-100/20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-violet-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <Navigation session={session} />
        {session?.user ? (
          <div>
            <Dashboard />
          </div>
        ) : (
          <div>
            <Hero />
            <ProblemSection />
            <SolutionSection />
            <FeaturesSection />
            <HowItWorks />
            <PricingSection />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}
