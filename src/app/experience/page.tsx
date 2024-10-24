import Link from 'next/link'

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 mt-10">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      <ul className="space-y-8">
        <li>
          <h2 className="text-2xl font-medium">SDE Intern - Shortsqueeze</h2>
          <p className="text-gray-600">Oct 2023 – Feb 2024 | Vellore, India</p>
          <ul className="list-disc list-inside mt-2">
            <li>Integrated Razorpay for efficient transactions in the Golang e-commerce backend.</li>
            <li>Architected a high-performance Golang-based e-commerce backend with Scylla DB for scalability.</li>
            <li>Implemented Kafka for real-time order and transaction processing, enhancing system efficiency.</li>
            <li>Established ScyllaDB Multi-DC cluster, optimizing database scalability and performance.</li>
            <li>Engineered a high-availability PostgreSQL architecture by establishing read replicas, resulting in a 20% increase in query performance during peak traffic hours.</li>
          </ul>
        </li>
        <li>
          <h2 className="text-2xl font-medium">Board Member - Web Development Lead, CodeChef VIT</h2>
          <p className="text-gray-600">Nov 2022 – Present | Vellore, India</p>
          <ul className="list-disc list-inside mt-2">
            <li>Ideated and developed open-source projects as a part of Web Development team.</li>
            <li>Built the backend of a website for college-specific resale platform designed for more than 10000 users.</li>
          </ul>
        </li>
        <li>
          <h2 className="text-2xl font-medium">Manager, ic-ETITE&apos;24</h2>
          <p className="text-gray-600">February 2024 | Vellore, India</p>
          <ul className="list-disc list-inside mt-2">
            <li>Led the technical team for ICETITE&apos;24, overseeing development of the main conference website.</li>
            <li>Oversaw the development and deployment of websites for BOLT&apos;24 and TechNext&apos;24 hackathons.</li>
          </ul>
        </li>
        <li>
          <h2 className="text-2xl font-medium">Organiser, DEVSOC&apos;23</h2>
          <p className="text-gray-600">June 2023 | Vellore, India</p>
          <ul className="list-disc list-inside mt-2">
            <li>Part of Organising Committee at South Asia&apos;s biggest student-run hackathon.</li>
            <li>Managed more than 2000 students across the duration of the hack.</li>
          </ul>
        </li>
      </ul>
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
    </div>
  )
}