import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Component() {
  const skills = [
    {
      category: "Languages",
      items: [
        "Go",
        "Python",
        "JavaScript",
        "Java",
        "C++",
        "HTML",
        "CSS",
        "PHP",
      ],
    },
    {
      category: "Libraries/Frameworks",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "GoFiber",
        "Gin",
        "Kubernetes",
      ],
    },
    {
      category: "Platforms",
      items: ["AWS", "GCP", "Vercel", "Docker", "Railways"],
    },
    {
      category: "Databases",
      items: ["MySQL", "Redis", "PostgreSQL", "MongoDB", "ScyllaDB"],
    },
  ];

  const achievements = [
    "Won First place at VIT Yantra Hack 2023, the largest hackathon in VIT and was awarded Rs.1.2 Lakhs",
    "Contributed to open-source projects made by CodeChef-VIT on GitHub",
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 mt-10">
      <h1 className="text-4xl font-bold mb-8 text-center sm:text-left">
        Skills & Achievements
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {skills.map((skillCategory) => (
          <Card key={skillCategory.category}>
            <CardHeader>
              <CardTitle>{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
