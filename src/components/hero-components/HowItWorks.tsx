import { ArrowRight, Brain, Download, MessageSquare, Sparkles } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      title: 'Smart Form',
      description:
        'Client fills out an intelligent form that adapts based on their project type and previous answers.',
      details: ['Dynamic questions', 'Visual examples', 'Progress tracking'],
      gradient: 'from-purple-500 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50'
    },
    {
      number: '02',
      icon: <Brain className="w-8 h-8 text-white" />,
      title: 'AI Analysis',
      description:
        'Our AI analyzes responses and generates a comprehensive, structured project brief instantly.',
      details: ['GPT-4 powered', 'Professional format', 'Gap detection'],
      gradient: 'from-violet-500 to-purple-600',
      bgGradient: 'from-violet-50 to-purple-50'
    },
    {
      number: '03',
      icon: <Download className="w-8 h-8 text-white" />,
      title: 'Export & Share',
      description:
        'Download as PDF, share as a link, or integrate with your favorite project management tools.',
      details: ['Multiple formats', 'Team sharing', 'Integration ready'],
      gradient: 'from-purple-600 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50/30 to-violet-50/50" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-200/40 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-violet-200/40 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-200/50 shadow-lg mb-6">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Three Simple Steps to
            <span className="block bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 bg-clip-text text-transparent">
              Perfect Briefs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform chaotic client communication into structured project briefs with our
            intelligent automation.
          </p>
        </div>

        {/* Modern Timeline Design */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-200 via-violet-300 to-purple-200 hidden lg:block" />

          <div className="space-y-16 lg:space-y-24 px-4 md:px-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Step Content */}
                <div className={`flex-1 max-w-lg ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <div className="group cursor-pointer">
                    {/* Step Number Badge */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg mb-6 group-hover:scale-110 transition-all duration-300`}>
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                    {/* Feature Pills */}
                    <div
                      className={`flex flex-wrap gap-3 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                      {step.details.map((detail, detailIndex) => (
                        <span
                          key={detailIndex}
                          className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/80 backdrop-blur-sm text-purple-700 border border-purple-100 shadow-sm">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Central Icon Circle */}
                <div className="relative z-20 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} shadow-2xl flex items-center justify-center group hover:scale-110 transition-all duration-300`}>
                    {step.icon}
                    {/* Pulse animation */}
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} opacity-30 animate-ping`}
                    />
                  </div>
                </div>

                {/* Visual Card */}
                <div className="flex-1 max-w-lg">
                  <div
                    className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-300`}>
                    {/* Floating card effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl transform rotate-1 group-hover:rotate-2 transition-transform" />
                    <div
                      className={`relative bg-gradient-to-br ${step.bgGradient} rounded-3xl p-8 shadow-lg border border-white/50 backdrop-blur-sm`}>
                      {/* Mockup content */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-br ${step.gradient} opacity-80`}
                          />
                          <div className="h-3 bg-gray-200 rounded-full flex-1" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-100 rounded-full w-full" />
                          <div className="h-2 bg-gray-100 rounded-full w-3/4" />
                          <div className="h-2 bg-gray-100 rounded-full w-1/2" />
                        </div>
                        <div
                          className={`h-12 bg-gradient-to-r ${step.gradient} rounded-xl opacity-20 flex items-center justify-center`}>
                          <span className="text-white font-medium opacity-70">{step.title}</span>
                        </div>
                      </div>

                      {/* Floating elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce delay-300" />
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-80 animate-bounce delay-700" />
                    </div>
                  </div>
                </div>

                {/* Arrow connector (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 hidden lg:block">
                    <ArrowRight className="w-6 h-6 text-purple-400 animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 border border-purple-100/50 shadow-xl">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Ready in Minutes</p>
              <p className="text-sm text-gray-600">From chaos to clarity, instantly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
