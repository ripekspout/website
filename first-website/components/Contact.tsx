import React, { useState } from "react";

export function Contact() {
    return (
        <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left side - Contact Information */}
            <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Visit Our Sustainable Store
                </h2>
                
                <div className="space-y-2 text-slate-600">
                <p className="font-medium text-lg">The Location</p>
                <p>1234 Garden Boulevard</p>
                <p>City, CZ 98765</p>
                </div>

                <div className="space-y-3 text-slate-600">
                <div className="flex items-start gap-3">
                    <svg 
                    className="w-5 h-5 text-[#3d7c47] mt-0.5 flex-shrink-0" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@repack.com" className="text-[#3d7c47] hover:underline">
                        hello@repack.com
                    </a>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <svg 
                    className="w-5 h-5 text-[#3d7c47] mt-0.5 flex-shrink-0" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-[#3d7c47] hover:underline">
                        +1 (234) 567-890
                    </a>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <svg 
                    className="w-5 h-5 text-[#3d7c47] mt-0.5 flex-shrink-0" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    >
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                    <p className="font-medium">Store Hours</p>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat - Sun: 10:00 AM - 4:00 PM</p>
                    </div>
                </div>
                </div>

                <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center gap-2">
                Get directions
                <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
                </button>
            </div>

            {/* Right side - Map */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                {/* Google Maps Embed */}
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6174325978963!2d-73.98823492346447!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.3] contrast-[1.1]"
                ></iframe>

                {/* Optional: Custom map pin overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none">
                <svg 
                    className="w-12 h-12 text-red-500 drop-shadow-lg animate-bounce" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}