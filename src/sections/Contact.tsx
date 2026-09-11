
import SectionHeader from "@/components/ui/SectionHeader"
import { LuMail, LuPhone, LuMapPin, LuSend } from "react-icons/lu"

const contactInfo = [
    {
        icon: LuMail,
        label: "Email",
        value: "emmanuel@exemple.com",
        href: "mailto:emmanuel@exemple.com"
    },
    {
        icon: LuPhone,
        label: "Phone",
        value: "+1 (123) 456-7890",
        href: "tel:+11234567890"
    },
    {
        icon: LuMapPin,
        label: "Location",
        value: "Mocanbique, Maputo",
        href: "#"
    },
]

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
        <div className="w-[90%] max-w-6xl mx-auto relative z-10 space-y-16">
          <SectionHeader 
            title="Let's build something great" 
            highlight="something great" 
            badge="Contact"
            description="Have a project in mind or want to discuss potential opportunities? Feel free to reach out!"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* left - form */}
            <form action="" className="p-6 rounded-2xl bg-surface border border-border space-y-5">
              <h3 className="text-lg font-semibold text-text">Send a Message</h3>
              {/* NAME */}
              <div className="">
                <label htmlFor="" className="text-sm text-gray-400 block mb-1">Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-text outline-none focus:border-primary transition"  
                />
              </div>

              {/* EMAIL */}
              <div className="">
                <label htmlFor="" className="text-sm text-gray-400 block mb-1">Email</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-text outline-none focus:border-primary transition"  
                />
              </div>

              {/* OBS */}
              <div className="">
                <label htmlFor="" className="text-sm text-gray-400 block mb-1">Name</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Your Message..."
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-text outline-none focus:border-primary transition resize-none"
                />
              </div>

              <button 
                className="w-full py-3 rounded-full bg-primary text-gray-200 font-medium hover:opacity-90 transition flex items-center justify-center gap-2 cursor-pointer"
                type="submit"
              >
                Send Message
                <LuSend className="w-4 h-4" />
              </button>
            </form>

            {/* right - conatct info */}
            <div className="p-2">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {
                  contactInfo.map((item, index) => (
                    <a href={item.href} className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group" key={index}>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">
                          {item.label}
                        </div>
                        <div className="font-medium">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact
