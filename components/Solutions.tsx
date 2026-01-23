const features = [
  {
    // Diamond Jewel Icon
    icon: (props: any) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Top part of diamond */}
      <path d="M6 9L2 9 12 2 22 9 18 9"/>
      {/* Bottom part of diamond */}
      <path d="M2 9L12 22 22 9"/>
      {/* Inner lines */}
      <path d="M7 9L12 22"/>
      <path d="M12 2L12 22"/>
      <path d="M17 9L12 22"/>
      </svg>
    ),
    title: "Premium Quality",
    description: "Built with premium materials and rigorous quality control."
  },
  {
    // Overlapping circles Icon
    icon: (props: any) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="12" r="7" opacity="0.5"/>
        <circle cx="15" cy="12" r="7" opacity="0.5"/>
      </svg>
    ),
    title: "Multiple usages",
    description: "Can be used to hold liquids, powders, and semi-solids for various applications."
  },
  {
    // Clock Icon
    icon: (props: any) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Long lasting",
    description: "Our spout bags are designed to be durable and reliable."
  },
  {
    // Plant sprout
    icon: (props: any) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20h10"/>
      <path d="M10 20c5.5-2.5.8-6.4 3-10"/>
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/>
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>
      </svg>
    ),
    title: "Eco friendly",
    description: "Uses less plastic materials when compared to rigid containers like bottles."
  },
];


export function Solutions() {
    return (
    <div className="bg-gradient-to-b from-white to-[#faf8f3] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">Why use spout bags</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're committed to delivering spout bags with exceptional quality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3d7c47]/20 to-[#9caf88]/20 rounded-full mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <feature.icon className="h-10 w-10 text-[#2d5016]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}
