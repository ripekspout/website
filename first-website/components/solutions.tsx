import React, { useState } from "react";

const features = [
  {
    // Diamond Jewel Icon
    icon: (props: any) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/>
        <path d="M12 7l-3 5h6l-3-5z"/>
        <path d="M12 17l3-5H9l3 5z"/>
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
  }
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
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
