import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, FileText } from "lucide-react";

export default function Component() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:mt-[6rem] mt-10">
      <section id="about" className="mb-12">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
          Shivam Sharma
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <div className="w-full sm:w-1/3 order-1 sm:order-2 mb-6 sm:mb-0">
            <Image
              src="/images/shivam.jpeg"
              alt="Shivam Sharma"
              width={300}
              height={300}
              className="rounded-full w-48 h-48 sm:w-full sm:h-auto mx-auto sm:ml-auto"
            />
          </div>
          <div className="w-full sm:w-2/3 order-2 sm:order-1">
            <p className="mb-6 text-base sm:text-lg text-center sm:text-left">
              I&apos;m a Computer Science Engineering student at Vellore
              Institute of Technology with a passion for web development and
              software engineering. I have experience in various programming
              languages and frameworks, and I&apos;m always eager to learn and
              apply new technologies.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <Link
                href="https://www.linkedin.com/in/shivam-sharma-6a0b1b1a7/"
                className="text-gray-600 text-xl p-1 hover:text-black flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/Mr-Emerald-Wolf"
                className="text-gray-600 text-xl p-1 hover:text-black flex items-center gap-2"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">GitHub</span>
              </Link>
              <Link
                href="https://bit.ly/3WxcPEr"
                className="text-gray-600 text-xl p-1 hover:text-black flex items-center gap-2"
              >
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <nav className="mb-12">
        <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-base sm:text-lg">
          <li>
            <Link href="/experience" className="text-gray-600 text-xl p-1 hover:underline">
              Experience
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-gray-600 text-xl p-1 hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/skills" className="text-gray-600 text-xl p-1 hover:underline">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/education" className="text-gray-600 text-xl p-1 hover:underline">
              Education
            </Link>
          </li>
        </ul>
      </nav>

      <footer className="text-center text-gray-600 text-xl p-1 text-xs sm:text-sm">
        <p>© 2024 Shivam Sharma. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
