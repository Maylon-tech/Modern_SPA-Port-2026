

interface SectionHeaderProps {
    badge?: string,
    title: string,
    highlight?: string,
    description?: string
}



const SectionHeader = ({
    badge,
    title,
    highlight,
    description
}: SectionHeaderProps) => {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-4">
        {/* Badge */}
      {
            badge && (
            <span className="inline-block text-sm text-primary bg-primary/10 px-4 py-1.5 rounded-0full border border-border">
                { badge }
            </span>
        )}

         {/* Title  */}
         <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight">
            {title}{" "} { highlight && <span className="text-primary">{highlight}</span>}
         </h2>
        {
            description && (
                <p className="text-gray-400 max-w-xl mx-auto">
                    {description}
                </p>
            )
        }

          
    </div>
  )
}

export default SectionHeader
