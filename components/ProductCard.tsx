import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Card } from './ui/card';


interface ProductCardProps {
    id: string;
    name: string;
    category?: string;
    description: string;
    images?: string[];
    specs: { label: string; value: string }[];
    rating?: number;
}

export function ProductCard({ id, name, description, images }: ProductCardProps) {
  const navigate = useNavigate();

  const [imageError, ] = useState(false);
  const showComingSoon = !images || images.length === 0 || imageError || images[0].length == 0 ;
  console.log(showComingSoon)

  return (
    showComingSoon ? (
              <div className="coming-soon-placeholder">
                <span className="coming-soon-icon">📦</span>
                <h3>Coming Soon</h3>
              </div>
    )
    : (
          <Card 
      className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/products/${id}`)}
    >
      <div className="rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300">
        
        {/* Image Section */}
        <div className="relative overflow-hidden aspect-square bg-slate-100">
            <img 
              src={images[0]} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                // Fallback image if the URL is broken (like 'aaaa')
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300?text=No+Image';
              }}
            />
        </div>
        
        {/* Content Section */}
        <div className="p-6">          
          <h3 className="font-semibold leading-none tracking-tight mb-2 text-lg">{name}</h3>
          <p className="text-sm text-slate-600 mb-4 line-clamp-2">{description}</p>
        </div>
      </div>
    </Card>

    )

    
  );
}