
import SectionHeader from "@/components/ui/SectionHeader"
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu"

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
      <SectionHeader 
      title="Let's build something great" 
      highlight="something great" 
      badge="Contact"
      description="Have a project in mind or want to discuss potential opportunities? Feel free to reach out!"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* left - form */}
        <form action="" className="p-6 rounded-2xl bg-surface border border-border space-y-5">

        </form>

        {/* right - conatct info */}
      </div>
    </section>
  )
}

export default Contact
