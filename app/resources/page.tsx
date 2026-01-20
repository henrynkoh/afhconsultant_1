import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Resources & Checklists
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Practical tools, checklists, and templates for consultants to use with clients.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                Pre-Inspection Checklist
              </h2>
              <p className="text-gray-700 mb-4">
                Use this checklist 72 hours before the building inspector arrives to ensure 
                first-time success.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Completed WABO Checklist (Sections 1-4)</li>
                <li>8.5 x 11 Floor Plan with all rooms labeled</li>
                <li>Septic/Well documentation if applicable</li>
                <li>All windows measured and verified (44" sill height, 5.7 sq. ft. opening)</li>
                <li>All doors have lever handles (no knobs)</li>
                <li>Grab bars installed and tested (33-36" height, 250 lb. strength)</li>
                <li>Water temperature tested (105-120°F)</li>
                <li>Smoke alarms interconnected and tested</li>
                <li>CO alarms on every level</li>
                <li>Address clearly visible from street</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                Application Readiness Audit
              </h2>
              <p className="text-gray-700 mb-4">
                Final 10-point inspection before submitting to BAAU.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>CEA form completed and notarized</li>
                <li>Financial solvency proof (3-6 months bank statements)</li>
                <li>12-Month Cash Flow Projection completed</li>
                <li>All background check authorizations submitted</li>
                <li>Property documentation (deed or landlord letter)</li>
                <li>Building inspection checklist signed by local official</li>
                <li>All required DSHS forms completed</li>
                <li>Certifications current (CPR, Food Handlers, Admin Training)</li>
                <li>Entity name matches SOS registration exactly</li>
                <li>Complete copies of all documents saved</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                Correction Action Plan Template
              </h2>
              <p className="text-gray-700 mb-4">
                Professional document to respond to inspector if client fails an item.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Item #</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Inspection Finding</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Proposed Correction</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Timeline</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Evidence for Close-out</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">[Deficiency as stated by inspector]</td>
                      <td className="border border-gray-300 px-4 py-2">[Specific fix with method]</td>
                      <td className="border border-gray-300 px-4 py-2">[Realistic completion date]</td>
                      <td className="border border-gray-300 px-4 py-2">[Photo + permit sign-off]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                Client Onboarding Packet
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    The "Golden Rules" of Submission
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li><strong>Keep Your Own Copies:</strong> The BAAU is a record-collecting agency and will not return documents once submitted.</li>
                    <li><strong>Email is King:</strong> The BAAU communicates almost exclusively via email. Check your spam folder daily.</li>
                    <li><strong>Accuracy over Speed:</strong> 98% of applications are returned because they are incomplete.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Application Milestones
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="font-semibold text-gray-700 w-32">Submission:</span>
                      <span className="text-gray-700">Day 0 - Application and fee uploaded via SAW</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-semibold text-gray-700 w-32">BAAU Review:</span>
                      <span className="text-gray-700">15-21 Days - Initial screening for missing items</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-semibold text-gray-700 w-32">Correction Window:</span>
                      <span className="text-gray-700">60 Days - Your time limit to fix any errors found</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-semibold text-gray-700 w-32">RCS Referral:</span>
                      <span className="text-gray-700">Post-Review - Application sent to Residential Care Services for initial inspection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                Key Regulatory References
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Building Codes</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>WAC 51-51-0330 - Building Code for AFHs</li>
                    <li>WAC 388-76-10695 - Physical Environment</li>
                    <li>WAC 388-76-10700 - Building & Fire Safety</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Licensing</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>WAC 388-76-10005 - License Required</li>
                    <li>WAC 388-76-10075 - Application Process</li>
                    <li>WAC 388-76-10105 - Change of Ownership</li>
                    <li>RCW 70.128.120 - Provider Qualifications</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Insurance</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>WAC 388-76-10191 - Liability Insurance Required</li>
                    <li>WAC 388-76-10192 - Coverage Requirements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Legal Protection</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>RCW 64.38.060 - HOA Discrimination Prohibition</li>
                    <li>RCW 70.128.224 - Retroactive Application</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">
                Consultant Best Practices
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Always verify local city/county building department's specific AFH permit process</li>
                <li>Never start construction before the "Change of Use" permit is approved</li>
                <li>Keep a "Compliance Binder" on-site containing floor plan, septic records, and fire drill logs</li>
                <li>Conduct a "shadow interview" with clients before their RCS interview</li>
                <li>Personally verify all fixes before re-inspection (never trust "close enough")</li>
                <li>Maintain backup copies of all client documents</li>
                <li>Set up email alerts for BAAU domain to avoid missing deadlines</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

