import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


export function Navigation() {
    
    const [isScrolled, setIsScrolled] = useState(false);
    const [_, setPrevScrollY] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
    const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Add a small threshold to prevent flickering
            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            
            setPrevScrollY(currentScrollY);    
        };

        // Use passive event listener for better scroll performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Check initial scroll position
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    // Simple mock function to check active state
    const isActive = (path: string) => {
        if (path.startsWith('#')) {
            return location.pathname === '/' && location.hash === path;
        }
        return location.pathname === path;
    };

    const links = [
        { href: "#products", label: "Products" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact Us" }
    ];

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        // If it's a hash link (same page section)
        if (href.startsWith('#')) {
            // If we're not on the home page, navigate there first
            if (location.pathname !== '/') {
                navigate('/' + href);
                // Wait for navigation, then scroll
                setTimeout(() => {
                    const element = document.getElementById(href.substring(1));
                    if (element) {
                        const navHeight = isScrolled ? 64 : 96; // h-16 or h-24
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
            } else {
                // Already on home page, just scroll
                const element = document.getElementById(href.substring(1));
                if (element) {
                    const navHeight = isScrolled ? 64 : 96;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
                // Update URL
                window.history.pushState(null, '', href);
            }
        } else {
            // Regular route navigation
            navigate(href);
        }
    };

    return (
    <nav
            className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out opacity-80 ${
                isScrolled
                    ? 'bg-[#EFD294]/95 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    className={`
                        flex items-center transition-all duration-700 ease-in-out
                        ${isScrolled 
                            ? 'justify-between h-16' 
                            : 'justify-center h-20 md:h-24'
                        }
                    `}
                >
          {/* Logo */}
            <a
                href="/"
                onClick={(e) => handleClick(e, '/')}
                className="transition-all duration-500 ease-in-out"
            >
                <img 
                    src={isScrolled ? `${import.meta.env.BASE_URL}logo.png` : `${import.meta.env.BASE_URL}bordered.png`} 
                    alt="repack logo" 
                    className={`
                        w-auto transition-all duration-500 ease-in-out
                        ${isScrolled ? 'h-8' : 'h-10 md:h-12'}
                    `}
                />
            </a>

          {/* Desktop Navigation */}
            <div 
                className={`
                    hidden md:flex items-center gap-8 
                    transition-all duration-500 ease-in-out
                    ${isScrolled 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-4 pointer-events-none'
                    }
                `}
            >
            {isScrolled ? 
            links.map((link, index) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleClick(e, link.href)}
                        className={`
                            text-sm font-medium relative
                            transition-all duration-300 ease-out
                            ${isActive(link.href)
                                ? 'text-[#2d5016]'
                                : 'text-slate-700 hover:text-slate-900'
                            }
                        `}
                        style={{
                            transitionDelay: isScrolled ? `${index * 50}ms` : '0ms'
                        }}
                    >
                        {link.label}
                        {/* Active indicator with smooth animation */}
                        <span 
                            className={`
                                absolute -bottom-1 left-0 h-0.5 bg-[#3d7c47] rounded-full
                                transition-all duration-300 ease-out
                                ${isActive(link.href) ? 'w-full' : 'w-0'}
                            `}
                        />
                        {/* Hover underline */}
                        <span 
                            className={`
                                absolute -bottom-1 left-0 h-0.5 bg-slate-400 rounded-full
                                transition-all duration-300 ease-out
                                ${!isActive(link.href) ? 'w-0 group-hover:w-full' : 'w-0'}
                            `}
                        />
                    </a>
            )) : null}
          </div>

          {/* Mobile Menu Button
            <button
                className={`
                    md:hidden p-2 rounded-lg
                    transition-all duration-500 ease-in-out
                    ${isScrolled 
                        ? 'opacity-100 translate-x-0 text-slate-900 hover:bg-slate-100' 
                        : 'opacity-0 translate-x-4 pointer-events-none'
                    }
                `}
                aria-label="Toggle menu"
            >
                <svg
                    className="w-6 h-6 transition-transform duration-300 ease-out hover:scale-110"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button> */}
        </div>
      </div>
    </nav>

    );
}
