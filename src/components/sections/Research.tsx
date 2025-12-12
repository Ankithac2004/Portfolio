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
              • Built an ML model for 10 Gbps OOK-FSO BER prediction, achieving R² 0.906.
              • Designed and simulated the complete FSO link in OptiSystem and contributed key analysis and revisions to the published research manuscript.
            </p>

            <div className="text-xs md:text-sm text-gray-400 space-y-1">
              <p><span className="text-white font-semibold">Domain:</span> Optical Wireless Communication, OOK–FSO Modeling, Machine Learning for Physical Layer Systems</p>
              <p><span className="text-white font-semibold">Tools:</span> Python, Scikit-learn, OptiSystem, NumPy / Pandas</p>
              <p><span className="text-white font-semibold">Status:</span> Active Research • Manuscript Accepted</p>
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
              <h3 className="text-lg md:text-xl font-semibold">AES-128 and AES-256 FPGA Implementation</h3>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3">
              • Implemented AES-128 and AES-256 in Verilog on FPGA and analysed resource, delay, and power metrics.
              • Contributed to research paper through simulation validation and comparative performance evaluation.
            </p>

            <div className="text-xs md:text-sm text-gray-400 space-y-1">
              <p><span className="text-white font-semibold">Domain:</span> Cryptographic Hardware Design, FPGA Implementation, Digital VLSI Systems</p>
              <p><span className="text-white font-semibold">Tools:</span> Verilog HDL, Xilinx ISE / FPGA Boards, Simulation & Power Analysis Tools</p>
              <p><span className="text-white font-semibold">Status:</span> Completed • Research Manuscript Contribution</p>
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
}
