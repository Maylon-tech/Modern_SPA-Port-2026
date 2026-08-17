import SectionHeader from "@/components/ui/SectionHeader"


const experiences = [
    {
      role: "Fullstack Enginner",
      company: "Independent Projects",
      period: "2025 - Present",
      description: "Designing and building production-ready web applications with a focus on scalabilitty, performance and clean architecture. Implemented authenctication systems, dashboards and API Integrations.",
      technologies: ["Next.js", "Typescript", "Drizzle ORM", "PostgreSQL", "Zod"],
    },
    {
      role: "Frontend Enginner",
      company: "Open Source Contributions",
      period: "2024 - 2025",
      description: "Contributed to open-source UI Components and improved frontend performance and accessibility. Focused on reusable components and modern design systems.",
      technologies: ["React.js", "tailwindCSS", "Framer Motion", "Shadcn UI"],
    },
    {
      role: "Backend Enginner",
      company: "Side Projects",
      period: "2023 - 2024",
      description: "Built Backend services including REST APIs, authentication flows, and database schemas. Worked on real-time features and data handling..",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Socket.io"],
    },
    {
      role: "Jr Web Developer",
      company: "Self-Driven Learning",
      period: "2022 - 2023",
      description: "Learned core web development concepts and built multiple beginner-to-intermediate projects to strengthen problem-solving and coding fundamentals.",
      technologies: ["HTML", "Typescript", "Javascript", "Git", "CSS", ],
    },
]


const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          title="Experience that"
          highlight="speaks volume"
          badge="Experience"
          description="A timeline of myu growth as a developer, from learning the fundamentals to building fullstack applications"
        />

        <div className="relative mt-14">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
          <div className="space-y-12">
            {
              experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative grid md:grid-cols-2 gap-8"
                >
                  <div className="absolute left-0 md:left-1/2 top0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
                  </div>
                  
                  <div className={`pl-8 md:"pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                    <div className="p-6 rounded-2xl  border border-primary/30 hover:border-primary/50 transition-all duration-500">
                      <span className="text-primary text-sm font-medium">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                      <p className="text-gray-500">{exp.company}</p>
                      <p className="text-sm text-gray-400 mt-4">
                        {exp.description}
                      </p>
                      <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        {
                          exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-surface text-xs rounded-full text-gray-300">
                              {tech}
                            </span>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
