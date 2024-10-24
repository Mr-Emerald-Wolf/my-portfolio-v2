import Link from 'next/link'

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 mt-10">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <ul className="space-y-8">
        <li>
          <h2 className="text-2xl font-medium">DEVSOC&apos;23 Portal</h2>
          <p className="text-gray-600">Golang, Docker, MongoDB, Redis, GCP</p>
          <p className="mt-2">Developed and launched a user-friendly web portal for DEVSOC&apos;23 Hackathon, facilitating participant registration, team creation, and project submissions; streamlined the process and increased registration by 40%.</p>
        </li>
        <li>
          <h2 className="text-2xl font-medium">CareBridge</h2>
          <p className="text-gray-600">Golang, Postgres, Redis</p>
          <p className="mt-2">Project built as part of the winning team of VIT Yantra Hackathon, an intra-university hack. CareBridge is an innovative app that integrates advanced technologies such as Machine Learning (ML), and social networking features to provide comprehensive support for the elderly.</p>
        </li>
      </ul>
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
    </div>
  )
}