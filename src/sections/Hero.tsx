import DotGrid from "@/components/hero/background"



const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center pt-30 py-10">
        {/* background glow */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
        
        {/* background */}
          <div className="inset-0 absolute" style={{ width: '100%', height: '700px', position: 'relative' }}>
            <DotGrid
                dotSize={3}
                gap={15}
                baseColor="#2F293A"
                activeColor="#20b2a6"
                proximity={120}
                shockRadius={250}
                shockStrength={5}
                resistance={750}
                returnDuration={1.5}
            />
        </div>
        {/* Content */}
        <div className="relative z-10 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          
          {/* leftSide */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm border border-border">
              FullStack Developer * Next.js * Specialist
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text">
            Building Modern Web Experience with <span className="text-primary/70">clean code</span>
          </h1>
          </div>

          {/* rightSide */}


        </div>
      
    </section>
  )
}

export default Hero
