import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from '../components/Footer'

import { HomePage } from '../pages/homepage'
import { ProductsPage } from '../pages/products'
import { ProductDetailPage } from '../pages/ProductDetailPage'

import './App.css'
import { Navigation } from '../components/Navigation'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#faf8f3] to-[#f5f1e8] flex flex-col font-sans">

      {/* Main Content Area */}
      <main className="flex-1">
        {/* We render the determined component and pass the fetched items as a prop */}
        {/* <CurrentPage items={items} loading={loading} /> */}
        
        <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            {/* <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>

      </main>

      <Footer />
    </div>

    </>
  )
}

export default App
