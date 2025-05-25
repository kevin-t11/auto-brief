import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, FileText, Zap } from 'lucide-react';

export const SolutionSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ✅ How AutoBrief Solves It
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AutoBrief is a SaaS tool that generates a professional project brief by guiding clients
            through a smart, AI-powered process.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center px-4 md:px-0">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Questions</h3>
                <p className="text-gray-600">
                  Asks relevant questions based on project type and follows up automatically to
                  clarify vague responses.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Brief</h3>
                <p className="text-gray-600">
                  Uses GPT-4 to summarize responses into a clean, structured project brief in
                  seconds.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Export Anywhere</h3>
                <p className="text-gray-600">
                  Exports to PDF, Notion, Trello, or email. Share with your team or use in proposals
                  instantly.
                </p>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
              Try AutoBrief Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8">
            <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Project Title: SaaS Product Landing Page
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Objective:</strong> Build a modern, animated landing page for XYZ AI SaaS
                targeting tech startups.
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Pages Required:</strong> Home, Pricing, Features, FAQ
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Special Requirements:</strong> Hero animation, CTA buttons, contact form
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Timeline:</strong> 3 weeks
              </p>
              <p className="text-sm text-gray-600">
                <strong>Budget:</strong> $3,000
              </p>
            </div>
            <p className="text-sm text-purple-700 text-center">
              ✨ Generated in 10 seconds from client answers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
