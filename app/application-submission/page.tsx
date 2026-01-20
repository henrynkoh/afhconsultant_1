import Link from "next/link";
import { applicationSubmissionCurriculum, applicationChecklist } from "@/data/applicationSubmission";

export default function ApplicationSubmissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Module 2: Application Submission
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Navigate WAC 388-76-10005/10075/10700/10106/10035-37, DSHS 27-222-3, 
              and RCW 70.128.120 for successful license applications.
            </p>
          </div>

          {applicationSubmissionCurriculum.map((module) => (
            <div key={module.id} className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-semibold text-indigo-700 mb-2">{module.title}</h2>
              <p className="text-lg text-gray-600 mb-6 italic">{module.objective}</p>
              
              {module.content.map((section, idx) => (
                <div key={idx} className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{section.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{section.content}</p>
                  
                  {section.subsections && section.subsections.map((subsection, subIdx) => (
                    <div key={subIdx} className="ml-4 mb-6 border-l-4 border-indigo-300 pl-4">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">{subsection.title}</h4>
                      {subsection.content && (
                        <p className="text-gray-700 mb-3 leading-relaxed">{subsection.content}</p>
                      )}
                      {subsection.items && (
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          {subsection.items.map((item, itemIdx) => (
                            <li key={itemIdx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
              {applicationChecklist.title}
            </h2>
            <p className="text-gray-700 mb-6">{applicationChecklist.description}</p>
            
            {applicationChecklist.sections.map((section, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500 mb-8">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">
              Top Reasons for Application Return
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Missing Signatures:</strong> Specifically on the Certification or Background authorization pages</li>
              <li><strong>Expired Certifications:</strong> CPR/First Aid or Food Handlers cards that expire during the review process</li>
              <li><strong>Name Mismatches:</strong> The entity name on the SOS registration doesn't match the application name</li>
              <li><strong>CEA Errors:</strong> The person attesting to your 1,000 hours cannot be verified or isn't notarized (if required)</li>
              <li><strong>Missing 60-Day Notice:</strong> For CHOW applications, failure to provide required notice to residents</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

