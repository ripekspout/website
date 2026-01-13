import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";

export function ProductDetailPage() {

    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const navigate = useNavigate();
    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#faf8f3] to-[#f5f1e8] flex items-center justify-center">
                <div className="p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                    <button
                        onClick={() => navigate("/")}
                        className="bg-[#d4b996] hover:bg-[#c0a580] text-white font-bold py-2 px-4 rounded"
                    >
                        Back to Products
                    </button>
                </div>
            </div>
        );
    }

    return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#faf8f3] pt-40 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-sm text-slate-600">
            <button
                onClick={() => navigate("/products")}
                className="bg-[#d4b996] hover:bg-[#c0a580] text-white font-bold py-2 px-4 rounded"
            >
                Back to Products
            </button>
            <span className="text-slate-900 font-medium">{product.category}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left Column - Images */}
                <div className="space-y-4">
                    {/* Main Image */}
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-xl">
                        <img
                            src={product.images[selectedImage]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                        {/* {!product.inStock && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">Out of Stock</span>
                            </div>
                        )} */}
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="grid grid-cols-3 gap-4">
                        {product.images.map((image, index) => (
                            <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className={`
                                aspect-square rounded-lg overflow-hidden transition-all duration-300
                                ${selectedImage === index 
                                ? 'ring-4 ring-[#3d7c47] scale-95' 
                                : 'hover:scale-95 opacity-70 hover:opacity-100'
                                }
                            `}
                            >
                            <img
                                src={image}
                                alt={`${product.name} view ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            </button>
                        ))}
                    </div>


                </div>


                {/* Right Column - Product Info */}
                <div className="space-y-6">
                    {/* Category Badge */}
                    <div className="inline-block px-4 py-1 bg-[#9caf88]/20 text-[#2d5016] rounded-full text-sm font-semibold">
                    {product.category}
                    </div>

                    {/* Product Name */}
                    <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                    {product.name}
                    </h1>

                    {/* Short Description */}
                    <p className="text-lg text-slate-600 leading-relaxed">
                    {product.description}
                    </p>

                    {/* Size */}
                    <div className="flex items-center gap-3 text-slate-600">
                        <ul>
                            <li>
                                <span className="font-medium">Size: {product.specs[0].value} x {product.specs[1].value}</span>
                            </li>
                            <li>
                                <span className="font-medium">Thickness: {product.specs[2].value}</span>
                            </li>
                            <li>
                                <span className="font-medium">Nozzle Diameter: {product.specs[3].value}</span>
                            </li>
                        </ul>                    
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default ProductDetailPage;