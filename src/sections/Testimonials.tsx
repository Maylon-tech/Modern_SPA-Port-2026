import SectionHeader from "@/components/ui/SectionHeader"
import { LuQuote } from "react-icons/lu"


const testimonials = [
    {
        name: "David Okafor",
        role: "Startup Founder",
        image: "/images/user1.png",
        feedback: "Working with Emmanuel was a great experience. He delivered a clean, scalable productions"
    },
    {
        name: "Sarah Johnson",
        role: "Product Designer",
        image: "/images/user2.png",
        feedback: "Working with Emmanuel was a great experience. He delivered a clean, scalable productions"
    },
    {
        name: "Michael Chen",
        role: "Software Engineer",
        image: "/images/user3.png",
        feedback: "Working with Emmanuel was a great experience. He delivered a clean, scalable productions"
    },
    {
        name: "Amina Bello",
        role: "Entrepreneur",
        image: "/images/user4.png",
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
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  )
}

export default Testimonials
