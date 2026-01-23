import React, { useState, useEffect, useRef } from 'react';

interface CarouselImage {
  id: number;
  url: string;
  alt: string;
}


export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
    const carouselRef = useRef<HTMLDivElement>(null);

    const images: CarouselImage[] = [
    { id: 1, url: `${import.meta.env.BASE_URL}Homepage-1.jpeg`, alt: 'spout bag medium' },
    { id: 2, url: `${import.meta.env.BASE_URL}Homepage-2.jpeg`, alt: 'spout bag medium' },
    ];

    // Parallax effect on mouse move
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const offsetX = (clientX - centerX) / 30;
        const offsetY = (clientY - centerY) / 30;
        
        setParallaxOffset({ x: offsetX, y: offsetY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

      // Auto-rotate carousel
    useEffect(() => {
        if (isDragging) return;
        
        const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isDragging, images.length]);

        // Drag handlers
    const handleDragStart = (clientX: number) => {
        setIsDragging(true);
        setStartX(clientX);
    };

    const handleDragMove = (clientX: number) => {
        if (!isDragging) return;
        const diff = clientX - startX;
        setTranslateX(diff);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        
        if (Math.abs(translateX) > 50) {
        if (translateX > 0) {
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        } else {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }
        }
        
        setTranslateX(0);
    };

        // Mouse events
    const handleMouseDown = (e: React.MouseEvent) => {
        handleDragStart(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        handleDragMove(e.clientX);
    };

    const handleMouseUp = () => {
        handleDragEnd();
    };

    const handleMouseLeave = () => {
        if (isDragging) {
        handleDragEnd();
        }
    };

        // Touch events
    const handleTouchStart = (e: React.TouchEvent) => {
        handleDragStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleDragMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        handleDragEnd();
    };

    // Navigation
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-[#faf8f3] to-[#f5f1e8] overflow-hidden px-4 sm:px-6 lg:px-8 py-8 mt-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
            
            {/* Left side - Text content */}
            <div className="text-center lg:text-left px-4 lg:px-8 animate-fadeInUp">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2d5016] mb-6 leading-tight">
                    Spout Bags
                </h1>
                <p className="text-left text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fadeInUp animation-delay-200">
                    High-quality spout bags for various purposes.
                    Crafted using enviromentaly friendly materials, Our spout bags are designed to provide durability and convenience for your packaging needs.                   
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fadeInUp animation-delay-400">
                    {/* <button className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-[#2d5016] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    Call to action
                    </button>
                    <button className="px-8 py-3 bg-transparent text-black font-semibold rounded-lg border-2 border-black hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5">
                    Secondary
                    </button> */}
                </div>
            </div>


            {/* Right side - Circular carousel */}
            <div className="relative flex flex-col items-center justify-center opacity-0 animate-fadeIn animation-delay-600">
            {/* Circle Container */}
            <div 
                className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] transition-transform duration-100 ease-out"
                style={{
                transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
                }}
            >
                {/* Carousel Wrapper */}
                <div
                ref={carouselRef}
                className="w-full h-full rounded-full overflow-hidden relative cursor-grab active:cursor-grabbing shadow-2xl border-8 border-white"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                >
                <div
                    className="flex h-full w-full"
                    style={{
                    transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
                    transition: isDragging ? 'none' : 'transform 0.5s ease-in-out',
                    }}
                >
                    {images.map((image) => (
                    <div key={image.id} className="min-w-full h-full flex items-center justify-center">
                        <img 
                        src={image.url} 
                        alt={image.alt}
                        className="w-full h-full object-cover select-none pointer-events-none"
                        draggable={false}
                        />
                    </div>
                    ))}
                </div>
                </div>

                {/* Navigation arrows */}
                <button 
                onClick={goToPrevious}
                className="absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[#2d5016] text-2xl sm:text-3xl font-bold shadow-lg transition-all duration-300 hover:scale-110 z-10"
                aria-label="Previous image"
                >
                ‹
                </button>
                <button 
                onClick={goToNext}
                className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[#2d5016] text-2xl sm:text-3xl font-bold shadow-lg transition-all duration-300 hover:scale-110 z-10"
                aria-label="Next image"
                >
                ›
                </button>

                {/* Decorative rotating circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-dashed border-[#3d7c47]/30 rounded-full animate-rotate-slow pointer-events-none hidden sm:block"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border-2 border-dashed border-[#9caf88]/30 rounded-full animate-rotate-reverse pointer-events-none hidden sm:block"></div>
            </div>

            {/* Dots indicator */}
            <div className="flex gap-3 mt-8 justify-center">
                {images.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                        ? 'w-8 bg-[#3d7c47]' 
                        : 'w-3 bg-gray-300 hover:bg-[#9caf88] hover:scale-110'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
                ))}
            </div>
            </div>
        </div>

        {/* Background decorations */}
        <div className="absolute top-[10%] left-[5%] w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#3d7c47]/10 blur-3xl animate-float pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[10%] w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-[#20b2aa]/10 blur-3xl animate-float-reverse pointer-events-none"></div>
    </section>
    );
}