import Link from 'next/link'

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 mt-10">
      <h1 className="text-4xl font-bold mb-8">Education</h1>
      <ul className="space-y-8">
        <li>
          <h2 className="text-2xl font-medium">Vellore Institute of Technology</h2>
          <p className="text-gray-600">Sep 2021 – Present | Vellore, India</p>
          <p className="mt-2">B. Tech in Computer Science Engineering</p>
        </li>
        <li>
          <h2 className="text-2xl font-medium">St. Thomas&apos; School Dwarka</h2>
          <p className="text-gray-600">Graduated June 2021 | Delhi, India</p>
          <p className="mt-2">Senior Secondary - PCM - Percentage: 94.4%</p>
        </li>
      </ul>
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
    </div>
  )
}