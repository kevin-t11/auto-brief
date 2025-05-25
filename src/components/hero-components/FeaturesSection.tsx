import { BarChart, CheckCircle, Puzzle, Shield, Users, Zap } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: 'AI-Powered Intelligence',
      description:
        'Smart forms that adapt and AI analysis that identifies missing requirements automatically.',
      gradient: 'from-purple-500/10 to-violet-500/10'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: 'Client-Friendly Interface',
      description:
        'Beautiful, intuitive forms that clients actually want to fill out. No training required.',
      gradient: 'from-violet-500/10 to-purple-500/10'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
      title: 'Template Library',
      description:
        'Pre-built questionnaires for different project types: websites, apps, branding, and more.',
      gradient: 'from-purple-600/10 to-indigo-500/10'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      title: 'Scope Protection',
      description: 'Set expectations early and prevent costly scope creep with clear requirements',
      gradient: 'from-indigo-500/10 to-purple-600/10'
    },
    {
      icon: <BarChart className="w-6 h-6 text-purple-600" />,
      title: 'ROI Tracking',
      description:
        'Track time saved per project and see your return on investment with detailed analytics.',
      gradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: <Puzzle className="w-6 h-6 text-purple-600" />,
      title: 'Seamless Integration',
      description:
        'Export to PDF, share links, or integrate with Notion, Trello, and other project tools.',
      gradient: 'from-pink-500/10 to-purple-500/10'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/50 to-violet-50/50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 bg-clip-text text-transparent">
              Streamline Requirements
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            AutoBrief comes packed with features designed to save you time and protect your projects
            from scope creep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl opacity-0 group-hover:opacity-100`}
              />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-200/50">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 via-violet-100 to-purple-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
