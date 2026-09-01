import Image from "next/image"
import { LuExternalLink } from "react-icons/lu"
import  Link  from "next/link"

interface ProjectCardProps {
    title: string,
    description: string,
    image: string,
    tags: string[],
    liveURL?: string,
    githubURL: string
}

export default function ProjectCard({
    title,
    description,
    image,
    tags,
    liveURL,
    githubURL
}: ProjectCardProps) {

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-surface border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
            {/* Image */}
            <div className="relative h-60 md:h-64 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient/50 opacity-0 group-hover:opacity-100 transition" />

                {/* Content */}
                <div className="p-6 space-y-5">
                    <h3 className="text-xl font-semibold text-text group-hover:text-primary transition">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

                    <div className="flex flex-wrap gap-2">
                        {
                            tags.map((tag) => (
                                <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-border">
                                    {tag}
                                </span>
                            ))
                        }
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-3">
                        {
                            liveURL && (
                                <Link
                                    href={liveURL}
                                    target="_blank"
                                    className="flex items-center gap-1 text-sm text-text-muted hover:text-primary transition"
                                >
                                    <LuExternalLink className="w-4 h-4" />
                                    Live
                                </Link>
                            )
                        }
                        {
                            githubURL && (
                                <Link
                                    href={githubURL}
                                    target="_blank"
                                    className="flex items-center gap-1 text-sm text-text-muted hover:text-primary transition"
                                >
                                    <LuExternalLink className="w-4 h-4" />
                                    GitHub
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}