import { BookOpen } from 'lucide-react';
import Card from '../ui/Card';

export default function Research() {
  return (
    <section id="research" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Research</h2>

      <Card>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
            <BookOpen size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Research Works Coming Soon</h3>
          <p className="text-gray-400 mb-6">
            Stay tuned for upcoming research publications and academic contributions
          </p>

          <div className="w-full max-w-md text-left space-y-3 text-sm text-gray-400">
            <div className="flex gap-2">
              <span className="font-semibold text-white">Format:</span>
              <span>Title · Venue · Year · Summary</span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-white">Areas:</span>
              <span>Machine Learning · Electronics · Signal Processing</span>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
