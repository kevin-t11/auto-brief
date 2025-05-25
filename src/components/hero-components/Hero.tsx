import { Button } from '@/components/ui/button';
import { ShadowIntoLight } from '@/styles/font';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-violet-600/5 to-purple-600/5 pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-violet-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-gradient-to-bl from-violet-400/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 via-violet-100 to-purple-100 text-purple-800 border border-purple-200/50 shadow-lg backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              🚀 Save 10+ Hours Per Client Project
            </span>
          </div>

          <h1 className="text-3xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className={ShadowIntoLight.className}>Stop Chasing</span> Clients for
            <span
              className={`block bg-gradient-to-r from-purple-600 via-red-500 to-purple-700 bg-clip-text text-transparent relative ${ShadowIntoLight.className}`}>
              Project Requirements
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-purple-700/20 blur-xl opacity-30 rounded-lg" />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium px-2 md:px-0">
            AutoBrief helps agencies auto-generate structured client project briefs using AI-powered
            smart forms, follow-ups, and integrations — saving hours per client and avoiding scope
            creep.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 hover:from-purple-700 hover:via-violet-700 hover:to-purple-800 text-lg px-10 py-6 shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 border-0">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-6 border-2 border-purple-200 hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 hover:border-purple-300 transition-all duration-300">
              Watch Demo
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 md:px-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-red-100/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/50 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white text-sm mr-3">
                    ✕
                  </span>
                  Without AutoBrief
                </h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-center text-gray-600">
                    <span className="w-3 h-3 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mr-4"></span>
                    You manually chase client info
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-3 h-3 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mr-4"></span>
                    Info is unstructured and vague
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-3 h-3 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mr-4"></span>
                    Proposals take hours to write
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-3 h-3 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mr-4"></span>
                    Scope creep is common
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50/80 via-violet-50/80 to-purple-100/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-200/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-violet-100/30 to-purple-200/30 pointer-events-none" />
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-violet-500/20 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-green-600 mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-sm mr-3">
                    ✓
                  </span>
                  With AutoBrief
                </h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                    Clients fill a guided form
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                    AI creates a clear brief
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                    AutoBrief generates them in minutes
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                    Expectations are locked early
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
