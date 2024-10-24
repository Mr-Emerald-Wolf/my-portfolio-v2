import Link from "next/link";

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 mt-10">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <ul className="space-y-8">
        <li>
          <h2 className="text-2xl font-medium">
            <Link
              href="https://github.com/CodeChefVIT/devsoc23-backend"
              className="hover:underline"
            >
              DEVSOC&apos;23 Portal
            </Link>
          </h2>
          <p className="text-gray-600">Golang, Fiber, Docker, MongoDB, Redis, GCP</p>
          <p className="mt-2">
            Developed and launched a user-friendly web portal for DEVSOC&apos;23
            Hackathon, facilitating participant registration, team creation, and
            project submissions; streamlined the process and increased
            registration by 40%.
          </p>
        </li>
        <li>
          <h2 className="text-2xl font-medium">
            <Link
              href="https://github.com/Mr-Emerald-Wolf/yantra-backend"
              className="hover:underline"
            >
              CareBridge
            </Link>
          </h2>
          <p className="text-gray-600">Golang, Postgres, Redis</p>
          <p className="mt-2">
            Project built as part of the winning team of VIT Yantra Hackathon,
            an intra-university hack. CareBridge is an innovative app that
            integrates advanced technologies such as Machine Learning (ML), and
            social networking features to provide comprehensive support for the
            elderly.
          </p>
        </li>
        <li>
          <h2 className="text-2xl font-medium">
            <Link
              href="https://github.com/CodeChefVIT/cookoff-backend"
              className="hover:underline"
            >
              CookOff 8.0 Backend
            </Link>
          </h2>
          <p className="text-gray-600">
            Node.js, Express, MongoDB, Docker, Kubernetes
          </p>
          <p className="mt-2">
            Designed and developed the backend for CodeChef VIT&apos;s flagship
            coding event, CookOff 8.0, managing users, submissions, and
            competition tasks efficiently.
          </p>
        </li>
        <li>
          <h2 className="text-2xl font-medium">
            ICETITE&apos;24 Conference Backend
          </h2>
          <p className="text-gray-600">Golang, Fiber, Postgres, Docker</p>
          <p className="mt-2">
            Built the website for the ICETITE&apos;24 conference, including sub
            events like for the Bolt and TechNext hackathons ensuring smooth
            management of participants and activities.
          </p>
        </li>
      </ul>
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
