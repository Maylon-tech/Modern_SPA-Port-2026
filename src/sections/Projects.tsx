import SectionHeader from "@/components/ui/SectionHeader"


const projects = [
    {
        title: "Fullstack SaaS Dashboard",
        description: "A modern analytics dashboard built with Next.js, Prisma and PostGreSQL featuring authentication, charts, and real-time updates.",
        image: "/images/project1.png/",
        tags: ["Next.js", "Typescript", "Prisma"],
        liveURL: "#",
        githubURL: "#"
    },
    {
        title: "AI Content Generator",
        description: "Generate blog posts and marketing content using AI. Built with OpenAI API, Next.js, and a clean UI system.",
        image: "/images/project1.png/",
        tags: ["Next.js", "OpenAI", "TailwindCSS"],
        liveURL: "#",
        githubURL: "#"
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio showcasing projects, skills, and contact features with smooth animations and modern design.",
        image: "/images/project1.png/",
        tags: ["Next.js", "Framer Motion"],
        liveURL: "#",
        githubURL: "#"
    },
    {
        title: "Real-time Chat Application",
        description: "A Fullstack real-time chat app with authentication, private messaging, and live updates using WebSockets and a scalable backend architecture.",
        image: "/images/project1.png/",
        tags: ["Next.js", "Sock.io", "MongoDB"],
        liveURL: "#",
        githubURL: "#"
    },
]



const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
          <SectionHeader
            title="Some of my recent"
            highlight="work"
            badge="Projects"
            description="A selection of projects showcasing my ability to design, build, and scale modern fullstack applications."
          />
    </section>
  )}

  
export default Projects
