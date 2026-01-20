import Link from "next/link";
import { homeInspectionCurriculum, inspectionChecklist } from "@/data/homeInspection";

export default function HomeInspectionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Module 1: Home Inspection Compliance
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Master WAC 51-51-0330, 388-76-10105/10695/10700, and RCW 64.38.060 requirements 
              for passing building inspections.
            </p>
          </div>

          {homeInspectionCurriculum.map((module) => (
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
              {inspectionChecklist.title}
            </h2>
            <p className="text-gray-700 mb-6">{inspectionChecklist.description}</p>
            
            {inspectionChecklist.sections.map((section, idx) => (
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

          <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500 mb-8">
            <h3 className="text-lg font-semibold text-indigo-900 mb-3">
              Consultant's Logic Framework
            </h3>
            <p className="text-gray-700 mb-3">
              When preparing for the AFH Administrator Training, use these three logical "filters" 
              to find the right answer to any scenario:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Safety First:</strong> Does this answer provide the fastest exit or the highest level of fire protection? (Select the most conservative measurement).</li>
              <li><strong>Accessibility Always:</strong> Does this answer allow a person with zero grip strength or a wheelchair to function independently? (Lever handles, ramps, 32" doors).</li>
              <li><strong>The Paper Trail:</strong> Does the answer involve a signed WAC, RCW, or Government form? (In AFH, if it isn't documented, it didn't happen).</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

