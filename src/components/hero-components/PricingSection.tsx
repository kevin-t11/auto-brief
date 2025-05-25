import { Button } from '@/components/ui/button';
import { CheckCircle, Zap } from 'lucide-react';

export const PricingSection = () => {
  const plans = [
    {
      name: 'Freelancer',
      price: '$15',
      period: '/month',
      description: 'Perfect for individual freelancers',
      features: [
        '3-5 active projects',
        'AI-powered brief generation',
        'Basic templates',
        'PDF export',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Agency',
      price: '$45',
      period: '/month',
      description: 'Ideal for small to medium agencies',
      features: [
        '10-20 active projects',
        'Team collaboration',
        'Custom templates',
        'All export formats',
        'Priority support',
        'White labeling'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$150',
      period: '/month',
      description: 'For large agencies and organizations',
      features: [
        'Unlimited projects',
        'Advanced analytics',
        'API access',
        'Custom integrations',
        'Dedicated support',
        'White labeling',
        'Custom branding'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mx-auto px-4 md:px-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl p-6 shadow-sm border flex flex-col h-full ${plan.popular ? 'border-purple-200 shadow-xl shadow-purple-500/20' : 'border-gray-100'}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                    <Zap className="w-3 h-3 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-5">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{plan.description}</p>
                <div className="flex items-end justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1 text-sm">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-5 flex-grow text-sm">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button
                  className={`w-full text-sm py-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800'
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}>
                  Start Free Trial
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-600">
            💰 <strong>ROI Calculator:</strong> If AutoBrief helps you land 1 extra client or save
            2-3 hours/week, that&apos;s 50× ROI on your investment.
          </p>
        </div>
      </div>
    </section>
  );
};
