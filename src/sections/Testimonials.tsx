import SectionHeader from "@/components/ui/SectionHeader"
<<<<<<< HEAD
=======
import Image from "next/image"
>>>>>>> 7882a7c (reviewing the code itself)
import { LuQuote } from "react-icons/lu"


const testimonials = [
    {
        name: "David Okafor",
        role: "Startup Founder",
<<<<<<< HEAD
        image: "/images/user1.png",
=======
        image: "/images/profile.png",
>>>>>>> 7882a7c (reviewing the code itself)
        feedback: "Working with Emmanuel was a great experience. He delivered a clean, scalable productions"
    },
    {
        name: "Sarah Johnson",
        role: "Product Designer",
<<<<<<< HEAD
        image: "/images/user2.png",
=======
        image: "/images/profile.png",
>>>>>>> 7882a7c (reviewing the code itself)
        feedback: "Working with Emmanuel was a great experience. He delivered a clean, scalable productions"
    },
    {
        name: "Michael Chen",
        role: "Software Engineer",
<<<<<<< HEAD
        image: "/images/user3.png",
=======
        image: "/images/profile.png",
>>>>>>> 7882a7c (reviewing the code itself)
        feedback: "Working with Emmanuel was a great experience. He delivered a clean, scalable productions"
    },
    {
        name: "Amina Bello",
        role: "Entrepreneur",
<<<<<<< HEAD
        image: "/images/user4.png",
=======
        image: "/images/profile.png",
>>>>>>> 7882a7c (reviewing the code itself)
        feedback: "Working with Emmanuel was a great experience. He delivered a clean, scalable productions"
    },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="w-[90%] max-w-6xl mx-auto space-y-16">
        <SectionHeader 
            title="What people say about me"
            badge="Testimonials"
            description="Feedback from clients and collaborators I have worked with on various projects."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-02 gap-8">
            {
                testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="group relative p-6 rounded-2xl bg-surface border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                    >                        
                        <LuQuote className="absolute top-5 right-5 text-primary/10 w-10 h-10" />

                        <p className="text-gray-300 leading-relaxed mb-6 pr-12">
                            {item.feedback}
                        </p>
<<<<<<< HEAD
=======

                        <div className="flex items-center gap-4">
                            <Image
                                width={50}
                                height={50}
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 rounded-full object-cover border border-border"
                            />
                            <div>
                                <h4 className="text-text font-semibold">{item.name}</h4>
                                <p className="text-sm text-gray-400">{item.role}</p>
                            </div>
                        </div>
>>>>>>> 7882a7c (reviewing the code itself)
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  )
}

export default Testimonials
