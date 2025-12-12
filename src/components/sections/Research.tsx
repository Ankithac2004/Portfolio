import { BookOpen } from 'lucide-react';
import Card from '../ui/Card';

export default function Research() {
  return (
    <section id="research" className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Research</h2>

      {/* Research List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

        {/* Research 1 */}
        <Card>
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <BookOpen size={22} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">ML Driven Predictive Modeling of OOK-FSO Systems</h3>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3">
              Developed ML models to analyze and predict traffic flow using historical data, achieving strong accuracy
              across multiple city junctions with optimized preprocessing and regression techniques.
            </p>

            <div className="text-xs md:text-sm text-gray-400 space-y-1">
              <p><span className="text-white font-semibold">Domain:</span> Optical Wireless Communication, OOK–FSO Modeling, Machine Learning for Physical Layer Systems</p>
              <p><span className="text-white font-semibold">Tools:</span> Python, NumPy, Pandas, Regression Models</p>
              <p><span className="text-white font-semibold">Status:</span> Working Draft</p>
            </div>
          </div>
        </Card>

        {/* Research 2 */}
        <Card>
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <BookOpen size={22} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">Embedded Vision for Assistive Devices</h3>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3">
              Exploratory work on integrating embedded hardware with deep learning vision algorithms to support
              assistive navigation systems, focusing on real-time detection accuracy and system performance.
            </p>

            <div className="text-xs md:text-sm text-gray-400 space-y-1">
              <p><span className="text-white font-semibold">Domain:</span> Embedded AI, Computer Vision</p>
              <p><span className="text-white font-semibold">Tools:</span> YOLOv3, ESP32-CAM, Python, OpenCV</p>
              <p><span className="text-white font-semibold">Status:</span> Early Stage Concept</p>
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
}
