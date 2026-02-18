// import { link } from "fs";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


export function Navigation() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [_, setPrevScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            console.log(document.body.scrollTop)
            
            // Add a small threshold to prevent flickering
            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            
            setPrevScrollY(currentScrollY);
            
            // Detect which section is currently in view
            const sections = ['products', 'contact'];
            const navHeight = isScrolled ? 64 : 96;
            console.log(navHeight)
            
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if section is in viewport (accounting for navbar)
                    if (rect.top <= navHeight + 100 && rect.bottom >= navHeight) {
                        setActiveSection(`#${sectionId}`);
                        break;
                    }
                }
            }
        };

        // Use passive event listener for better scroll performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Check initial scroll position
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    // Check active state - now includes active section detection
    // const isActive = (path: string) => {
    //     if (path.startsWith('#')) {
    //         // Check if we're on homepage and either:
    //         // 1. The hash matches the URL hash
    //         // 2. The section is currently in view
    //         return location.pathname === '/' && 
    //                (location.hash === path || activeSection === path);
    //     }
    //     return location.pathname === path;
    // };

    const links = [
        { href: "#products", label: "Products" },
        { href: "#contact", label: "Contact Us" },
        { href: "repackpouch.com", label: "REPACK Home"}
    ];

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Don't prevent default for external link
        if (href === 'repackpouch.com') {
            return;
        }
        
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
                        const navHeight = isScrolled ? 64 : 96;
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
                setActiveSection(href);
            }
        } else {
            // Regular route navigation
            navigate(href);
        }
    };

    // useEffect(() => {
    //     const navElements = {
    //         root: null,
    //         rootMargin: "0px",
    //         threshold: 0.4,
    //     };
        
    //     const observer = new IntersectionObserver((entries : any) => {
    //         entries.forEach((entry : any) => {
    //             if (entry.isIntersection) {
    //                 setActiveSection(entry.target.id)
    //             }
    //         });
    //     }, navElements)

    //     links.forEach((link : any ) => {
    //         const element = document.getElementById(link.label)
    //         if (element) observer.observe(element);
    //     });

    //     return () => observer.disconnect();
    // }, links)

    return (
        <header className={`fixed left-0 right-0 z-50 ${isScrolled ? `bg-[#EFD294]/95 opacity-80` : `bg-transparent`} transition-all ease-in-out duration-500`}>
            <nav className={`
                flex
                justify-between pl-8 pr-8
                h-20
                `}>
                {/* logo */}
                <nav className={`
                    flex justify-center items-center
                    ${isScrolled ? `translate-x-100-` : `translate-x-100`}
                    transition-all ease-in-out duration-500
                    `}>
                    <a
                        href="/"
                        onClick={(e) => handleClick(e, '/')}
                        className="transition-all duration-500 ease-in-out"
                    >
                        <img 
                            src={`${import.meta.env.BASE_URL}transparent.png`} 
                            alt="repack logo" 
                            className=
                            {`
                                w-auto transition-all duration-500 ease-in-out
                                ${isScrolled ? 'h-8' : 'h-10 md:h-12'} 
                            `}
                        />
                    </a>
                </nav>

                {/* navbar elements */}
                {isScrolled ? 
                <nav className={`
                flex justify-center items-center left-0 gap-10
                `}>
                {links.map((link, index) => {
                    return(
                        <a                         
                        key={link.href}
                        href={link.href == 'repackpouch.com' ? "https://www.repackpouch.com" : link.href}
                        onClick={link.href == 'repackpouch.com' ? undefined : (e) => handleClick(e, link.href)}
                        className={`
                            text-sm font-medium relative
                            transition-all duration-300 ease-out
                            text-[#2d5016]
                        `}
                        style={{
                            transitionDelay: isScrolled ? `${index * 50}ms` : '0ms'
                        }}
                        >
                        {link.label}
                        </a>
                    )
                })}
                </nav> : null}
            </nav>
        </header> 
        
        // <nav
        //     className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out opacity-80 ${
        //         isScrolled
        //             ? 'bg-[#EFD294]/95 backdrop-blur-md shadow-lg'
        //             : 'bg-transparent'
        //     }`}
        // >
        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //         <div 
        //             className={`
        //                 flex items-center transition-all duration-700 ease-in-out
        //                 ${isScrolled 
        //                     ? 'justify-between h-16' 
        //                     : 'justify-center h-20 md:h-24'
        //                 }
        //             `}
        //         >
        //             {/* Logo */}
        //             <a
        //                 href="/"
        //                 onClick={(e) => handleClick(e, '/')}
        //                 className="transition-all duration-500 ease-in-out"
        //             >
        //                 <img 
        //                     src={`${import.meta.env.BASE_URL}transparent.png`} 
        //                     alt="repack logo" 
        //                     className={`
        //                         w-auto transition-all duration-500 ease-in-out
        //                         ${isScrolled ? 'h-8' : 'h-10 md:h-12'}
        //                     `}
        //                 />
        //             </a>

        //             {/* Desktop Navigation */}
        //             <div 
        //                 className={`
        //                     hidden md:flex items-center gap-8 
        //                     transition-all duration-500 ease-in-out
        //                     ${isScrolled 
        //                         ? 'opacity-100 translate-x-0' 
        //                         : 'opacity-0 -translate-x-4 pointer-events-none'
        //                     }
        //                 `}
        //             >
        //                 {isScrolled ? 
        //                     links.map((link, index) => (
        //                         <a
        //                             key={link.href}
        //                             href={link.href === 'repackpouch.com' ? "https://www.repackpouch.com" : link.href}
        //                             onClick={link.href === 'repackpouch.com' ? undefined : (e) => handleClick(e, link.href)}
        //                             target={link.href === 'repackpouch.com' ? '_blank' : undefined}
        //                             rel={link.href === 'repackpouch.com' ? 'noopener noreferrer' : undefined}
        //                             className={`
        //                                 group text-sm font-medium relative
        //                                 transition-all duration-300 ease-out
        //                                 ${isActive(link.href)
        //                                     ? 'text-[#2d5016]'
        //                                     : 'text-slate-700 hover:text-slate-900'
        //                                 }
        //                             `}
        //                             style={{
        //                                 transitionDelay: isScrolled ? `${index * 50}ms` : '0ms'
        //                             }}
        //                         >
        //                             {link.label}
                                    
        //                             {/* Active indicator with smooth animation */}
        //                             <span 
        //                                 className={`
        //                                     absolute -bottom-1 left-0 h-0.5 bg-[#3d7c47] rounded-full
        //                                     transition-all duration-300 ease-out
        //                                     ${isActive(link.href) ? 'w-full' : 'w-0'}
        //                                 `}
        //                             />
                                    
        //                             {/* Hover underline */}
        //                             <span 
        //                                 className={`
        //                                     absolute -bottom-1 left-0 h-0.5 bg-[#3d7c47] rounded-full
        //                                     transition-all duration-300 ease-out
        //                                     ${isActive(link.href) ? 'w-0' : 'w-0 group-hover:w-full'}
        //                                 `}
        //                             />
        //                         </a>
        //                     )) 
        //                 : null}
        //             </div>

        //             {/* Mobile Menu Button - Updated with matching colors */}
        //             <button
        //                 className={`
        //                     md:hidden p-2 rounded-lg
        //                     transition-all duration-500 ease-in-out
        //                     ${isScrolled 
        //                         ? 'opacity-100 translate-x-0 text-[#2d5016] hover:bg-[#9caf88]/20' 
        //                         : 'opacity-0 translate-x-4 pointer-events-none'
        //                     }
        //                 `}
        //                 aria-label="Toggle menu"
        //             >
        //                 <svg
        //                     className="w-6 h-6 transition-transform duration-300 ease-out hover:scale-110"
        //                     fill="none"
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     strokeWidth="2"
        //                     viewBox="0 0 24 24"
        //                     stroke="currentColor"
        //                 >
        //                     <path d="M4 6h16M4 12h16M4 18h16"></path>
        //                 </svg>
        //             </button>
        //         </div>
        //     </div>
        // </nav>
    );
}

export default Navigation;