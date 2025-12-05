import Card from '../ui/Card';

export default function Extra() {
  return (
    <section id="extra" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Extra Works & Social Contributions</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="w-full h-24 rounded-md bg-gradient-to-r from-orange-500 to-red-500 mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold">CODEX</span>
          </div>

          <h3 className="text-xl font-bold mb-1">Design Lead</h3>
          <p className="text-gray-400 mb-1">CODEX, SRM University</p>
          <p className="text-sm text-green-500 mb-4">Aug 2025 – Present</p>

          <ul className="space-y-2">
            <li className="text-sm text-gray-300 flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Created 20+ professional creatives for club events and campaigns</span>
            </li>
            <li className="text-sm text-gray-300 flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Led complete redesign of club website</span>
            </li>
            <li className="text-sm text-gray-300 flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Managed design team of 25+ members</span>
            </li>
            <li className="text-sm text-gray-300 flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Improved club engagement by ~30%</span>
            </li>
          </ul>
        </Card>

        <Card>
          <div className="w-full h-24 rounded-md bg-gradient-to-r from-teal-500 to-green-500 mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold">Community</span>
          </div>

          <h3 className="text-xl font-bold mb-4">Community Volunteer</h3>

          <div className="space-y-4">
            <div>
              <p className="text-gray-300 font-medium mb-2">Volunteer Activities:</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Tech workshop organization and mentoring</li>
                <li>• Community outreach programs</li>
                <li>• Educational initiatives for underprivileged students</li>
                <li>• Environmental awareness campaigns</li>
              </ul>
            </div>

            <p className="text-sm text-gray-400 italic">
              Committed to giving back to the community through technology education and social initiatives.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
