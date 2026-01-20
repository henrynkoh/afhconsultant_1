import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md mb-8">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-indigo-700">
            AFH Consultant Masterclass
          </Link>
          <div className="flex gap-4">
            <Link href="/home-inspection" className="text-gray-700 hover:text-indigo-600">
              Home Inspection
            </Link>
            <Link href="/application-submission" className="text-gray-700 hover:text-indigo-600">
              Application
            </Link>
            <Link href="/questions" className="text-gray-700 hover:text-indigo-600">
              Questions
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-indigo-600">
              Resources
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

