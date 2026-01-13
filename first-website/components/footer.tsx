import React, { useState } from "react";

export function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#2d5016] to-[#3d7c47] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-lg font-semibold">REPACK</h2>
                    <p className="mt-2 text-sm text-slate-400">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}