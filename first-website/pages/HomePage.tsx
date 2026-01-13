import React, { useState } from "react";
import { Hero } from "../components/Hero";
import { Solutions } from "../components/Solutions";
import { Contact } from "../components/Contact";
import { Products } from "../components/Products";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

export function HomePage() {

    return (
    <div className="min-h-screen bg-white">
        <Hero />
        <Solutions />
        <Products />
        <Contact />
    </div>
    );
}

export default HomePage;