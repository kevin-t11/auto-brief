import { AlertTriangle, Clock, DollarSign, Users } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: 'Lack of Clarity',
      description:
        'What pages? CMS? Is it eCommerce? Vague requirements lead to confusion and miscommunication.',
      gradient: 'from-red-500/10 to-orange-500/10'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'Time Waste',
      description:
        'You spend hours asking follow-up questions manually through scattered messages and emails.',
      gradient: 'from-orange-500/10 to-yellow-500/10'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: 'Scope Creep',
      description:
        "You think it's a 2-week job, turns into 2 months. Poor planning costs you money and time.",
      gradient: 'from-yellow-500/10 to-amber-500/10'
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: 'Client Dissatisfaction',
      description:
        'Misaligned expectations lead to complaints, revisions, and damaged relationships.',
      gradient: 'from-red-500/10 to-pink-500/10'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50/30 to-violet-50/30" />
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-violet-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              🔥
            </span>{' '}
            What&apos;s the Problem?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Every freelancer and agency faces the same challenges when gathering project
            requirements from clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
          {problems.map((problem, index) => (
            <div key={index} className="group relative h-full">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl opacity-0 group-hover:opacity-100`}
              />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="mb-6 p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 w-fit">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
